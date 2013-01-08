if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("name.js", function () {
    describe("firstName()", function () {
        it("returns a random name", function () {
            sinon.stub(Faker.random, 'first_name').returns('foo');
            var first_name = Faker.Name.firstName();

            assert.equal(first_name, 'foo');

            Faker.random.first_name.restore();
        });
    });

    describe("lastName()", function () {
        it("returns a random name", function () {
            sinon.stub(Faker.random, 'last_name').returns('foo');

            var last_name = Faker.Name.lastName();

            assert.equal(last_name, 'foo');

            Faker.random.last_name.restore();
        });
    });

    describe("findName()", function () {
        it("usually returns a first name and last name", function () {
            sinon.stub(Faker.random, 'number').returns(5);
            var name = Faker.Name.findName();
            assert.ok(name);
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 2);

            Faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a prefix", function () {
            sinon.stub(Faker.random, 'number').returns(0);
            var name = Faker.Name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            Faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a suffix", function () {
            sinon.stub(Faker.random, 'number').returns(1);
            var name = Faker.Name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            Faker.random.number.restore();
        });
    });
});
