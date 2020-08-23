if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("unique.js", function () {
    describe("unique()", function () {

        it("is able to call a function with no arguments and return a result", function () {
          var result = faker.unique(faker.internet.email);
          assert.equal(typeof result, 'string');
        });

        it("is able to call a function with arguments and return a result", function () {
            var result = faker.unique(faker.internet.email, ['a', 'b', 'c']); // third argument is provider, or domain for email
            assert.ok(result.match(/\@c/));
        });

        it("is able to call same function with arguments and return a result", function () {
            var result = faker.unique(faker.internet.email, ['a', 'b', 'c']); // third argument is provider, or domain for email
            assert.ok(result.match(/\@c/));
        });

        it("is able to exclude results as array", function () {
            var result = faker.unique(faker.internet.protocol, [], { exclude: ['https'] });
            assert.equal(result, 'http');
        });

        it("is able to limit unique call by maxTime in ms", function () {
            var result;
            try {
              result = faker.unique(faker.internet.protocol, [], { maxTime: 1, maxRetries: 9999, exclude: ['https', 'http'] });
            } catch (err) {
              assert.equal(err.message.substr(0, 16), 'Exceeded maxTime');
            }
        });

        it("is able to limit unique call by maxRetries", function () {
            var result;
            try {
              result = faker.unique(faker.internet.protocol, [], { maxTime: 5000, maxRetries: 5, exclude: ['https', 'http'] });
            } catch (err) {
              assert.equal(err.message.substr(0, 19), 'Exceeded maxRetries');
            }
        });

        it("is able to call last function with arguments and return a result", function () {
            var result = faker.unique(faker.internet.email, ['a', 'b', 'c']); // third argument is provider, or domain for email
            assert.ok(result.match(/\@c/));
        });

    });
});
