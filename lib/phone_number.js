var Helpers = require('./helpers');
var definitions = require('./definitions');

exports.phoneNumber = function(){

  return Helpers.replaceSymbolWithNumber(Helpers.randomize(definitions.phone_formats()));

};

exports.phoneNumberFormat = function ( format ){
  return Helpers.replaceSymbolWithNumber(definitions.phone_formats()[format]);
};