if (typeof module !== 'undefined') {
    var assert = require('assert');
    var faker = require('../index');
}

describe('finance_issue.js', function () {
    describe("issue_945 IBAN Pakistan", function () {

      // Example IBAN Pakistan
      // PK36SCBL0000001123456702
      // IBAN en format imprimé
      // PK36 SCBL 0000 0011 2345 6702
      // Code pays
      // PK

        var ibanLib = require('../lib/iban');

        it("IBAN for Pakistan is correct", function () {
            var iban = faker.finance.iban();
            var maxTry = 100000;
            while (maxTry && iban.substring(0,2) != 'PK' ) {
              faker.seed();
              var iban = faker.finance.iban();
              //console.log(iban);
              maxTry--;
            }

            if (maxTry==0) {
              console.log('aucun PK dans les 10000 seed, vraiment pas de bol');
            }

            var bban = iban.substring(4) + iban.substring(0, 4);

            assert.ok(false === IsNumeric(iban.substring(4,5)), iban.substring(4,8)+' contains only characters in PK Iban');
            assert.ok(false === IsNumeric(iban.substring(5,6)), iban.substring(4,8)+' contains only characters in PK Iban');
            assert.ok(false === IsNumeric(iban.substring(6,7)), iban.substring(4,8)+' contains only characters in PK Iban');
            assert.ok(false === IsNumeric(iban.substring(7,8)), iban.substring(4,8)+' contains only characters in PK Iban');

            assert.ok(IsNumeric(iban.substring(2,4)));
            assert.ok(IsNumeric(iban.substring(8,24)));

            assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
        });
    });

});

function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
