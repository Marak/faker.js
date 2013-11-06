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

    describe("firstNameMale()", function () {
        it("returns a random male name", function () {
            var first_name = Faker.Name.firstNameMale();
            console.log(first_name);
            assert.ok(first_name);
        });
    });


    describe("firstNameFemale()", function () {
        it("returns a random female name", function () {
            var first_name = Faker.Name.firstNameFemale();
            console.log(first_name);
            assert.ok(first_name);

        });
    });


    describe("gender()", function () {
        it("returns a random gender", function () {
            var gender = Faker.Name.gender();
            assert.ok(gender === 'male' || gender === 'female');

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
