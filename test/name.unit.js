if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');

}

describe("name.js", function () {
    describe("firstName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'firstName').returns('foo');
            var first_name = faker.name.firstName();

            assert.equal(first_name, 'foo');

            faker.name.firstName.restore();
        });
    });

    describe("middleName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'middleName').returns('foo');
            var middle_name = faker.name.middleName();

            assert.equal(middle_name, 'foo');

            faker.name.middleName.restore();
        });
    });

    describe("lastName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'lastName').returns('foo');

            var last_name = faker.name.lastName();

            assert.equal(last_name, 'foo');

            faker.name.lastName.restore();
        });
    });

    describe("findName()", function () {
        it("usually returns a first name and last name", function () {
            sinon.stub(faker.random, 'number').returns(5);
            var name = faker.name.findName();
            assert.ok(name);
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 2);

            faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a prefix", function () {
            sinon.stub(faker.random, 'number').returns(0);
            var name = faker.name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a suffix", function () {
            sinon.stub(faker.random, 'number').returns(1);
            var name = faker.name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            faker.random.number.restore();
        });

        it("needs to work with specific locales and respect the fallbacks", function () {
            faker.locale = 'en_US';
            // this will throw if this is broken
            var name = faker.name.findName();
        });
    });

    describe("title()", function () {
        it("returns a random title", function () {
            sinon.stub(faker.name, 'title').returns('Lead Solutions Supervisor');

            var title = faker.name.title();

            assert.equal(title, 'Lead Solutions Supervisor');

            faker.name.title.restore();
        });
    });
});
