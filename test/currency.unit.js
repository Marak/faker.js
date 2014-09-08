if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("currency.js", function () {
    describe("currencyCode()", function () {
        it("returns a random currency code with a format", function () {
            var currency_code = faker.Currency.currencyCode();
            assert.ok(currency_code.match(/[A-Z]{3}/));
        });
    })
});
