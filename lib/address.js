var Helpers = require('./helpers');
var Faker = require('../index');
var definitions = require('../lib/definitions');

var address = {
    zipCode: function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.array_element(["#####", '#####-####']));
    },

    zipCodeFormat: function (format) {
        return Helpers.replaceSymbolWithNumber(["#####", '#####-####'][format]);
    },

    postalCode: function (format) {
        return Helpers.randomPostalCode(format);
    },

    city: function () {
        switch (Faker.random.number(4)) {
        case 0:
            return Faker.random.city_prefix() + " " + Faker.random.first_name() + Faker.random.city_suffix();
        case 1:
            return Faker.random.city_prefix() + " " + Faker.random.first_name();
        case 2:
            return Faker.random.first_name() + Faker.random.city_suffix();
        case 3:
            return Faker.random.last_name() + Faker.random.city_suffix();
        }
    },

    streetName: function () {
        switch (Faker.random.number(2)) {
        case 0:
            return Faker.random.last_name() + " " + Faker.random.street_suffix();
        case 1:
            return Faker.random.first_name() + " " + Faker.random.street_suffix();
        }
    },

    //
    // TODO: change all these methods that accept a boolean to instead accept an options hash.
    //
    streetAddress: function (useFullAddress) {
        if (useFullAddress === undefined) { useFullAddress = false; }
        var address = "";
        switch (Faker.random.number(3)) {
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
        return Helpers.replaceSymbolWithNumber(Faker.random.array_element(
            [
                'Apt. ###',
                'Suite ###'
            ]
        ));
    },

    brState: function (useAbbr) {
        return useAbbr ? Faker.random.br_state_abbr() : Faker.random.br_state();
    },

    ukCounty: function () {
        return Faker.random.uk_county();
    },

    ukCountry: function () {
        return Faker.random.uk_country();
    },

    usState: function (useAbbr) {
        return useAbbr ? Faker.random.us_state_abbr() : Faker.random.us_state();
    }
};

module.exports = address;
