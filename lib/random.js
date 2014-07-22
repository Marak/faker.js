var definitions = require('./definitions');
var random = {
    // returns a single random number based on a max number or range
    number: function (min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return Math.floor((Math.random() * max) + min);
    },

    // takes an array and returns the array randomly sorted
    array_element: function (array) {
        var r = Math.floor(Math.random() * array.length);
        return array[r];
    },

    city_prefix: function () {
        return this.array_element(definitions.city_prefix);
    },

    city_suffix: function () {
        return this.array_element(definitions.city_suffix);
    },

    street_suffix: function () {
        return this.array_element(definitions.street_suffix);
    },

    br_state: function () {
        return this.array_element(definitions.br_state);
    },

    br_state_abbr: function () {
        return this.array_element(definitions.br_state_abbr);
    },

    us_state: function () {
        return this.array_element(definitions.us_state);
    },

    us_state_abbr: function () {
        return this.array_element(definitions.us_state_abbr);
    },

    uk_county: function () {
        return this.array_element(definitions.uk_county);
    },

    uk_country: function () {
        return this.array_element(definitions.uk_country);
    },

    first_name: function () {
        return this.array_element(definitions.first_name);
    },

    last_name: function () {
        return this.array_element(definitions.last_name);
    },

    name_prefix: function () {
        return this.array_element(definitions.name_prefix);
    },

    name_suffix: function () {
        return this.array_element(definitions.name_suffix);
    },

    catch_phrase_adjective: function () {
        return this.array_element(definitions.catch_phrase_adjective);
    },

    catch_phrase_descriptor: function () {
        return this.array_element(definitions.catch_phrase_descriptor);
    },

    catch_phrase_noun: function () {
        return this.array_element(definitions.catch_phrase_noun);
    },

    bs_adjective: function () {
        return this.array_element(definitions.bs_adjective);
    },

    bs_buzz: function () {
        return this.array_element(definitions.bs_buzz);
    },

    bs_noun: function () {
        return this.array_element(definitions.bs_noun);
    },

    phone_formats: function () {
        return this.array_element(definitions.phone_formats);
    },

    domain_suffix: function () {
        return this.array_element(definitions.domain_suffix);
    },

    avatar_uri: function () {
        return this.array_element(definitions.avatar_uri);
    }


};

module.exports = random;
