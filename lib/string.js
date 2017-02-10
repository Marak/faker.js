/**
 *
 * @namespace faker.string
 */
function AString (faker) {

  var randomstring = require('randomstring');
  var S = require('string');

  /**
   * random
   *
   * @method random
   * @param {Object} options
   * @memberof faker.string
   */
  this.random = function (options) {
    return randomstring.generate(options);
  };

  var defaults = {
    address: 'city',
    lorem: 'words',
    commerce: 'productName',
    company: 'companyName',
    finance: 'accountName',
    random: 'words'
  }

  var validCategories = Object.keys(defaults).join(', ');

  /**
   * random
   *
   * options.type and options.transform
   * each with .method and .args)

   * @method useful
   * @param {Object} options
   * @memberof faker.string
   */
  this.useful = function (options) {
    options = options || {};
    var type = options.type || 'lorem';
    var transform = options.transform

    if (type && defaults[type]) {
      var ctx = options[type] || {};

      var method = ctx.method || defaults[type];
      var args = ctx.args || [];
      var category = faker[type];

      if (!category) {
        console.error('Missing or bad category type ' + type + '. Must be one of ' + validCategories);
        console.log('The option ' + type + ' can either be a string or an Object with a string.js .method name and an optional .args Array')
        console.log("Example: faker.string.useful({type: 'finance',transform: 'dasherize'})");

        throw 'Faker.string.useful: Bad type: ' + type
      }

      var value = category[method].apply(this, args)

      // transform value by calling any of the string.js methods
      // can be used to dasherize, camelize or humanize etc. a string
      if (transform) {
        method = transform.method || transform;
        args = transform.args || [];
        ctx = S(value);
        value = ctx[method].apply(ctx, args).s;
      }

      if (value[0] === '-')
        value = value.slice(1);

      return value;
    } else {
      throw 'Faker.string.useful: Invalid type option ' + options.type + '. Must be one of ' + validCategories;
    }
  };
}

module['exports'] = AString;