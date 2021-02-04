var mersenne = require('../vendor/mersenne');

/**
 *
 * @namespace faker.random
 */
function Random (faker, seed) {
  // Use a user provided seed if it is an array or number
  if (Array.isArray(seed) && seed.length) {
    mersenne.seed_array(seed);
  }
  else if(!isNaN(seed)) {
    mersenne.seed(seed);
  }

  /**
   * returns a single random number based on a max number or range
   *
   * @method faker.random.number
   * @param {mixed} options {min, max, precision}
   */
  this.number = function (options) {

    if (typeof options === "number") {
      options = {
        max: options
      };
    }

    options = options || {};

    if (typeof options.min === "undefined") {
      options.min = 0;
    }

    if (typeof options.max === "undefined") {
      options.max = 99999;
    }
    if (typeof options.precision === "undefined") {
      options.precision = 1;
    }

    // Make the range inclusive of the max value
    var max = options.max;
    if (max >= 0) {
      max += options.precision;
    }

    var randomNumber = Math.floor(
      mersenne.rand(max / options.precision, options.min / options.precision));
    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01
    randomNumber = randomNumber / (1 / options.precision);

    return randomNumber;

  }

  /**
   * returns a single random floating-point number based on a max number or range
   *
   * @method faker.random.float
   * @param {mixed} options
   */
  this.float = function (options) {
      if (typeof options === "number") {
        options = {
          precision: options
        };
      }
      options = options || {};
      var opts = {};
      for (var p in options) {
        opts[p] = options[p];
      }
      if (typeof opts.precision === 'undefined') {
        opts.precision = 0.01;
      }
      return faker.random.number(opts);
  }
  
  /**
   * takes an array and returns a random element of the array
   *
   * @method faker.random.arrayElement
   * @param {array} array
   */
  this.arrayElement = function (array) {
      array = array || ["a", "b", "c"];
      var r = faker.random.number({ max: array.length - 1 });
      return array[r];
  }

  /**
   * takes an array and returns a subset with random elements of the array
   *
   * @method faker.random.arrayElements
   * @param {array} array
   * @param {number} count number of elements to pick
   */
  this.arrayElements = function (array, count) {
      array = array || ["a", "b", "c"];

      if (typeof count !== 'number') {
        count = faker.random.number({ min: 1, max: array.length });
      } else if (count > array.length) {
        count = array.length;
      } else if (count < 0) {
        count = 0;
      }

      var arrayCopy = array.slice();
      var countToRemove = arrayCopy.length - count;
      for (var i = 0; i < countToRemove; i++) {
        var indexToRemove = faker.random.number({ max: arrayCopy.length - 1 });
        arrayCopy.splice(indexToRemove, 1);
      }

      return arrayCopy;
  }

  /**
   * takes an object and returns the randomly key or value
   *
   * @method faker.random.objectElement
   * @param {object} object
   * @param {mixed} field
   */
  this.objectElement = function (object, field) {
      object = object || { "foo": "bar", "too": "car" };
      var array = Object.keys(object);
      var key = faker.random.arrayElement(array);

      return field === "key" ? key : object[key];
  }

  /**
   * uuid
   *
   * @method faker.random.uuid
   */
  this.uuid = function () {
      var RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
      var replacePlaceholders = function (placeholder) {
          var random = faker.random.number({ min: 0, max: 15 });
          var value = placeholder == 'x' ? random : (random &0x3 | 0x8);
          return value.toString(16);
      };
      return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
  }

  /**
   * boolean
   *
   * @method faker.random.boolean
   */
  this.boolean = function () {
      return !!faker.random.number(1)
  }

  // TODO: have ability to return specific type of word? As in: noun, adjective, verb, etc
  /**
   * word
   *
   * @method faker.random.word
   * @param {string} type
   */
  this.word = function randomWord (type) {

    var wordMethods = [
    'commerce.department',
    'commerce.productName',
    'commerce.productAdjective',
    'commerce.productMaterial',
    'commerce.product',
    'commerce.color',

    'company.catchPhraseAdjective',
    'company.catchPhraseDescriptor',
    'company.catchPhraseNoun',
    'company.bsAdjective',
    'company.bsBuzz',
    'company.bsNoun',
    'address.streetSuffix',
    'address.county',
    'address.country',
    'address.state',

    'finance.accountName',
    'finance.transactionType',
    'finance.currencyName',

    'hacker.noun',
    'hacker.verb',
    'hacker.adjective',
    'hacker.ingverb',
    'hacker.abbreviation',

    'name.jobDescriptor',
    'name.jobArea',
    'name.jobType'];

    // randomly pick from the many faker methods that can generate words
    var randomWordMethod = faker.random.arrayElement(wordMethods);
    var result = faker.fake('{{' + randomWordMethod + '}}');
    return faker.random.arrayElement(result.split(' '));
  }

  /**
   * randomWords
   *
   * @method faker.random.words
   * @param {number} count defaults to a random value between 1 and 3
   */
  this.words = function randomWords (count) {
    var words = [];
    if (typeof count === "undefined") {
      count = faker.random.number({min:1, max: 3});
    }
    for (var i = 0; i<count; i++) {
      words.push(faker.random.word());
    }
    return words.join(' ');
  }

  /**
   * locale
   *
   * @method faker.random.image
   */
  this.image = function randomImage () {
    return faker.image.image();
  }

  /**
   * locale
   *
   * @method faker.random.locale
   */
  this.locale = function randomLocale () {
    return faker.random.arrayElement(Object.keys(faker.locales));
  };

    /**
   * alpha. returns lower/upper alpha characters based count and upcase options
   *
   * @method faker.random.alpha
   * @param {mixed} options // defaults to { count: 1, upcase: false }
   */
  this.alpha = function alpha(options) {
    if (typeof options === "undefined") {
      options = {
        count: 1
      }
    } else if (typeof options === "number") {
      options = {
        count: options,
      }
    } else if (typeof options.count === "undefined") {
      options.count = 1
    }

    if (typeof options.upcase === "undefined") {
      options.upcase = false;
    }

    var wholeString = "";
    for(var i = 0; i < options.count; i++) {
      wholeString += faker.random.arrayElement(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    }

    return options.upcase ? wholeString.toUpperCase() : wholeString;
  };

  /**
   * alphaNumeric
   *
   * @method faker.random.alphaNumeric
   * @param {number} count defaults to 1
   */
  this.alphaNumeric = function alphaNumeric(count) {
    if (typeof count === "undefined") {
      count = 1;
    }

    var wholeString = "";
    for(var i = 0; i < count; i++) {
      wholeString += faker.random.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    }

    return wholeString;
  };

  /**
   * hexaDecimal
   *
   * @method faker.random.hexaDecimal
   * @param {number} count defaults to 1
   */
  this.hexaDecimal = function hexaDecimal(count) {
    if (typeof count === "undefined") {
      count = 1;
    }

    var wholeString = "";
    for(var i = 0; i < count; i++) {
      wholeString += faker.random.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
    }

    return "0x"+wholeString;
  };

  return this;

}

module['exports'] = Random;
