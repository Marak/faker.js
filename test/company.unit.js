if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("company.js", function () {
    describe("companyName()", function () {

        it("sometimes returns three last names", function () {
            sinon.spy(faker.name, 'lastName');
            sinon.stub(faker.random, 'number').returns(2);
            var name = faker.company.companyName();
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 4); // account for word 'and'
            assert.ok(faker.name.lastName.calledThrice);

            faker.random.number.restore();
            faker.name.lastName.restore();
        });

        it("sometimes returns two last names separated by a hyphen", function () {
            sinon.spy(faker.name, 'lastName');
            sinon.stub(faker.random, 'number').returns(1);
            var name = faker.company.companyName();
            var parts = name.split('-');

            assert.ok(parts.length >= 2);
            assert.ok(faker.name.lastName.calledTwice);

            faker.random.number.restore();
            faker.name.lastName.restore();
        });

        it("sometimes returns a last name with a company suffix", function () {
            sinon.spy(faker.company, 'companySuffix');
            sinon.spy(faker.name, 'lastName');
            sinon.stub(faker.random, 'number').returns(0);
            var name = faker.company.companyName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 2);
            assert.ok(faker.name.lastName.calledOnce);
            assert.ok(faker.company.companySuffix.calledOnce);

            faker.random.number.restore();
            faker.name.lastName.restore();
            faker.company.companySuffix.restore();
        });
    });

    describe("companySuffix()", function () {
        it("returns random value from company.suffixes array", function () {
            var suffix = faker.company.companySuffix();
            assert.ok(faker.company.suffixes().indexOf(suffix) !== -1);
        });
    });

    describe("catchPhrase()", function () {
        it("returns phrase comprising of a catch phrase adjective, descriptor, and noun", function () {
            sinon.spy(faker.random, 'arrayElement');
            sinon.spy(faker.company, 'catchPhraseAdjective');
            sinon.spy(faker.company, 'catchPhraseDescriptor');
            sinon.spy(faker.company, 'catchPhraseNoun');
            var phrase = faker.company.catchPhrase();

            assert.ok(phrase.split(' ').length >= 3);
            assert.ok(faker.random.arrayElement.calledThrice);
            assert.ok(faker.company.catchPhraseAdjective.calledOnce);
            assert.ok(faker.company.catchPhraseDescriptor.calledOnce);
            assert.ok(faker.company.catchPhraseNoun.calledOnce);

            faker.random.arrayElement.restore();
            faker.company.catchPhraseAdjective.restore();
            faker.company.catchPhraseDescriptor.restore();
            faker.company.catchPhraseNoun.restore();
        });
    });

    describe("bs()", function () {
        it("returns phrase comprising of a BS buzz, adjective, and noun", function () {
            sinon.spy(faker.random, 'arrayElement');
            sinon.spy(faker.company, 'bsBuzz');
            sinon.spy(faker.company, 'bsAdjective');
            sinon.spy(faker.company, 'bsNoun');
            var bs = faker.company.bs();

            assert.ok(typeof bs === 'string');
            assert.ok(faker.random.arrayElement.calledThrice);
            assert.ok(faker.company.bsBuzz.calledOnce);
            assert.ok(faker.company.bsAdjective.calledOnce);
            assert.ok(faker.company.bsNoun.calledOnce);

            faker.random.arrayElement.restore();        
            faker.company.bsBuzz.restore();
            faker.company.bsAdjective.restore();
            faker.company.bsNoun.restore();
        });
    });
});
