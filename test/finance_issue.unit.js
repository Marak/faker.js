if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

//faker.setLocale('pk');
faker.seed(28); // I need to found how to randomly have always a pk iban
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
            assert.ok(false === IsNumeric(iban.substring(0,2)));
            //assert.ok(false === IsNumeric(iban.substring(4,8)));


            assert.ok(IsNumeric(iban.substring(2,4)));
            assert.ok(IsNumeric(iban.substring(8,12)));
            assert.ok(IsNumeric(iban.substring(12,16)));
            assert.ok(IsNumeric(iban.substring(16,20)));
            assert.ok(IsNumeric(iban.substring(20,24)));
            assert.ok(IsNumeric(iban.substring(8,24)));

            assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
        });
    });

});

function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
