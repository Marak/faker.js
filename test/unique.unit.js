if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("unique.js", function () {
    describe("exec", function () {
        it("is able to call a function with no arguments and return a result", function () {
          var result = faker.unique.exec(faker.internet.email);
          assert.strictEqual(typeof result, "string");
        });

        it("is able to call a function with arguments and return a result", function () {
            var result = faker.unique.exec(faker.internet.email, ['a', 'b', 'c']); // third argument is provider, or domain for email
            assert.ok(result.match(/\@c/));
        });

        it("is able to call same function with arguments and return a result", function () {
            var result = faker.unique.exec(faker.internet.email, ['a', 'b', 'c']); // third argument is provider, or domain for email
            assert.ok(result.match(/\@c/));
        });

        it("is able to exclude results as array", function () {
            var result = faker.unique.exec(faker.internet.protocol, [], {
                exclude: ['https']
            });
            assert.strictEqual(result, 'http');
        });

        it("is able to limit unique call by maxTime in ms", function () {
            var result;
            try {
                result = faker.unique.exec(faker.internet.protocol, [], { maxTime: 1, maxRetries: 9999, exclude: ['https', 'http'] });
            } catch (err) {
              assert.strictEqual(err.message.substr(0, 16), 'Exceeded maxTime');
            }
        });

        it("is able to limit unique call by maxRetries", function () {
            var result;
            try {
                result = faker.unique.exec(faker.internet.protocol, [], { maxTime: 5000, maxRetries: 5, exclude: ['https', 'http'] });
            } catch (err) {
              assert.strictEqual(err.message.substr(0, 19), 'Exceeded maxRetries');
            }
        });

        it("is able to call last function with arguments and return a result", function () {
            var result = faker.unique.exec(faker.internet.email, ['a', 'b', 'c']); // third argument is provider, or domain for email
            assert.ok(result.match(/\@c/));
        });
    });

    describe("clear", function () {
        it("is able to clear the found items at global scope", function () {
            faker.unique.clear();
            faker.unique.exec(faker.internet.protocol, [], {
                exclude: ['https']
            });
            faker.unique.clear();
            var result = faker.unique.exec(faker.internet.protocol, [], {
                exclude: ['https']
            });
            assert.strictEqual(result, 'http');
        });

        it("is able to clear the found items at functional scope", function () {
          faker.unique.exec(faker.internet.protocol, [], {
              exclude: ['https'],
              scope: 'fakerInternetProtocol'
          });
          faker.unique.clear('fakerInternetProtocol');
          var result = faker.unique.exec(faker.internet.protocol, [], {
              exclude: ['https'],
              scope: 'fakerInternetProtocol'
          });
          assert.strictEqual(result, 'http');
        });
    });
});
