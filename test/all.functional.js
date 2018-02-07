if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

var IGNORED_MODULES = ['locales', 'locale', 'localeFallback', 'definitions', 'fake', 'helpers'];
var IGNORED_METHODS = {
    system: ['directoryPath', 'filePath'] // these are TODOs
};

function isTestableModule(mod) {
    return IGNORED_MODULES.indexOf(mod) === -1;
}

function isMethodOf(mod) {
    return function(meth) {
        return typeof faker[mod][meth] === 'function';
    };
}

function isTestableMethod(mod) {
    return function(meth) {
        return !(mod in IGNORED_METHODS && IGNORED_METHODS[mod].indexOf(meth) >= 0);
    };
}

function both(pred1, pred2) {
    return function(value) {
        return pred1(value) && pred2(value);
    };
}

// Basic smoke tests to make sure each method is at least implemented and returns a value.

var modules = Object.keys(faker)
    .filter(isTestableModule)
    .reduce(function(result, mod) {
        result[mod] = Object.keys(faker[mod]).filter(both(isMethodOf(mod), isTestableMethod(mod)));
        return result;
    }, {});

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