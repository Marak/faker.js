if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

var functionalHelpers = require('./support/function-helpers.js');

var modules = functionalHelpers.modulesList();

describe("functional tests", function () {
  for(var locale in faker.locales) {
    faker.locale = locale;
    Object.keys(modules).forEach(function (module) {
        describe(module, function () {
            modules[module].forEach(function (meth) {
                it(meth + "()", function () {
                    var result = faker[module][meth]();
                    if (meth === 'boolean') {
                        assert.ok(result === true || result === false);
                    } else {
                        assert.ok(result);
                    }
                });
            });
        });
    });
  }
});

describe("faker.fake functional tests", function () {
  for(var locale in faker.locales) {
    faker.locale = locale;
    faker.seed(1);
    Object.keys(modules).forEach(function (module) {
        describe(module, function () {
            modules[module].forEach(function (meth) {
                it(meth + "()", function () {
                    var result = faker.fake('{{' + module + '.' + meth + '}}');
                    // just make sure any result is returned
                    // an undefined result usually means an error
                    assert.ok(typeof result !== 'undefined');
                    /*
                    if (meth === 'boolean') {
                        assert.ok(result === true || result === false);
                    } else {
                        assert.ok(result);
                    }
                    */
                });
            });
        });
    });
  }
});