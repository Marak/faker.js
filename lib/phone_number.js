var Faker = require('../index');
var Helpers = require('./helpers');
var definitions = require('./definitions');

var phone = {
    phoneNumber: function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.phone_formats());
    },

    // FIXME: this is strange passing in an array index.
    phoneNumberFormat: function (phoneFormatsArrayIndex) {
        return Helpers.replaceSymbolWithNumber(definitions.phone_formats[phoneFormatsArrayIndex]);
    }
};

module.exports = phone;
