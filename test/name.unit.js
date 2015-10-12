if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');

}

describe("name.js", function () {
    describe("firstName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'firstName').returns('foo');
            var first_name = faker.name.firstName();

            assert.equal(first_name, 'foo');

            faker.name.firstName.restore();
        });
    });

    describe("lastName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'lastName').returns('foo');

            var last_name = faker.name.lastName();

            assert.equal(last_name, 'foo');

            faker.name.lastName.restore();
        });
    });

    describe("findName()", function () {
        it("usually returns a first name and last name", function () {
            sinon.stub(faker.random, 'number').returns(5);
            var name = faker.name.findName();
            assert.ok(name);
            var parts = name.split(' ');

            assert.strictEqual(parts.length, 2);

            faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a prefix", function () {
            sinon.stub(faker.random, 'number').returns(0);
            var name = faker.name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);

            faker.random.number.restore();
        });

        it("occasionally returns a first name and last name with a suffix", function () {
            sinon.stub(faker.random, 'number').returns(1);
            sinon.stub(faker.name, 'suffix').returns('Jr.');
            var name = faker.name.findName();
            var parts = name.split(' ');

            assert.ok(parts.length >= 3);
            assert.equal(parts[parts.length-1], 'Jr.');

            faker.name.suffix.restore();
            faker.random.number.restore();
        });

        it("needs to work with specific locales and respect the fallbacks", function () {
            faker.locale = 'en_US';
            // this will throw if this is broken
            var name = faker.name.findName();
        });
    });

    describe("title()", function () {
      it("returns a random title", function () {
          sinon.stub(faker.name, 'title').returns('Lead Solutions Supervisor');

          var title = faker.name.title();

          assert.equal(title, 'Lead Solutions Supervisor');

          faker.name.title.restore();
        });
    });

    describe("jobTitle()", function () {
        it("returns a job title consisting of a descriptor, area, and type", function () {
            sinon.spy(faker.random, 'arrayElement');
            sinon.spy(faker.name, 'jobDescriptor');
            sinon.spy(faker.name, 'jobArea');
            sinon.spy(faker.name, 'jobType');
            var jobTitle = faker.name.jobTitle();

            assert.ok(typeof jobTitle === 'string');
            assert.ok(faker.random.arrayElement.calledThrice);
            assert.ok(faker.name.jobDescriptor.calledOnce);
            assert.ok(faker.name.jobArea.calledOnce);
            assert.ok(faker.name.jobType.calledOnce);

            faker.random.arrayElement.restore();
            faker.name.jobDescriptor.restore();
            faker.name.jobArea.restore();
            faker.name.jobType.restore();
        });
    });
});
