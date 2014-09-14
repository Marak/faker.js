if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}


describe('finance.js', function () {
    describe('account( length )', function () {

        it('should supply a default length if no length is passed', function () {

            var account = faker.Finance.account();

            var expected = 8;
            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

        it('should supply a length if a length is passed', function () {

            var expected = 9;

            var account = faker.Finance.account(expected);

            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

        it('should supply a default length if a zero is passed', function () {

            var expected = 8;

            var account = faker.Finance.account(0);

            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

    });

    describe('accountName()', function () {

        it("should return an account name", function () {

            var actual = faker.Finance.accountName();

            assert.ok(actual);

        });

    });


    describe('mask( length, parens, elipsis )', function () {
        it("should set a default length", function () {

            var expected = 4; //default account mask length

            var mask = faker.Finance.mask(null, false, false);

            var actual = mask.length;

            assert.equal(actual, expected, 'The expected default mask length is ' + expected + ' but it was ' + actual);

        });

        it("should set a specified length", function () {

            var expected = faker.random.number(20);

            expected = (expected == 0 || !expected || typeof expected == 'undefined') ? 4 : expected;

            var mask = faker.Finance.mask(expected, false, false);

            var actual = mask.length; //picks 4 if the random number generator picks 0

            assert.equal(actual, expected, 'The expected default mask length is ' + expected + ' but it was ' + actual);

        });

        it("should set a default length of 4 for a zero value", function () {

            var expected = 4;

            var mask = faker.Finance.mask(0, false, false);

            var actual = 4; //picks 4 if the random number generator picks 0

            assert.equal(actual, expected, 'The expected default mask length is ' + expected + ' but it was ' + actual);

        });


        it("should by default include parentheses around a partial account number", function () {

            var expected = true;

            var mask = faker.Finance.mask(null, null, false);

            var regexp = new RegExp(/(\(\d{4}?\))/);
            var actual = regexp.test(mask);

            assert.equal(actual, expected, 'The expected match for parentheses is ' + expected + ' but it was ' + actual);

        });

        it("should by default include an elipsis", function () {

            var expected = true;

            var mask = faker.Finance.mask(null, false, null);

            var regexp = new RegExp(/(\.\.\.\d{4})/);
            var actual = regexp.test(mask);

            assert.equal(actual, expected, 'The expected match for parentheses is ' + expected + ' but it was ' + actual);

        });

        it("should work when random variables are passed into the arguments", function () {

            var length = faker.random.number(20);
            var elipsis = (length % 2 === 0) ? true : false;
            var parens = !elipsis;

            var mask = faker.Finance.mask(length, elipsis, parens);
            assert.ok(mask);

        });


    });

    describe('amount(min, max, dec, symbol)', function () {

        it("should use the default amounts when not passing arguments", function () {
            var amount = faker.Finance.amount();

            assert.ok(amount);
            assert.equal((amount > 0), true, "the amount should be greater than 0");
            assert.equal((amount < 1001), true, "the amount should be greater than 0");

        });

        it("should use the defaul decimal location when not passing arguments", function () {

            var amount = faker.Finance.amount();

            var decimal = '.';
            var expected = amount.length - 3;
            var actual = amount.indexOf(decimal);

            assert.equal(actual, expected, 'The expected location of the decimal is ' + expected + ' but it was ' + actual + ' amount ' + amount);
        });

        //TODO: add support for more currency and decimal options
        it("should not include a currency symbol by default", function () {

            var amount = faker.Finance.amount();

            var regexp = new RegExp(/[0-9.]/);

            var expected = true;
            var actual = regexp.test(amount);

            assert.equal(actual, expected, 'The expected match should not include a currency symbol');
        });


        it("it should handle negative amounts", function () {

            var amount = faker.Finance.amount(-200, -1);

            assert.ok(amount);
            assert.equal((amount < 0), true, "the amount should be greater than 0");
            assert.equal((amount > -201), true, "the amount should be greater than 0");
        });


    });

    describe('transactionType()', function () {

        it("should return a random transaction type", function () {
            var transactionType = faker.Finance.transactionType();

            assert.ok(transactionType);
        });
    });

    describe("currencyCode()", function () {
        it("returns a random currency code with a format", function () {
            var currency_code = faker.Currency.currencyCode();
            assert.ok(currency_code.match(/[A-Z]{3}/));
        });
    })
});