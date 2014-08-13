if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("random.js", function () {
  describe("number", function() {
    it("returns a random number given a maximum value", function() {
      var max = 10;
      assert.ok(faker.random.number(max) < max);
    });
    it("returns a random number between a range", function() {
      var min = 1;
      var max = 10;
      var randomNumber = faker.random.number(1, 10);
      assert.ok( randomNumber >= min);
      assert.ok( randomNumber <= max);
    });
  });
});
