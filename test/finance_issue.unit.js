if (typeof module !== 'undefined') {
    var assert = require('assert');
    var faker = require('../index');
}

function getAnIbanByCountry(countryCode) {
    var iban = faker.finance.iban();
    var maxTry = 100000;
    while (maxTry && iban.substring(0, 2) != countryCode) {
        faker.seed();
        iban = faker.finance.iban();
        maxTry--;
    }

    if (maxTry === 0) {
        console.log('aucun TR dans les 10000 seed, vraiment pas de bol');
    }

    return iban;
}

describe('finance_issue.js', function () {

    describe("issue_944 IBAN Georgia", function () {
      // Georgia
      // https://transferwise.com/fr/iban/georgia
      // Length 22
      // BBAN 2c,16n
      // GEkk bbcc cccc cccc cccc cc
      // b = National bank code
      // c = Account number

      // example IBAN GE29 NB00 0000 0101 9049 17

        var ibanLib = require('../lib/iban');

        it("IBAN for Georgia is correct", function () {

            var iban = getAnIbanByCountry('GE');
            var ibanFormated = iban.match(/.{1,4}/g).join(" ");
            var bban = iban.substring(4) + iban.substring(0, 4);

            assert.ok(false === Number.isFinite(iban.substring(4, 5)), iban.substring(4, 6) + ' must contains only characters in GE IBAN ' + ibanFormated);
            assert.ok(false === Number.isFinite(iban.substring(5, 6)), iban.substring(4, 6) + ' must contains only characters in GE IBAN ' + ibanFormated);

            assert.ok(Number.isFinite(iban.substring(2, 4)));
            assert.ok(Number.isFinite(iban.substring(6, 24)));

            assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
        });
    });

    describe("issue_945 IBAN Pakistan", function () {

    // Example IBAN Pakistan
    // PK36SCBL0000001123456702
    // IBAN en format imprimé
    // PK36 SCBL 0000 0011 2345 6702
    // Code pays
    // PK

        var ibanLib = require('../lib/iban');

        it("IBAN for Pakistan is correct", function () {

            var iban = getAnIbanByCountry('PK');
            var ibanFormated = iban.match(/.{1,4}/g).join(" ");
            var bban = iban.substring(4) + iban.substring(0, 4);

            assert.ok(false === Number.isFinite(iban.substring(4, 5)), iban.substring(4, 8) + ' must contains only characters in PK IBAN ' + ibanFormated);
            assert.ok(false === Number.isFinite(iban.substring(5, 6)), iban.substring(4, 8) + ' must contains only characters in PK IBAN ' + ibanFormated);
            assert.ok(false === Number.isFinite(iban.substring(6, 7)), iban.substring(4, 8) + ' must contains only characters in PK IBAN ' + ibanFormated);
            assert.ok(false === Number.isFinite(iban.substring(7, 8)), iban.substring(4, 8) + ' must contains only characters in PK IBAN ' + ibanFormated);

            assert.ok(Number.isFinite(iban.substring(2, 4)));
            assert.ok(Number.isFinite(iban.substring(8, 24)));

            assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
        });
    });

    describe("issue_946 IBAN Turkish", function () {


  // https://transferwise.com/fr/iban/turkey
  // Un IBAN en Turquie est constitué de 26 caractères :
  //
  //   Code pays à 2 lettres
  //   Clé de contrôle à 2 chiffres
  //   5 caractères du SWIFT/BIC de la banque
  //   Code à 1 chiffres pour le code national
  //   Code à 16 chiffres pour le numéro de compte bancaire
  //   Vous avez déjà un code IBAN ?
  //
  //   Exemple d'IBAN en Turquie	TR330006100519786457841326
  //   IBAN en format imprimé	TR33 0006 1005 1978 6457 8413 26
  //   Code pays	TR
  //   Clé de contrôle	33
  //   Code banque	00061
  //   Chiffre d'indicatif national	0
  //   Numéro de compte bancaire	0519786457841326

        var ibanLib = require('../lib/iban');

        it("IBAN for Turkish is correct", function () {

            var iban = getAnIbanByCountry('TR');
            var ibanFormated = iban.match(/.{1,4}/g).join(" ");
            var bban = iban.substring(4) + iban.substring(0, 4);

            assert.ok(Number.isFinite(iban.substring(2, 26)), 'No character after TR ' + ibanFormated);

            assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
        });
    });

});
