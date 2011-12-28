/*

   this index.js file is used for including the Faker library as a CommonJS module, instead of a bundle

   you can include the Faker library into your existing node.js application by requiring the entire /Faker directory

    var Faker = require(./Faker);
    var randomName = Faker.Name.findName();

   you can also simply include the "Faker.js" file which is the auto-generated bundled version of the Faker library

    var Faker = require(./customAppPath/Faker);
    var randomName = Faker.Name.findName();


  if you plan on modifying the Faker library you should be performing your changes in the /lib/ directory

*/

exports.Name = require('./lib/name');
exports.Address = require('./lib/address');
exports.PhoneNumber = require('./lib/phone_number');
exports.Internet = require('./lib/internet');
exports.Company = require('./lib/company');
exports.Lorem = require('./lib/lorem');
exports.Helpers =  require('./lib/helpers');
exports.definitions = require('./lib/definitions');
