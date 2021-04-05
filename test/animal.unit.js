if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("animal.js", function() {

  describe("dog()", function() {
    it("returns random value from dog array", function() {
      var dog = faker.animal.dog();
      assert.ok(faker.definitions.animal.dog.indexOf(dog) !== -1);
    });
  });
}); 