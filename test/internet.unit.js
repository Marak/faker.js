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

        it("returns an email with japanese characters", function () {
            sinon.stub(faker.internet, 'userName').returns('思源_唐3');
            var email = faker.internet.email("思源_唐3");
            var res = email.split("@");
            res = res[0];
            assert.equal(res, '思源_唐3');
            faker.internet.userName.restore();
        });
    });

    describe("exampleEmail", function () {
      it("returns an email with the correct name", function () {
          sinon.stub(faker.internet, 'userName').returns('Aiden.Harann55');
          var email = faker.internet.email("Aiden.Harann55");
          var res = email.split("@");
          res = res[0];
          assert.equal(res, 'Aiden.Harann55');
          faker.internet.userName.restore();
      });

      it("uses the example.[org|com|net] host", function () {
        var email = faker.internet.exampleEmail();
        assert.ok(email.match(/@example\.(org|com|net)$/));
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
            sinon.spy(faker.random, 'arrayElement');
            var username = faker.internet.userName();

            assert.ok(username);
            assert.ok(faker.name.firstName.called);
            assert.ok(faker.name.lastName.called);
            assert.ok(faker.random.arrayElement.calledWith(['.', '_']));

            faker.random.number.restore();
            faker.name.firstName.restore();
            faker.name.lastName.restore();
            faker.random.arrayElement.restore();
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
        describe("when the firstName used contains a apostrophe", function () {
          sinon.stub(faker.name, 'firstName').returns('d\'angelo');
          var domain_word = faker.internet.domainWord();

          it("should remove the apostrophe", function () {
            assert.strictEqual(domain_word, 'dangelo');
          });

          faker.name.firstName.restore();
        });
    });

    describe('protocol()', function () {
        it('returns a valid protocol', function () {
            var protocol = faker.internet.protocol();
            assert.ok(protocol);
        });

        it('should occasionally return http', function () {
            sinon.stub(faker.random, 'number').returns(0);
            var protocol = faker.internet.protocol();
            assert.ok(protocol);
            assert.strictEqual(protocol, 'http');

            faker.random.number.restore();
        });

        it('should occasionally return https', function () {
            sinon.stub(faker.random, 'number').returns(1);
            var protocol = faker.internet.protocol();
            assert.ok(protocol);
            assert.strictEqual(protocol, 'https');

            faker.random.number.restore();
        });
    });

    describe('httpMethod()', function () {
        it('returns a valid http method', function () {
            var httpMethods = ['GET','POST', 'PUT', 'DELETE', 'PATCH'];
            var method = faker.internet.httpMethod();
            assert.ok(httpMethods.includes(method));
        });
    });

    describe('url()', function () {
        it('returns a valid url', function () {
            sinon.stub(faker.internet,'protocol').returns('http');
            sinon.stub(faker.internet, 'domainWord').returns('bar');
            sinon.stub(faker.internet, 'domainSuffix').returns('net');

            var url = faker.internet.url();

            assert.ok(url);
            assert.strictEqual(url,'http://bar.net');
        });
    });

    describe("ip()", function () {
        it("returns a random IP address with four parts", function () {
            var ip = faker.internet.ip();
            var parts = ip.split('.');
            assert.equal(parts.length, 4);
        });
    });

    describe("ipv6()", function () {
        it("returns a random IPv6 address with eight parts", function () {
            var ip = faker.internet.ipv6();
            var parts = ip.split(':');
            assert.equal(parts.length, 8);
        });
    });

    describe("port()", function () {
        it("returns a random port number", function () {
            var port = faker.internet.port();
            assert.ok(Number.isInteger(port));
            assert.ok(0 <= port && port <= 65535);
        });
    });

    describe("userAgent()", function () {
        it("returns a valid user-agent", function () {
            var ua = faker.internet.userAgent();
            assert.ok(ua);
        });

        it('is deterministic', function () {
            faker.seed(1);
            var ua1 = faker.internet.userAgent();
            faker.seed(1);
            var ua2 = faker.internet.userAgent();
            assert.equal(ua1, ua2);
        });
    });

    describe("color()", function () {
        it("returns a valid hex value (like #ffffff)", function () {
            var color = faker.internet.color(100, 100, 100);
            assert.ok(color.match(/^#[a-f0-9]{6}$/));
        });
    });

    describe("mac()", function () {
        it("returns a random MAC address with 6 hexadecimal digits", function () {
            var mac = faker.internet.mac();
            assert.ok(mac.match(/^([a-f0-9]{2}:){5}[a-f0-9]{2}$/));
        });

        it("uses the dash separator if we pass it in as our separator", function () {
            var mac = faker.internet.mac('-');
            assert.ok(mac.match(/^([a-f0-9]{2}-){5}[a-f0-9]{2}$/));
        });

        it("uses no separator if we pass in an empty string", function() {
            var mac = faker.internet.mac('');
            assert.ok(mac.match(/^[a-f0-9]{12}$/));
        });

        it("uses the default colon (:) if we provide an unacceptable separator", function() {
            var mac = faker.internet.mac('!');
            assert.ok(mac.match(/^([a-f0-9]{2}:){5}[a-f0-9]{2}$/));

            mac = faker.internet.mac('&');
            assert.ok(mac.match(/^([a-f0-9]{2}:){5}[a-f0-9]{2}$/));
        });
    });
});
