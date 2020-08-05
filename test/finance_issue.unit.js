if (typeof module !== 'undefined') {
    var assert = require('assert');
    var chai = require('./support/chai.js').assert;
    var sinon = require('sinon');
    var faker = require('../index');
}

faker.setLocale('pk');
faker.seed(28);
describe('finance_issue.js', function () {
    describe("issue_945 IBAN Pakistan", function () {

      // Example IBAN Pakistan
      // PK36SCBL0000001123456702
      // IBAN en format imprimé
      // PK36 SCBL 0000 0011 2345 6702
      // Code pays
      // PK

        var ibanLib = require('../lib/iban');

        it("IBAN for Pakistan not correct", function () {
            var iban = faker.finance.iban();
            var bban = iban.substring(4) + iban.substring(0, 4);
            assert.equal(iban.substring(0,2),'PK');

            // chai.assert.isNumber(iban.substring(4,8));
            // chai.assert.isNumber(iban.substring(8,12));
            // chai.assert.isNumber(iban.substring(12,16));
            // chai.assert.isNumber(iban.substring(16,20));
            // chai.assert.isNumber(iban.substring(20,24));

            assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
        });
    });

});
