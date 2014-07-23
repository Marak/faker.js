if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("company.js", function () {
    describe("companyName()", function () {
        it("lets you specify the type of name to return", function () {
            sinon.spy(faker.random, 'number');
            var name = faker.Company.companyName(1);

            assert.ok(name.match(/-/));

            assert.ok(!faker.random.number.called);
            faker.random.number.restore();
        });

        it("sometimes returns three last names", function () {
            sinon.spy(faker.random, 'last_name');
            sinon.stub(faker.random, 'number').returns(2);
            var name = faker.Company.companyName();
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 4); // account for word 'and'
            assert.ok(faker.random.last_name.calledThrice);

            faker.random.number.restore();
            faker.random.last_name.restore();
        });

        it("sometimes returns two last names separated by a hyphen", function () {
            sinon.spy(faker.random, 'last_name');
            sinon.stub(faker.random, 'number').returns(1);
            var name = faker.Company.companyName();
            var parts = name.split('-');

            assert.ok(parts.length >= 2);
            assert.ok(faker.random.last_name.calledTwice);

            faker.random.number.restore();
            faker.random.last_name.restore();
        });

        it("sometimes returns a last name with a company suffix", function () {
            sinon.spy(faker.Company, 'companySuffix');
            sinon.spy(faker.random, 'last_name');
            sinon.stub(faker.random, 'number').returns(0);
            var name = faker.Company.companyName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 2);
            assert.ok(faker.random.last_name.calledOnce);
            assert.ok(faker.Company.companySuffix.calledOnce);

            faker.random.number.restore();
            faker.random.last_name.restore();
            faker.Company.companySuffix.restore();
        });
    });

    describe("companySuffix()", function () {
        it("returns random value from company.suffixes array", function () {
            var suffix = faker.Company.companySuffix();
            assert.ok(faker.Company.suffixes().indexOf(suffix) !== -1);
        });
    });

    describe("catchPhrase()", function () {
        it("returns phrase comprising of a catch phrase adjective, descriptor, and noun", function () {
            sinon.spy(faker.random, 'array_element');
            sinon.spy(faker.random, 'catch_phrase_adjective');
            sinon.spy(faker.random, 'catch_phrase_descriptor');
            sinon.spy(faker.random, 'catch_phrase_noun');
            var phrase = faker.Company.catchPhrase();

            assert.ok(phrase.split(' ').length >= 3);
            assert.ok(faker.random.array_element.calledThrice);
            assert.ok(faker.random.catch_phrase_adjective.calledOnce);
            assert.ok(faker.random.catch_phrase_descriptor.calledOnce);
            assert.ok(faker.random.catch_phrase_noun.calledOnce);

            faker.random.array_element.restore();
            faker.random.catch_phrase_adjective.restore();
            faker.random.catch_phrase_descriptor.restore();
            faker.random.catch_phrase_noun.restore();
        });
    });

    describe("bs()", function () {
        it("returns phrase comprising of a BS adjective, buzz, and noun", function () {
            sinon.spy(faker.random, 'array_element');
            sinon.spy(faker.random, 'bs_adjective');
            sinon.spy(faker.random, 'bs_buzz');
            sinon.spy(faker.random, 'bs_noun');
            var bs = faker.Company.bs();

            assert.ok(typeof bs === 'string');
            assert.ok(faker.random.array_element.calledThrice);
            assert.ok(faker.random.bs_adjective.calledOnce);
            assert.ok(faker.random.bs_buzz.calledOnce);
            assert.ok(faker.random.bs_noun.calledOnce);

            faker.random.array_element.restore();
            faker.random.bs_adjective.restore();
            faker.random.bs_buzz.restore();
            faker.random.bs_noun.restore();
        });
    });
});
