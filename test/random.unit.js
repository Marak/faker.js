if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
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
      assert.ok(faker.random.number(options) < options.max);
    });

    it("returns a random number between a range", function() {
      var options = { min: 22, max: 33 };
      for(var i = 0; i < 100; i++) {
        var randomNumber = faker.random.number(options);
        assert.ok(randomNumber >= options.min);
        assert.ok(randomNumber <= options.max);
      }
    });
  });

});
