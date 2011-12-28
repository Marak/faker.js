var Helpers = require('./helpers');
var definitions = require('../lib/definitions');

exports.companyName = function ( format ) {
  switch( ( format ? format : Helpers.randomNumber(3) ) )
  {
  case 0:
    return Helpers.randomize(definitions.last_name()) + " " + this.companySuffix();
    break;
  case 1:
    return Helpers.randomize(definitions.last_name()) + "-" + Helpers.randomize(definitions.last_name()) ;
    break;
  case 2:
    return Helpers.randomize(definitions.last_name()) + "," + Helpers.randomize(definitions.last_name()) + " and " + Helpers.randomize(definitions.last_name());
    break;
  }
};

exports.companySuffix = function() {
   return Helpers.randomize(["Inc", "and\ Sons", "LLC", "Group", "and\ Daughters"]);
};

exports.catchPhrase = function() {
  return Helpers.randomize(definitions.catch_phrase_adjective()) + " " + Helpers.randomize(definitions.catch_phrase_descriptor()) + " "+ Helpers.randomize(definitions.catch_phrase_noun());
};

exports.bs = function() {
  return Helpers.randomize(definitions.bs_adjective()) + " " + Helpers.randomize(definitions.bs_buzz()) + " "+ Helpers.randomize(definitions.bs_noun());
};