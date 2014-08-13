if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

// Basic smoke tests to make sure each method is at least implemented and returns a string.

var modules = {
    Address: [
        'city', 'streetName', 'streetAddress', 'secondaryAddress',
        'brState', 'ukCountry', 'ukCounty', 'usState', 'zipCode'
    ],

    Company: ['companyName', 'companySuffix', 'catchPhrase', 'bs'],

    Internet: ['email', 'userName', 'domainName', 'domainWord', 'ip'],

    Lorem: ['words', 'sentence', 'sentences', 'paragraph', 'paragraphs'],

    Name: ['firstName', 'lastName', 'findName'],

    PhoneNumber: ['phoneNumber']
};

describe("functional tests", function () {
    Object.keys(modules).forEach(function (module) {
        describe(module, function () {
            modules[module].forEach(function (meth) {
                it(meth + "()", function () {
                    var result = faker[module][meth]();
                    assert.ok(result);
                });
            });
        });
    });

    describe("Address", function () {
        it("zipCodeFormat()", function () {
            var result = faker.Address.zipCodeFormat(0);
            assert.ok(!result.match(/-/));

            result = faker.Address.zipCodeFormat(1);
            assert.ok(result.match(/-/));
        });
    });
});
