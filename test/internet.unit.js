if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("internet.js", function () {
    describe("email()", function () {
        it("returns a userName@domainName", function () {
            sinon.stub(Faker.Internet, 'userName').returns('Aiden.Harªann');
            sinon.stub(Faker.Internet, 'domainName').returns("ex'ample.net");
            var email = Faker.Internet.email();

            assert.equal(email, 'Aiden.Harann@example.net');

            Faker.Internet.userName.restore();
            Faker.Internet.domainName.restore();
        });
    });

    describe("userName()", function () {
        it("occasionally returns a single firstName", function () {
            sinon.stub(Faker.random, 'number').returns(0);
            sinon.spy(Faker.random, 'first_name');
            var username = Faker.Internet.userName();

            assert.ok(username);
            assert.ok(Faker.random.first_name.called);

            Faker.random.number.restore();
            Faker.random.first_name.restore();
        });

        it("occasionally returns a firstName with a period or hyphen and a lastName", function () {
            sinon.stub(Faker.random, 'number').returns(1);
            sinon.spy(Faker.random, 'first_name');
            sinon.spy(Faker.random, 'last_name');
            sinon.spy(Faker.random, 'array_element');
            var username = Faker.Internet.userName();

            assert.ok(username);
            assert.ok(Faker.random.first_name.called);
            assert.ok(Faker.random.last_name.called);
            assert.ok(Faker.random.array_element.calledWith(['.', '_']));

            Faker.random.number.restore();
            Faker.random.first_name.restore();
            Faker.random.last_name.restore();
        });
    });

    describe("domainName()", function () {
        it("returns a domainWord plus a random suffix", function () {
            sinon.stub(Faker.Internet, 'domainWord').returns('bar');
            sinon.stub(Faker.random, 'domain_suffix').returns('net');

            var domain_name = Faker.Internet.domainName();

            assert.equal(domain_name, 'bar.net');

            Faker.Internet.domainWord.restore();
            Faker.random.domain_suffix.restore();
        });
    });

    describe("domainWord()", function () {
        it("returns a lower-case firstName", function () {
            sinon.stub(Faker.random, 'first_name').returns('FOO');
            var domain_word = Faker.Internet.domainWord();

            assert.ok(domain_word);
            assert.strictEqual(domain_word, 'foo');

            Faker.random.first_name.restore();
        });
    });

    describe("ip()", function () {
        it("returns a random IP address with four parts", function () {
            var ip = Faker.Internet.ip();
            var parts = ip.split('.');
            assert.equal(parts.length, 4);
        });
    });

    describe("color()", function () {
        it("returns a valid hex value (like #ffffff)", function () {
            var color = Faker.Internet.color(100, 100, 100);
            assert.ok(color.match(/^#[a-f0-9]{6}$/));
        });
    });
});
