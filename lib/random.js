var definitions = require('./definitions');
var mersenne = require('../vendor/mersenne');
var faker = require('../index');

var random = {
    // returns a single random number based on a max number or range
    number: function (options) {

        if (typeof options === "number") {
          var options = {
            max: options
          };
        }

        options = options || {
          min: 0,
          max: 1,
          precision: 1
        };

        if (typeof options.min === "undefined") {
          options.min = 0;
        }

        if (typeof options.max === "undefined") {
          options.max = 1;
        }

        // by incrementing max by 1, max becomes inclusive of the range
        if (options.max > 0) {
          options.max++;
        }

        var randomNumber = mersenne.rand(options.max, options.min);
        return randomNumber;

    },

    // takes an array and returns the array randomly sorted
    array_element: function (array) {
        var r = faker.random.number({ max: array.length -1 });
        return array[r];
    },

    city_prefix: function () {
        return faker.random.array_element(definitions.city_prefix);
    },

    city_suffix: function () {
        return faker.random.array_element(definitions.city_suffix);
    },

    street_suffix: function () {
        return faker.random.array_element(definitions.street_suffix);
    },

    br_state: function () {
        return faker.random.array_element(definitions.br_state);
    },

    br_state_abbr: function () {
        return faker.random.array_element(definitions.br_state_abbr);
    },

    us_state: function () {
        return faker.random.array_element(definitions.us_state);
    },

    us_state_abbr: function () {
        return faker.random.array_element(definitions.us_state_abbr);
    },

    uk_county: function () {
        return faker.random.array_element(definitions.uk_county);
    },

    uk_country: function () {
        return faker.random.array_element(definitions.uk_country);
    },

    first_name: function () {
        return faker.random.array_element(definitions.first_name);
    },

    last_name: function () {
        return faker.random.array_element(definitions.last_name);
    },

    name_prefix: function () {
        return faker.random.array_element(definitions.name_prefix);
    },

    name_suffix: function () {
        return faker.random.array_element(definitions.name_suffix);
    },

    catch_phrase_adjective: function () {
        return faker.random.array_element(definitions.catch_phrase_adjective);
    },

    catch_phrase_descriptor: function () {
        return faker.random.array_element(definitions.catch_phrase_descriptor);
    },

    catch_phrase_noun: function () {
        return faker.random.array_element(definitions.catch_phrase_noun);
    },

    bs_adjective: function () {
        return faker.random.array_element(definitions.bs_adjective);
    },

    bs_buzz: function () {
        return faker.random.array_element(definitions.bs_buzz);
    },

    bs_noun: function () {
        return faker.random.array_element(definitions.bs_noun);
    },

    phone_formats: function () {
        return faker.random.array_element(definitions.phone_formats);
    },

    phone_codes: function () {
        return faker.random.array_element(definitions.phone_codes);
    },
    domain_suffix: function () {
        return faker.random.array_element(definitions.domain_suffix);
    },

    avatar_uri: function () {
        return faker.random.array_element(definitions.avatar_uri);
    },
	
    currency_codes: function () {
        return faker.random.array_element(definitions.currency_codes);
    },

    currency_names: function () {
        return faker.random.array_element(definitions.currency_names);
    }

};

module.exports = random;
