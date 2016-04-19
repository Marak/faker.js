if (typeof module !== 'undefined') {
    var assert = require('assert');
    var faker = require('../index');
}

describe('tin.js', function () {
  describe('ein()', function () {
    context('when not formatted', function () {
      it('returns a valid ein', function () {
        var ein = faker.tin.ein();

        assert.ok(/^\d{9}$/.test(ein) === true);
      });
    });

    context('when formatted', function () {
      it('returns a valid ein correctly formatted', function () {
        var ein = faker.tin.ein(true);

        assert.ok(/^\d{2}[- ]{0,1}\d{7}$/.test(ein) === true);
      });
    });
  });

  describe('itin()', function () {
    context('when not formatted', function () {
      it('returns a valid itin', function () {
        var itin = faker.tin.itin();

        assert.ok(/^(9\d{2})((7[0-9]{1}|8[0-8]{1})|(9[0-2]{1})|(9[4-9]{1}))(\d{4})$/.test(itin) === true);
        ;
      });
    });

    context('when formatted', function () {
      it('returns a valid itin correctly formatted', function () {
        var itin = faker.tin.itin(true);

        assert.ok(/^(9\d{2})[- ]{0,1}((7[0-9]{1}|8[0-8]{1})|(9[0-2]{1})|(9[4-9]{1}))[- ]{0,1}(\d{4})$/.test(itin) === true);
      });
    });
  });

  describe('ssn()', function () {
    context('when not formatted', function () {
      it('returns a valid ssn', function () {
        var ssn = faker.tin.ssn();

        assert.ok(/^(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/.test(ssn) === true);
      });
    });

    context('when formatted', function () {
      it('returns a valid ssn correctly formatted', function () {
        var ssn = faker.tin.ssn(true);

        assert.ok(/^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/.test(ssn) === true);
      });
    });
  });
});
