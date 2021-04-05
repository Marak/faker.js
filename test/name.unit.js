if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');

}

function assertInArray(value, array) {
  var idx = array.indexOf(value);
  assert.notEqual(idx, -1);
}

describe("name.js", function () {
  describe("firstName()", function () {
    it("returns a random name", function () {
      sinon.stub(faker.name, 'firstName').returns('foo');
      var first_name = faker.name.firstName();

      assert.strictEqual(first_name, 'foo');

      faker.name.firstName.restore();
    });
        
    it("returns a gender-specific name when passed a number", function () {
      for (var q = 0; q < 30; q++) {
        var gender = Math.floor(Math.random() * 2);
        var name = faker.name.firstName(gender);
        if (gender === 0) {assertInArray(name, faker.definitions.name.male_first_name);}
        else {assertInArray(name, faker.definitions.name.female_first_name);}
      }
    });
        
    it("returns a gender-specific name when passed a string", function () {
      for (var q = 0; q < 30; q++) {
        var gender = Math.floor(Math.random() * 2);
        var genderString = (gender === 0 ? 'male' : 'female');
        var name = faker.name.firstName(genderString);
        assertInArray(name, faker.definitions.name[genderString + '_first_name']);
      }
    });
  });

  describe("lastName()", function () {
    it("returns a random name", function () {
      sinon.stub(faker.name, 'lastName').returns('foo');

      var last_name = faker.name.lastName();

      assert.strictEqual(last_name, 'foo');

      faker.name.lastName.restore();
    });
  });

  describe("middleName()", function () {

    it("returns a random middle name", function () {
      sinon.stub(faker.name, 'middleName').returns('foo');

      var middle_name = faker.name.middleName();

      assert.strictEqual(middle_name, 'foo');

      faker.name.middleName.restore();
    });

    describe('when using a locale with gender specific middle names', function () {
      beforeEach(function(){
        this.oldLocale = faker.locale;
        faker.locale = 'TEST';

        faker.locales['TEST'] = {
          name: {
            male_middle_name: ['Genaddiesvich'],
            female_middle_name: ['Genaddievna']
          }
        };
      });

      afterEach(function () {
        faker.locale = this.oldLocale;
        delete faker.locale['TEST'];
      })

      it("returns male prefix", function () {
        var middle_name = faker.name.middleName(0);

        assert.strictEqual(middle_name, 'Genaddiesvich')
      });

      it("returns female prefix", function () {
        var middle_name = faker.name.middleName(1);

        assert.strictEqual(middle_name, 'Genaddievna');
      });
    });
  });


  describe("findName()", function () {
    it("usually returns a first name and last name", function () {
      sinon.stub(faker.datatype, 'number').returns(5);
      var name = faker.name.findName();
      assert.ok(name);
      var parts = name.split(' ');

      assert.strictEqual(parts.length, 2);

      faker.datatype.number.restore();
    });

    it("occasionally returns a first name and last name with a prefix", function () {
      sinon.stub(faker.datatype, 'number').returns(0);
      var name = faker.name.findName();
      var parts = name.split(' ');

      assert.ok(parts.length >= 3);

      faker.datatype.number.restore();
    });

    it("occasionally returns a male full name with a prefix", function () {
      sinon.stub(faker.datatype, 'number')
        .withArgs(8).returns(0) // with prefix
        .withArgs(1).returns(0); // gender male

      sinon.stub(faker.name, 'prefix').withArgs(0).returns('X');
      sinon.stub(faker.name, 'firstName').withArgs(0).returns('Y');
      sinon.stub(faker.name, 'lastName').withArgs(0).returns('Z');

      var name = faker.name.findName();

      assert.strictEqual(name, 'X Y Z');

      faker.datatype.number.restore();
      faker.name.prefix.restore();
      faker.name.firstName.restore();
      faker.name.lastName.restore();
    });

    it("occasionally returns a female full name with a prefix", function () {
      sinon.stub(faker.datatype, 'number')
        .withArgs(8).returns(0) // with prefix
        .withArgs(1).returns(1); // gender female

      sinon.stub(faker.name, 'prefix').withArgs(1).returns('J');
      sinon.stub(faker.name, 'firstName').withArgs(1).returns('K');
      sinon.stub(faker.name, 'lastName').withArgs(1).returns('L');

      var name = faker.name.findName();

      assert.strictEqual(name, 'J K L');

      faker.datatype.number.restore();
      faker.name.prefix.restore();
      faker.name.firstName.restore();
      faker.name.lastName.restore();
    });

    it("occasionally returns a first name and last name with a suffix", function () {
      sinon.stub(faker.datatype, 'number').returns(1);
      sinon.stub(faker.name, 'suffix').returns('Jr.');
      var name = faker.name.findName();
      var parts = name.split(' ');

      assert.ok(parts.length >= 3);
      assert.strictEqual(parts[parts.length-1], 'Jr.');

      faker.name.suffix.restore();
      faker.datatype.number.restore();
    });

    it("needs to work with specific locales and respect the fallbacks", function () {
      faker.locale = 'en_US';
      // this will throw if this is broken
      var name = faker.name.findName();
    });
  });

  describe("title()", function () {
    it("returns a random title", function () {
      sinon.stub(faker.name, 'title').returns('Lead Solutions Supervisor');

      var title = faker.name.title();

      assert.strictEqual(title, 'Lead Solutions Supervisor');

      faker.name.title.restore();
    });
  });

  describe("jobTitle()", function () {
    it("returns a job title consisting of a descriptor, area, and type", function () {
      sinon.spy(faker.random, 'arrayElement');
      sinon.spy(faker.name, 'jobDescriptor');
      sinon.spy(faker.name, 'jobArea');
      sinon.spy(faker.name, 'jobType');
      var jobTitle = faker.name.jobTitle();

      assert.ok(typeof jobTitle === 'string');
      assert.ok(faker.random.arrayElement.calledThrice);
      assert.ok(faker.name.jobDescriptor.calledOnce);
      assert.ok(faker.name.jobArea.calledOnce);
      assert.ok(faker.name.jobType.calledOnce);

      faker.random.arrayElement.restore();
      faker.name.jobDescriptor.restore();
      faker.name.jobArea.restore();
      faker.name.jobType.restore();
    });
  });

  describe("prefix()", function () {
    describe('when using a locale with gender specific name prefixes', function () {
      beforeEach(function(){
        this.oldLocale = faker.locale;
        faker.locale = 'TEST';

        faker.locales['TEST'] = {
          name: {
            male_prefix: ['Mp'],
            female_prefix: ['Fp']
          }
        };
      });

      afterEach(function () {
        faker.locale = this.oldLocale;
        delete faker.locale['TEST'];
      })

      it("returns male prefix", function () {
        var prefix = faker.name.prefix(0);
        assert.strictEqual(prefix, 'Mp')
      });

      it("returns female prefix", function () {
        var prefix = faker.name.prefix(1);

        assert.strictEqual(prefix, 'Fp');
      });

      it("returns either prefix", function () {
        var prefix = faker.name.prefix();
        assert(['Mp', 'Fp'].indexOf(prefix) >= 0)
      });

    });

    describe('when using a locale without gender specific name prefixes', function () {
      beforeEach(function(){
        this.oldLocale = faker.locale;
        faker.locale = 'TEST';

        faker.locales['TEST'] = {
          name: {
            prefix: ['P']
          }
        };
      });

      afterEach(function () {
        faker.locale = this.oldLocale;
        delete faker.locale['TEST'];
      })

      it("returns a prefix", function () {
        var prefix = faker.name.prefix();

        assert.strictEqual(prefix, 'P');
      });
    });
  });
});
