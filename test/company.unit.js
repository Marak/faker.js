if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("company.js", function () {
    describe("companyName()", function () {
        it("lets you specify the type of name to return", function () {
            sinon.spy(Faker.random, 'number');
            var name = Faker.Company.companyName(1);

            assert.ok(name.match(/-/));

            assert.ok(!Faker.random.number.called);
            Faker.random.number.restore();
        });

        it("sometimes returns three last names", function () {
            sinon.spy(Faker.random, 'last_name');
            sinon.stub(Faker.random, 'number').returns(2);
            var name = Faker.Company.companyName();
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 4); // account for word 'and'
            assert.ok(Faker.random.last_name.calledThrice);

            Faker.random.number.restore();
            Faker.random.last_name.restore();
        });

        it("sometimes returns two last names separated by a hyphen", function () {
            sinon.spy(Faker.random, 'last_name');
            sinon.stub(Faker.random, 'number').returns(1);
            var name = Faker.Company.companyName();
            var parts = name.split('-');

            assert.ok(parts.length >= 2);
            assert.ok(Faker.random.last_name.calledTwice);

            Faker.random.number.restore();
            Faker.random.last_name.restore();
        });

        it("sometimes returns a last name with a company suffix", function () {
            sinon.spy(Faker.Company, 'companySuffix');
            sinon.spy(Faker.random, 'last_name');
            sinon.stub(Faker.random, 'number').returns(0);
            var name = Faker.Company.companyName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 2);
            assert.ok(Faker.random.last_name.calledOnce);
            assert.ok(Faker.Company.companySuffix.calledOnce);

            Faker.random.number.restore();
            Faker.random.last_name.restore();
            Faker.Company.companySuffix.restore();
        });
    });

    describe("companySuffix()", function () {
        it("returns random value from company.suffixes array", function () {
            var suffix = Faker.Company.companySuffix();
            assert.ok(Faker.Company.suffixes().indexOf(suffix) !== -1);
        });
    });

    describe("catchPhrase()", function () {
        it("returns phrase comprising of a catch phrase adjective, descriptor, and noun", function () {
            sinon.spy(Faker.random, 'array_element');
            sinon.spy(Faker.random, 'catch_phrase_adjective');
            sinon.spy(Faker.random, 'catch_phrase_descriptor');
            sinon.spy(Faker.random, 'catch_phrase_noun');
            var phrase = Faker.Company.catchPhrase();

            assert.ok(phrase.split(' ').length >= 3);
            assert.ok(Faker.random.array_element.calledThrice);
            assert.ok(Faker.random.catch_phrase_adjective.calledOnce);
            assert.ok(Faker.random.catch_phrase_descriptor.calledOnce);
            assert.ok(Faker.random.catch_phrase_noun.calledOnce);

            Faker.random.array_element.restore();
            Faker.random.catch_phrase_adjective.restore();
            Faker.random.catch_phrase_descriptor.restore();
            Faker.random.catch_phrase_noun.restore();
        });
    });

    describe("bs()", function () {
        it("returns phrase comprising of a BS adjective, buzz, and noun", function () {
            sinon.spy(Faker.random, 'array_element');
            sinon.spy(Faker.random, 'bs_adjective');
            sinon.spy(Faker.random, 'bs_buzz');
            sinon.spy(Faker.random, 'bs_noun');
            var bs = Faker.Company.bs();

            assert.ok(typeof bs === 'string');
            assert.ok(Faker.random.array_element.calledThrice);
            assert.ok(Faker.random.bs_adjective.calledOnce);
            assert.ok(Faker.random.bs_buzz.calledOnce);
            assert.ok(Faker.random.bs_noun.calledOnce);

            Faker.random.array_element.restore();
            Faker.random.bs_adjective.restore();
            Faker.random.bs_buzz.restore();
            Faker.random.bs_noun.restore();
        });
    });
});
