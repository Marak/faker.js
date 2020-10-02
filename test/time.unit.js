if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

faker.seed(1234);

describe("time.js", function () {
    describe("recent()", function () {
        it("returns the recent timestamp in Unix time format", function () {
            var date = faker.time.recent();
            assert.ok(typeof date === 'number');
            // assert.ok(date == new Date().getTime());
        });

        it("returns the recent timestamp in full time string format", function () {
            var date = faker.time.recent('wide');
            assert.ok(typeof date === 'string');
            // assert.ok(date == new Date().toTimeString());
        });

        it("returns the recent timestamp in abbreviated string format", function () {
            var date = faker.time.recent('abbr');
            assert.ok(typeof date === 'string');
            // assert.ok(date == new Date().toLocaleTimeString());
        });
    });

});
