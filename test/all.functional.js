if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

// Basic smoke tests to make sure each method is at least implemented and returns a string.

var modules = {
    address: [
        'city', 'streetName', 'streetAddress', 'secondaryAddress',
        'country', 'county', 'state', 'zipCode'
    ],

    company: ['companyName', 'companySuffix', 'catchPhrase', 'bs'],

    internet: ['email', 'userName', 'domainName', 'domainWord', 'ip'],

    lorem: ['words', 'sentence', 'sentences', 'paragraph', 'paragraphs'],

    name: ['firstName', 'lastName', 'findName'],

    phone: ['phoneNumber'],

    finance: ['account', 'accountName', 'mask', 'amount', 'transactionType', 'currencyCode', 'currencyName', 'currencySymbol'],

    commerce: ['color', 'department', 'productName', 'price']
};

describe("functional tests", function () {

    for(var locale in faker.locales) {
      faker.locale = locale;
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
    }

});