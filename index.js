/*

   this index.js file is used for including the faker library as a CommonJS module, instead of a bundle

   you can include the faker library into your existing node.js application by requiring the entire /faker directory

    var faker = require(./faker);
    var randomName = faker.name.findName();

   you can also simply include the "faker.js" file which is the auto-generated bundled version of the faker library

    var faker = require(./customAppPath/faker);
    var randomName = faker.name.findName();


  if you plan on modifying the faker library you should be performing your changes in the /lib/ directory

*/

exports.name = require('./lib/name');
exports.address = require('./lib/address');
exports.phone = require('./lib/phone_number');
exports.internet = require('./lib/internet');
exports.company = require('./lib/company');
exports.image = require('./lib/image');
exports.lorem = require('./lib/lorem');
exports.helpers =  require('./lib/helpers');
exports.date = require('./lib/date');
exports.random = require('./lib/random');
exports.finance = require('./lib/finance');
exports.hacker = require('./lib/hacker');

var locales = exports.locales = require('./lib/locales');

// default locale
exports.locale = "en";

// in case a locale is missing a definition, fallback to this locale
exports.localeFallback = "en";

exports.definitions = {};

var _definitions = {
  "name": ["first_name", "last_name", "prefix", "suffix", "title"],
  "address": ["city_prefix", "city_suffix", "street_suffix", "county", "country", "state", "state_abbr"],
  "company": ["adjective", "noun", "descriptor", "bs_adjective", "bs_noun", "bs_verb"],
  "lorem": ["words"],
  "hacker": ["abbreviation", "adjective", "noun", "verb", "ingverb"],
  "phone_number": ["formats"],
  "finance": ["account_type", "transaction_type", "currency"],
  "internet": ["avatar_uri", "domain_suffix", "free_email", "password"]
};

// Create a Getter for all definitions.foo.bar propetries
Object.keys(_definitions).forEach(function(d){
  if (typeof exports.definitions[d] === "undefined") {
    exports.definitions[d] = {};
  }
  _definitions[d].forEach(function(p){
    Object.defineProperty(exports.definitions[d], p, {
      get: function () {
        if (typeof locales[exports.locale][d] === "undefined" || typeof locales[exports.locale][d][p] === "undefined") {
          // certain localization sets contain less data then others.
          // in the case of a missing defintion, use the default localeFallback to substitute the missing set data
          return locales[exports.localeFallback][d][p];
        } else {
          // return localized data
          return locales[exports.locale][d][p];
        }
      }
    });
  });
});
