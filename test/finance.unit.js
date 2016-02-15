if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}


describe('finance.js', function () {
    describe('account( length )', function () {

        it('should supply a default length if no length is passed', function () {

            var account = faker.finance.account();

            var expected = 8;
            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

        it('should supply a length if a length is passed', function () {

            var expected = 9;

            var account = faker.finance.account(expected);

            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

        it('should supply a default length if a zero is passed', function () {

            var expected = 8;

            var account = faker.finance.account(0);

            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

    });

    describe('accountName()', function () {

        it("should return an account name", function () {

            var actual = faker.finance.accountName();

            assert.ok(actual);

        });

    });


    describe('mask( length, parens, elipsis )', function () {
        it("should set a default length", function () {

            var expected = 4; //default account mask length

            var mask = faker.finance.mask(null, false, false);

            var actual = mask.length;

            assert.equal(actual, expected, 'The expected default mask length is ' + expected + ' but it was ' + actual);

        });

        it("should set a specified length", function () {

            var expected = faker.random.number(20);

            expected = (expected == 0 || !expected || typeof expected == 'undefined') ? 4 : expected;

            var mask = faker.finance.mask(expected, false, false);

            var actual = mask.length; //picks 4 if the random number generator picks 0

            assert.equal(actual, expected, 'The expected default mask length is ' + expected + ' but it was ' + actual);

        });

        it("should set a default length of 4 for a zero value", function () {

            var expected = 4;

            var mask = faker.finance.mask(0, false, false);

            var actual = 4; //picks 4 if the random number generator picks 0

            assert.equal(actual, expected, 'The expected default mask length is ' + expected + ' but it was ' + actual);

        });


        it("should by default include parentheses around a partial account number", function () {

            var expected = true;

            var mask = faker.finance.mask(null, null, false);

            var regexp = new RegExp(/(\(\d{4}?\))/);
            var actual = regexp.test(mask);

            assert.equal(actual, expected, 'The expected match for parentheses is ' + expected + ' but it was ' + actual);

        });

        it("should by default include an elipsis", function () {

            var expected = true;

            var mask = faker.finance.mask(null, false, null);

            var regexp = new RegExp(/(\.\.\.\d{4})/);
            var actual = regexp.test(mask);

            assert.equal(actual, expected, 'The expected match for parentheses is ' + expected + ' but it was ' + actual);

        });

        it("should work when random variables are passed into the arguments", function () {

            var length = faker.random.number(20);
            var elipsis = (length % 2 === 0) ? true : false;
            var parens = !elipsis;

            var mask = faker.finance.mask(length, elipsis, parens);
            assert.ok(mask);

        });


    });

    describe('amount(min, max, dec, symbol)', function () {

        it("should use the default amounts when not passing arguments", function () {
            var amount = faker.finance.amount();

            assert.ok(amount);
            assert.equal((amount > 0), true, "the amount should be greater than 0");
            assert.equal((amount < 1001), true, "the amount should be greater than 0");

        });

        it("should use the defaul decimal location when not passing arguments", function () {

            var amount = faker.finance.amount();

            var decimal = '.';
            var expected = amount.length - 3;
            var actual = amount.indexOf(decimal);

            assert.equal(actual, expected, 'The expected location of the decimal is ' + expected + ' but it was ' + actual + ' amount ' + amount);
        });

        //TODO: add support for more currency and decimal options
        it("should not include a currency symbol by default", function () {

            var amount = faker.finance.amount();

            var regexp = new RegExp(/[0-9.]/);

            var expected = true;
            var actual = regexp.test(amount);

            assert.equal(actual, expected, 'The expected match should not include a currency symbol');
        });


        it("it should handle negative amounts", function () {

            var amount = faker.finance.amount(-200, -1);

            assert.ok(amount);
            assert.equal((amount < 0), true, "the amount should be greater than 0");
            assert.equal((amount > -201), true, "the amount should be greater than 0");
        });


    });

    describe('transactionType()', function () {

        it("should return a random transaction type", function () {
            var transactionType = faker.finance.transactionType();

            assert.ok(transactionType);
        });
    });

    describe("currencyCode()", function () {
        it("returns a random currency code with a format", function () {
            var currencyCode = faker.finance.currencyCode();

            assert.ok(currencyCode.match(/[A-Z]{3}/));
        });
    });

    describe("creditCard(cardType)", function () {
        var calculateLuhn = function(luhn) {
            var luhnStrDigit, luhnStrLess;
  
            luhnStrDigit = parseInt(luhn.substring(luhn.length-1,luhn.length));
            luhnStrLess = luhn.substring(0,luhn.length-1);
          
            return luhnStrDigit;
        };
        
        it("should return a random card object", function () {
            var card = faker.finance.creditcard();
            
            assert.ok(card.issuer);
            assert.ok(card.number);
        });
        
        it ("should return a specific Visa card object", function () {
            var card = faker.finance.creditcard("Visa");
            
            assert.equal(card.issuer, "VISA");
        });
        
        it ("should return a valid Visa card number", function () {
            // do this multiple times because random data might be correct by chance
            for (var i = 0; i < 20; ++i) { 
              var card = faker.finance.creditcard("VISA");
              assert.equal(card.number.length >= 13 && card.number.length <= 16, true, "Length should be between 13 and 16");
              assert.equal(card.number.substr(0, 1), "4");
              assert.equal(calculateLuhn(card.number), card.number.substr(card.number.length - 1, card.number.length));
            }
        });
        
        it ("should return a specific Mastercard card object", function () {
            var card = faker.finance.creditcard("Mastercard");
            
            assert.equal(card.issuer, "MasterCard");
        });
        
        it ("should return a valid Mastercard card number", function () {
            // do this multiple times because random data might be correct by chance
            for (var i = 0; i < 20; ++i) { 
              var card = faker.finance.creditcard("Mastercard");
              
              assert.equal(card.number.length >= 16 && card.number.length <= 19, true, "Length should be between 16 and 19");
              assert.equal(card.number.substr(0, 1), "5", "First digit should be 5");
              assert.equal(card.number.substr(1, 1) >= 1 && card.number.substr(1, 1) <= 5, true, "Second digit should be between 1 and 5");
              assert.equal(calculateLuhn(card.number), card.number.substr(card.number.length - 1, card.number.length));
            }
        });
        
        it ("should return a specific American Express card object", function () {
            var card = faker.finance.creditcard("Amex");
            
            assert.equal(card.issuer, "Amex");
        });
        
        it ("should return a valid American Express card number", function () {
            // do this multiple times because random data might be correct by chance
            for (var i = 0; i < 20; ++i) { 
              var card = faker.finance.creditcard("Amex");
              
              assert.equal(card.number.length, 15, "Length should be 15");
              assert.equal(card.number.substr(0, 1), "3", "First digit should be 3");
              assert.equal(card.number.substr(1, 1) == "4" || card.number.substr(1, 1) == "7", true, "Second digit should be 4 or 7");
              assert.equal(calculateLuhn(card.number), card.number.substr(card.number.length - 1, card.number.length));
            }
        });
        
        it ("should return a specific Discover card object", function () {
            var card = faker.finance.creditcard("Discover");
            
            assert.equal(card.issuer, "Discover");
        });
        
        it ("should return a valid Discover card number", function () {
            // do this multiple times because random data might be correct by chance
            for (var i = 0; i < 20; ++i) { 
              var card = faker.finance.creditcard("Discover");
              
              assert.equal(card.number.length, 16, "Length should be 16");
              assert.equal(card.number.substr(0, 4), "6011", "First 4 digit combination should be 6011");
              assert.equal(calculateLuhn(card.number), card.number.substr(card.number.length - 1, card.number.length));
            }
        });
    });
});