if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

// TODO: make some tests for getting / setting locales

// Remark: actual use of locales functionality is currently tested in all.functional.js test

describe("locale", function () {
    describe("setLocale()", function () {
        it("setLocale() changes faker.locale", function () {
          for(var locale in faker.locales) {
            faker.setLocale(locale)
            assert.equal(faker.locale, locale);
          }
        });
    });
});
