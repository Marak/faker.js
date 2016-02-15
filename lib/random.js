var mersenne = require('../vendor/mersenne');

function Random (faker, seed) {
  // Use a user provided seed if it exists
  if (seed) {
    if (Array.isArray(seed) && seed.length) {
      mersenne.seed_array(seed);
    }
    else {
      mersenne.seed(seed);
    }
  }

  // returns a single random number based on a max number or range
  this.number = function (min_options, max) {
    // default options
    var defOptions = {
      max: 99999,
      min: 0,
      precision: 1
    };

    if (typeof min_options === "number") {
      // User passed a number as the first parameter
      if (typeof max === "number" && min_options < max) {
        // User passed two number as the parameters  -> range
        defOptions.max = max;
        defOptions.min = min_options;
      } else {
        // User passed only one number... -> max value
        defOptions.max = min_options;
      }
    } else if (typeof min_options === "object") {
      // User passed an object -> options to be merged into the defaults
      for (var i in min_options) {
        if(defOptions.hasOwnProperty(i) && min_options.hasOwnProperty(i)) {
          defOptions[i] = min_options[i];
        }
      }
    }

    // Make the range inclusive of the max value
    if (defOptions.max >= 0) {
      defOptions.max += defOptions.precision;
    }

    var randomNumber = defOptions.precision * Math.floor(
      mersenne.rand(defOptions.max / defOptions.precision, defOptions.min / defOptions.precision));

    return randomNumber;

  };

  // takes an array and returns a random element of the array
  this.arrayElement = function (array) {
      array = array || ["a", "b", "c"];
      var r = faker.random.number({ max: array.length - 1 });
      return array[r];
  }

  // takes an object and returns the randomly key or value
  this.objectElement = function (object, field) {
      object = object || { "foo": "bar", "too": "car" };
      var array = Object.keys(object);
      var key = faker.random.arrayElement(array);

      return field === "key" ? key : object[key];
  }

  this.uuid = function () {
      var self = this;
      var RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
      var replacePlaceholders = function (placeholder) {
          var random = self.number({ min: 0, max: 15 });
          var value = placeholder == 'x' ? random : (random &0x3 | 0x8);
          return value.toString(16);
      };
      return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
  }

  this.boolean = function () {
      return !!faker.random.number(1)
  }

  // TODO: have ability to return specific type of word? As in: noun, adjective, verb, etc
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
    return faker.fake('{{' + randomWordMethod + '}}');

  }

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

  this.image = function randomImage () {
    return faker.image.image();
  }

  this.locale = function randomLocale () {
    return faker.random.arrayElement(Object.keys(faker.locales));
  };

  return this;

}

module['exports'] = Random;
