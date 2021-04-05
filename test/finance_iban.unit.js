if (typeof module !== 'undefined') {
  var assert = require('assert');
  var faker = require('../index');
}

function getAnIbanByCountry(countryCode) {
  var iban = faker.finance.iban();
  var maxTry = 100000;
  var countTry = maxTry;
  while (countTry && iban.substring(0, 2) != countryCode) {
    faker.seed(100000- countTry);
    iban = faker.finance.iban();
    countTry--;
  }

  if (countTry === 0) {
    console.log('Not found with 10000 seed, vraiment pas de bol');
  } else if (countTry < maxTry) {
    console.log('you can optimize this helper by add faker.seed(' + (100000 - 1 - countTry) + ') before the call of getAnIbanByCountry()');
  }
  // console.log(iban);

  return iban;
}

describe('finance_iban.js', function () {

  describe("issue_944 IBAN Georgia", function () {
    // Georgia
    // https://transferwise.com/fr/iban/georgia
    // Length 22
    // BBAN 2c,16n
    // GEkk bbcc cccc cccc cccc cc
    // b = National bank code (alpha)
    // c = Account number

    // example IBAN GE29 NB00 0000 0101 9049 17

    var ibanLib = require('../lib/iban');

    it("IBAN for Georgia is correct", function () {

      faker.seed(17);
      var iban = getAnIbanByCountry('GE');
      var ibanFormated = iban.match(/.{1,4}/g).join(" ");
      var bban = iban.substring(4) + iban.substring(0, 4);

      assert.equal(22, iban.length,  'GE IBAN would be 22 chars length, given is ' + iban.length);

      assert.ok(iban.substring(0, 2).match(/^[A-Z]{2}$/), iban.substring(0, 2) + ' must contains only characters in GE IBAN ' + ibanFormated);
      assert.ok(iban.substring(2, 4).match(/^\d{2}$/), iban.substring(2, 4) + ' must contains only digit in GE IBAN ' + ibanFormated);
      assert.ok(iban.substring(4, 6).match(/^[A-Z]{2}$/), iban.substring(4, 6) + ' must contains only characters in GE IBAN ' + ibanFormated);
      assert.ok(iban.substring(6, 24).match(/^\d{16}$/), iban.substring(6, 24) + ' must contains only characters in GE IBAN ' + ibanFormated);

      assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
    });
  });

  describe("issue_945 IBAN Pakistan", function () {

    // https://transferwise.com/fr/iban/pakistan
    // Example IBAN Pakistan
    // PK36SCBL0000001123456702
    // IBAN en format imprimé
    // PK36 SCBL 0000 0011 2345 6702
    // Code pays 2 alpha
    // PK
    // Key 2 digits
    // Bank Code 4 alpha
    // Account Code 16 digits
    // Total Length 24 chars

    var ibanLib = require('../lib/iban');

    it("IBAN for Pakistan is correct", function () {

      faker.seed(28);
      var iban = getAnIbanByCountry('PK');
      var ibanFormated = iban.match(/.{1,4}/g).join(" ");
      var bban = iban.substring(4) + iban.substring(0, 4);

      assert.equal(24, iban.length, 'PK IBAN would be 24 chars length, given is ' + iban.length);

      assert.ok(iban.substring(0, 2).match(/^[A-Z]{2}$/), iban.substring(0, 2) + ' must contains only characters in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(2, 4).match(/^\d{2}$/), iban.substring(2, 4) + ' must contains only digit in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(4, 8).match(/^[A-Z]{4}$/), iban.substring(4, 8) + ' must contains only characters in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(8, 24).match(/^\d{16}$/), iban.substring(8, 24) + ' must contains only digits in PK IBAN ' + ibanFormated);

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

      faker.seed(37);

      var iban = getAnIbanByCountry('TR');
      var ibanFormated = iban.match(/.{1,4}/g).join(" ");
      var bban = iban.substring(4) + iban.substring(0, 4);

      assert.equal(26, iban.length,  'PK IBAN would be 26 chars length, given is ' + iban.length);

      assert.ok(iban.substring(0, 2).match(/^[A-Z]{2}$/), 'Country Code:' + iban.substring(0, 2) + ' must contains only characters in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(2, 4).match(/^\d{2}$/), 'Control key:' + iban.substring(2, 4) + ' must contains only digit in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(4, 9).match(/^\d{5}$/), 'Swift Bank Code:' + iban.substring(4, 9) + ' must contains only digits in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(9, 10).match(/^\d{1}$/), 'National Digit:' + iban.substring(9, 10) + ' must contains only digits in PK IBAN ' + ibanFormated);
      assert.ok(iban.substring(10, 26).match(/^\d{16}$/), 'Account Code:' + iban.substring(10, 26) + ' must contains only digits in PK IBAN ' + ibanFormated);

      assert.ok(iban.substring(2, 26).match(/^\d{24}$/), 'No character after TR ' + ibanFormated);

      assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
    });
  });

  describe("issue_846 IBAN Azerbaijan", function () {
    // Azerbaijan
    // https://transferwise.com/fr/iban/azerbaijan
    // Length 28
    // BBAN 4c,20n
    // GEkk bbbb cccc cccc cccc cccc cccc
    // b = National bank code (alpha)
    // c = Account number

    // example IBAN AZ21 NABZ 0000 0000 1370 1000 1944

    var ibanLib = require('../lib/iban');

    it("IBAN for Azerbaijan is correct", function () {

      faker.seed(21);
      var iban = getAnIbanByCountry('AZ');
      var ibanFormated = iban.match(/.{1,4}/g).join(" ");
      var bban = iban.substring(4) + iban.substring(0, 4);

      assert.equal(28, iban.length,  'AZ IBAN would be 28 chars length, given is ' + iban.length);

      assert.ok(iban.substring(0, 2).match(/^[A-Z]{2}$/), iban.substring(0, 2) + ' must contains only characters in AZ IBAN ' + ibanFormated);
      assert.ok(iban.substring(2, 4).match(/^\d{2}$/), iban.substring(2, 4) + ' must contains only digit in AZ IBAN ' + ibanFormated);
      assert.ok(iban.substring(4, 8).match(/^[A-Z]{4}$/), iban.substring(4, 8) + ' must contains only characters in AZ IBAN ' + ibanFormated);
      assert.ok(iban.substring(8, 28).match(/^\d{20}$/), iban.substring(8, 28) + ' must contains 20 characters in AZ IBAN ' + ibanFormated);

      assert.equal(ibanLib.mod97(ibanLib.toDigitString(bban)), 1, "the result should be equal to 1");
    });
  });
});
