if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("user.js", function () {
    describe("role()", function () {
        it("returns a role", function () {
            sinon.stub(faker.user, 'role').returns('Guest');
            var role = faker.user.role();

            assert.strictEqual(role, 'Guest');
            faker.user.role.restore();
        });
    });
});
