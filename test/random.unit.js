if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("random.js", function () {
  describe("number", function() {
    it("returns a random number given a maximum value", function() {
      var max = 10;
      assert.ok(Faker.random.number(max) < max);
    });
    it("returns a random number between a range", function() {
      var min = 1;
      var max = 10;
      var randomNumber = Faker.random.number(min, max);
      assert.ok( randomNumber >= min);
      assert.ok( randomNumber <= max);
    });
  });
});
