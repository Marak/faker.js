if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');

}

describe("name.js", function () {
    describe("firstName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.random, 'first_name').returns('foo');
            var first_name = faker.Name.firstName();

            assert.equal(first_name, 'foo');

            faker.random.first_name.restore();
        });
    });

     describe("firstNameFemale()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.random, 'first_name').returns('foo');
            var first_name = faker.Name.firstNameFemale();

            assert.equal(first_name, 'foo');

            faker.random.first_name.restore();
        });
    });

      describe("firstNameMale()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.random, 'first_name').returns('foo');
            var first_name = faker.Name.firstNameMale();

            assert.equal(first_name, 'foo');

            faker.random.first_name.restore();
        });
    });


    describe("lastName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.random, 'last_name').returns('foo');

            var last_name = faker.Name.lastName();

            assert.equal(last_name, 'foo');

            faker.random.last_name.restore();
        });
    });

    describe("findName()", function () {
        it("usually returns a first name and last name", function () {
            sinon.stub(faker.random, 'number').returns(5);
            var name = faker.Name.findName();
            assert.ok(name);
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 2);

            faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a prefix", function () {
            sinon.stub(faker.random, 'number').returns(0);
            var name = faker.Name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a suffix", function () {
            sinon.stub(faker.random, 'number').returns(1);
            var name = faker.Name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            faker.random.number.restore();
        });
    });
});
