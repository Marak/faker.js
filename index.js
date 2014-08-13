/*

   this index.js file is used for including the faker library as a CommonJS module, instead of a bundle

   you can include the faker library into your existing node.js application by requiring the entire /faker directory

    var faker = require(./faker);
    var randomName = faker.Name.findName();

   you can also simply include the "faker.js" file which is the auto-generated bundled version of the faker library

    var faker = require(./customAppPath/faker);
    var randomName = faker.Name.findName();


  if you plan on modifying the faker library you should be performing your changes in the /lib/ directory

*/

exports.Name = require('./lib/name');
exports.Address = require('./lib/address');
exports.PhoneNumber = require('./lib/phone_number');
exports.Internet = require('./lib/internet');
exports.Company = require('./lib/company');
exports.Image = require('./lib/image');
exports.Lorem = require('./lib/lorem');
exports.Helpers =  require('./lib/helpers');
exports.Tree = require('./lib/tree');
exports.Date = require('./lib/date');
exports.random = require('./lib/random');
exports.definitions = require('./lib/definitions');
