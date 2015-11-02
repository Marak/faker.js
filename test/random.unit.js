if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var _ = require('lodash');
    var faker = require('../index');
}


describe("random.js", function () {
  describe("number", function() {

    it("returns a random number given a maximum value as Number", function() {
      var max = 10;
      assert.ok(faker.random.number(max) <= max);
    });

    it("returns a random number given a maximum value as Object", function() {
      var options = { max: 10 };
      assert.ok(faker.random.number(options) <= options.max);
    });

    it("returns a random number given a maximum value of 0", function() {
      var options = { max: 0 };
      assert.ok(faker.random.number(options) === 0);
    });

    it("returns a random number given a negative number minimum and maximum value of 0", function() {
      var options = { min: -100, max: 0 };
      assert.ok(faker.random.number(options) <= options.max);
    });

    it("returns a random number between a range", function() {
      var options = { min: 22, max: 33 };
      for(var i = 0; i < 100; i++) {
        var randomNumber = faker.random.number(options);
        assert.ok(randomNumber >= options.min);
        assert.ok(randomNumber <= options.max);
      }
    });
    
    it("returns a random number between a range using the shortcut", function(){
      var options = { min: 22, max: 33 };
      for(var i = 0; i < 100; i++) {
        var randomNumber = faker.random.number(options.min, options.max);
        assert.ok(randomNumber >= options.min);
        assert.ok(randomNumber <= options.max);
      }
    })

    it("provides numbers with a given precision", function() {
      var options = { min: 0, max: 1.5, precision: 0.5 };
      var results = _.chain(_.range(50))
        .map(function() {
          return faker.random.number(options);
        })
        .uniq()
        .value()
        .sort();

      assert.ok(_.contains(results, 0.5));
      assert.ok(_.contains(results, 1.0));

      assert.equal(results[0], 0);
      assert.equal(_.last(results), 1.5);

    });

    it("should not modify the input object", function() {
      var min = 1;
      var max = 2;
      var opts = {
        min: min,
        max: max
      };

      faker.random.number(opts);

      assert.equal(opts.min, min);
      assert.equal(opts.max, max);
    });

    it('should return deterministic results when seeded', function() {
      faker.seed(100);
      var name = faker.name.findName();
      assert.equal(name, 'Dulce Jenkins');
    })
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

  describe('UUID', function() {
    it('should generate a valid UUID', function() {
      var UUID = faker.random.uuid();
      var RFC4122 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
      assert.ok(RFC4122.test(UUID));
    })
  })

  describe('boolean', function() {
    it('should generate a boolean value', function() {
      var bool = faker.random.boolean();
      assert.ok(typeof bool == 'boolean');
    });
  });
});
