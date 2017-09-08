if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var _ = require('lodash');
    var faker = require('../index');
}


describe("ethereum.js", function () {
  describe('address', function() {
    var address = faker.ethereum.address();

    it('should generate a 42 character string that starts with "0x"', function() {
      assert.equal(address.length, 42);
      assert.equal(address.slice(0, 2), '0x')
    })
  })
});
