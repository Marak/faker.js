if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var _ = require('lodash');
  var faker = require('../index');
  var mersenne = new (require('../lib/mersenne'));
}


describe("random.js", function () {
  describe("number", function() {
    it("random.number() uses datatype module and prints deprecation warning", function() {
      sinon.spy(console, 'log');
      sinon.spy(faker.datatype, 'number');
      faker.random.number();
      assert.ok(faker.datatype.number.called);
      assert.ok(console.log.calledWith('Deprecation Warning: faker.random.number is now located in faker.datatype.number'));
      faker.datatype.number.restore();
      console.log.restore();
    });

    it('should return deterministic results when seeded with integer', function() {
      faker.seed(100);
      var name = faker.name.findName();
      assert.strictEqual(name, 'Eva Jenkins');
    });

    it('should return deterministic results when seeded with 0', function() {
      faker.seed(0);
      var name = faker.name.findName();
      assert.strictEqual(name, 'Lola Sporer');
    });

    it('should return deterministic results when seeded with array - one element', function() {
      faker.seed([10]);
      var name = faker.name.findName();
      assert.strictEqual(name, 'Duane Kub');
    });

    it('should return deterministic results when seeded with array - multiple elements', function() {
      faker.seed([10, 100, 1000]);
      var name = faker.name.findName();
      assert.strictEqual(name, 'Alma Shanahan');
    });
  });

  describe("float", function() {
    it("random.float() uses datatype module and prints deprecation warning", function() {
      sinon.spy(console, 'log');
      sinon.spy(faker.datatype, 'float');
      faker.random.float();
      assert.ok(faker.datatype.float.called);
      assert.ok(console.log.calledWith('Deprecation Warning: faker.random.float is now located in faker.datatype.float'));
      faker.datatype.float.restore();
      console.log.restore();
    });
  });

  describe('arrayElement', function() {
    it('returns a random element in the array', function() {
      var testArray = ['hello', 'to', 'you', 'my', 'friend'];
      assert.ok(testArray.indexOf(faker.random.arrayElement(testArray)) > -1);
    });

    it('returns a random element in the array when there is only 1', function() {
      var testArray = ['hello'];
      assert.ok(testArray.indexOf(faker.random.arrayElement(testArray)) > -1);
    });
  });

  describe('arrayElements', function() {
    it('returns a subset with random elements in the array', function() {
      var testArray = ['hello', 'to', 'you', 'my', 'friend'];
      var subset = faker.random.arrayElements(testArray);

      // Check length
      assert.ok(subset.length >= 1 && subset.length <= testArray.length);

      // Check elements
      subset.forEach(function(element) {
        assert.ok(testArray.indexOf(element) > -1);
      });

      // Check uniqueness
      subset.forEach(function(element) {
        assert.ok(!this.hasOwnProperty(element));
        this[element] = true;
      }, {});
    });

    it('returns a subset of fixed length with random elements in the array', function() {
      var testArray = ['hello', 'to', 'you', 'my', 'friend'];
      var subset = faker.random.arrayElements(testArray, 3);

      // Check length
      assert.ok(subset.length === 3);

      // Check elements
      subset.forEach(function(element) {
        assert.ok(testArray.indexOf(element) > -1);
      });

      // Check uniqueness
      subset.forEach(function(element) {
        assert.ok(!this.hasOwnProperty(element));
        this[element] = true;
      }, {});
    });
  });

  describe('UUID', function() {
    it("random.uuid() uses datatype module and prints deprecation warning", function() {
      sinon.spy(console, 'log');
      sinon.spy(faker.datatype, 'uuid');
      faker.random.uuid();
      assert.ok(faker.datatype.uuid.called);
      assert.ok(console.log.calledWith('Deprecation Warning: faker.random.uuid is now located in faker.datatype.uuid'));
      faker.datatype.uuid.restore();
      console.log.restore();
    });
  });

  describe('boolean', function() {
    it("random.boolean() uses datatype module and prints deprecation warning", function() {
      sinon.spy(console, 'log');
      sinon.spy(faker.datatype, 'boolean');
      faker.random.boolean();
      assert.ok(faker.datatype.boolean.called);
      assert.ok(console.log.calledWith('Deprecation Warning: faker.random.boolean is now located in faker.datatype.boolean'));
      faker.datatype.boolean.restore();
      console.log.restore();
    });
  });

  describe('semver', function() {
    var semver = faker.system.semver();

    it('should generate a string', function() {
      assert.ok(typeof semver === 'string');
    });

    it('should generate a valid semver', function() {
      assert.ok(/^\d+\.\d+\.\d+$/.test(semver));
    });
  });

  describe('alpha', function() {
    var alpha = faker.random.alpha;

    it('should return single letter when no count provided', function() {
      assert.ok(alpha().length === 1);
    });

    it('should return lowercase letter when no upcase option provided', function() {
      assert.ok(alpha().match(/[a-z]/));
    });

    it('should return uppercase when upcase option is true', function() {
      assert.ok(alpha({ upcase: true }).match(/[A-Z]/));
    });

    it('should generate many random letters', function() {
      assert.ok(alpha(5).length === 5);
    });

    it('should be able to ban some characters', function() {
      var alphaText = alpha(5,{bannedChars:['a', 'p']});
      assert.ok(alphaText.length === 5);
      assert.ok(alphaText.match(/[b-oq-z]/));
    });
    it('should be able handle mistake in banned characters array', function() {
      var alphaText = alpha(5,{bannedChars:['a', 'a', 'p']});
      assert.ok(alphaText.length === 5);
      assert.ok(alphaText.match(/[b-oq-z]/));
    });
  });

  describe('alphaNumeric', function() {
    var alphaNumeric = faker.random.alphaNumeric;

    it('should generate single character when no additional argument was provided', function() {
      assert.ok(alphaNumeric().length === 1);
    });

    it('should generate many random characters', function() {
      assert.ok(alphaNumeric(5).length === 5);
    });

    it('should be able to ban some characters', function() {
      var alphaText = alphaNumeric(5,{bannedChars:['a','p']});
      assert.ok(alphaText.length === 5);
      assert.ok(alphaText.match(/[b-oq-z]/));
    });
    it('should be able handle mistake in banned characters array', function() {
      var alphaText = alphaNumeric(5,{bannedChars:['a','p','a']});
      assert.ok(alphaText.length === 5);
      assert.ok(alphaText.match(/[b-oq-z]/));
    });
  });

  describe('hexaDecimal', function() {
    it("random.hexaDecimal() uses datatype module and prints deprecation warning", function() {
      sinon.spy(console, 'log');
      sinon.spy(faker.datatype, 'hexaDecimal');
      faker.random.hexaDecimal();
      assert.ok(faker.datatype.hexaDecimal.called);
      assert.ok(console.log.calledWith('Deprecation Warning: faker.random.hexaDecimal is now located in faker.datatype.hexaDecimal'));
      faker.datatype.hexaDecimal.restore();
      console.log.restore();
    });
  });

  describe("mersenne twister", function() {
    it("returns a random number without given min / max arguments", function() {
      var max = 10;
      var randomNumber = mersenne.rand();
      assert.ok(typeof randomNumber === 'number');
    });

    it("throws an error when attempting to seed() a non-integer", function() {
      assert.throws(function () {
        mersenne.seed('abc');
      }, Error);
    });

    it("throws an error when attempting to seed() a non-integer", function() {
      assert.throws(function () {
        mersenne.seed_array('abc');
      }, Error);
    });
  });

});
