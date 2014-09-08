var faker = require('../index');

var currency = {
    currencyCode: function () {
        return faker.random.currency_codes();
    },

    currencyName: function () {
        return faker.random.currency_names();
    }
};

module.exports = currency;
