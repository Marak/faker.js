if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("internet.js", function () {
    describe("email()", function () {
        it("returns a userName@domainName", function () {
            sinon.stub(faker.Internet, 'userName').returns('Aiden.Harªann');
            sinon.stub(faker.Internet, 'domainName').returns("ex'ample.net");
            var email = faker.Internet.email();

            assert.equal(email, 'Aiden.Harann@example.net');

            faker.Internet.userName.restore();
            faker.Internet.domainName.restore();
        });
    });

    describe("userName()", function () {
        it("occasionally returns a single firstName", function () {
            sinon.stub(faker.random, 'number').returns(0);
            sinon.spy(faker.random, 'first_name');
            var username = faker.Internet.userName();

            assert.ok(username);
            assert.ok(faker.random.first_name.called);

            faker.random.number.restore();
            faker.random.first_name.restore();
        });

        it("occasionally returns a firstName with a period or hyphen and a lastName", function () {
            sinon.stub(faker.random, 'number').returns(1);
            sinon.spy(faker.random, 'first_name');
            sinon.spy(faker.random, 'last_name');
            sinon.spy(faker.random, 'array_element');
            var username = faker.Internet.userName();

            assert.ok(username);
            assert.ok(faker.random.first_name.called);
            assert.ok(faker.random.last_name.called);
            assert.ok(faker.random.array_element.calledWith(['.', '_']));

            faker.random.number.restore();
            faker.random.first_name.restore();
            faker.random.last_name.restore();
        });
    });

    describe("domainName()", function () {
        it("returns a domainWord plus a random suffix", function () {
            sinon.stub(faker.Internet, 'domainWord').returns('bar');
            sinon.stub(faker.random, 'domain_suffix').returns('net');

            var domain_name = faker.Internet.domainName();

            assert.equal(domain_name, 'bar.net');

            faker.Internet.domainWord.restore();
            faker.random.domain_suffix.restore();
        });
    });

    describe("domainWord()", function () {
        it("returns a lower-case firstName", function () {
            sinon.stub(faker.random, 'first_name').returns('FOO');
            var domain_word = faker.Internet.domainWord();

            assert.ok(domain_word);
            assert.strictEqual(domain_word, 'foo');

            faker.random.first_name.restore();
        });
    });

    describe("ip()", function () {
        it("returns a random IP address with four parts", function () {
            var ip = faker.Internet.ip();
            var parts = ip.split('.');
            assert.equal(parts.length, 4);
        });
    });

    describe("color()", function () {
        it("returns a valid hex value (like #ffffff)", function () {
            var color = faker.Internet.color(100, 100, 100);
            assert.ok(color.match(/^#[a-f0-9]{6}$/));
        });
    });
});
