if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("internet.js", function () {
    describe("email()", function () {
        it("returns an email", function () {
            sinon.stub(faker.internet, 'userName').returns('Aiden.Harann55');
            var email = faker.internet.email("Aiden.Harann55");
            var res = email.split("@");
            res = res[0];
            assert.equal(res, 'Aiden.Harann55');
            faker.internet.userName.restore();
        });
    });

    describe("userName()", function () {
        it("occasionally returns a single firstName", function () {
            sinon.stub(faker.random, 'number').returns(0);
            sinon.spy(faker.name, 'firstName');
            var username = faker.internet.userName();

            assert.ok(username);
            assert.ok(faker.name.firstName.called);

            faker.random.number.restore();
            faker.name.firstName.restore();
        });

        it("occasionally returns a firstName with a period or hyphen and a lastName", function () {
            sinon.stub(faker.random, 'number').returns(1);
            sinon.spy(faker.name, 'firstName');
            sinon.spy(faker.name, 'lastName');
            sinon.spy(faker.random, 'array_element');
            var username = faker.internet.userName();

            assert.ok(username);
            assert.ok(faker.name.firstName.called);
            assert.ok(faker.name.lastName.called);
            assert.ok(faker.random.array_element.calledWith(['.', '_']));

            faker.random.number.restore();
            faker.name.firstName.restore();
            faker.name.lastName.restore();
        });
    });

    describe("userName('_')", function() {
        it("returns usernames with an underscore", function () {
            var username = faker.internet.userName('_');

            assert.ok(username);
            assert.equal(username.indexOf('_') > 0, true);
        });
    });

    describe("userName('.')", function() {
        it("returns usernames with a dot", function () {
            var username = faker.internet.userName('.');

            assert.ok(username);
            assert.equal(username.indexOf('.') > 0, true);
        });
    });

    describe("userName('-')", function () {
        it("returns usernames with a hyphen", function () {
            var username = faker.internet.userName('-');

            assert.ok(username);
            assert.equal(username.indexOf('-') > 0, true);
        });
    });

    describe("domainName()", function () {
        it("returns a domainWord plus a random suffix", function () {
            sinon.stub(faker.internet, 'domainWord').returns('bar');
            sinon.stub(faker.internet, 'domainSuffix').returns('net');

            var domain_name = faker.internet.domainName();

            assert.equal(domain_name, 'bar.net');

            faker.internet.domainWord.restore();
            faker.internet.domainSuffix.restore();
        });
    });

    describe("domainWord()", function () {
        it("returns a lower-case firstName", function () {
            sinon.stub(faker.name, 'firstName').returns('FOO');
            var domain_word = faker.internet.domainWord();

            assert.ok(domain_word);
            assert.strictEqual(domain_word, 'foo');

            faker.name.firstName.restore();
        });
    });

    describe("ip()", function () {
        it("returns a random IP address with four parts", function () {
            var ip = faker.internet.ip();
            var parts = ip.split('.');
            assert.equal(parts.length, 4);
        });
    });

    describe("userAgent()", function () {
        it("returns a valid user-agent", function () {
            var ua = faker.internet.userAgent();
            assert.ok(ua);
        });
    });

    describe("color()", function () {
        it("returns a valid hex value (like #ffffff)", function () {
            var color = faker.internet.color(100, 100, 100);
            assert.ok(color.match(/^#[a-f0-9]{6}$/));
        });
    });
});
