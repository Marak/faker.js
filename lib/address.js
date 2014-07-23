var Helpers = require('./helpers');
var faker = require('../index');
var definitions = require('../lib/definitions');

var address = {
    zipCode: function () {
        return Helpers.replaceSymbolWithNumber(faker.random.array_element(["#####", '#####-####']));
    },

    zipCodeFormat: function (format) {
        return Helpers.replaceSymbolWithNumber(["#####", '#####-####'][format]);
    },

    city: function () {
        var result;
        switch (faker.random.number(4)) {
        case 0:
            result = faker.random.city_prefix() + " " + faker.random.first_name() + faker.random.city_suffix();
            break;
        case 1:
            result = faker.random.city_prefix() + " " + faker.random.first_name();
            break;
        case 2:
            result = faker.random.first_name() + faker.random.city_suffix();
            break;
        case 3:
            result = faker.random.last_name() + faker.random.city_suffix();
            break;
        }
        return result;
    },

    streetName: function () {
        var result;
        switch (faker.random.number(2)) {
        case 0:
            result = faker.random.last_name() + " " + faker.random.street_suffix();
            break;
        case 1:
            result = faker.random.first_name() + " " + faker.random.street_suffix();
            break;
        }
        return result;
    },

    //
    // TODO: change all these methods that accept a boolean to instead accept an options hash.
    //
    streetAddress: function (useFullAddress) {
        if (useFullAddress === undefined) { useFullAddress = false; }
        var address = "";
        switch (faker.random.number(3)) {
        case 0:
            address = Helpers.replaceSymbolWithNumber("#####") + " " + this.streetName();
            break;
        case 1:
            address = Helpers.replaceSymbolWithNumber("####") +  " " + this.streetName();
            break;
        case 2:
            address = Helpers.replaceSymbolWithNumber("###") + " " + this.streetName();
            break;
        }
        return useFullAddress ? (address + " " + this.secondaryAddress()) : address;
    },

    secondaryAddress: function () {
        return Helpers.replaceSymbolWithNumber(faker.random.array_element(
            [
                'Apt. ###',
                'Suite ###'
            ]
        ));
    },

    brState: function (useAbbr) {
        return useAbbr ? faker.random.br_state_abbr() : faker.random.br_state();
    },

    ukCounty: function () {
        return faker.random.uk_county();
    },

    ukCountry: function () {
        return faker.random.uk_country();
    },

    usState: function (useAbbr) {
        return useAbbr ? faker.random.us_state_abbr() : faker.random.us_state();
    },

    latitude: function () {
        return (faker.random.number(180 * 10000) / 10000.0 - 90.0).toFixed(4);
    },

    longitude: function () {
        return (faker.random.number(360 * 10000) / 10000.0 - 180.0).toFixed(4);
    }
};

module.exports = address;
