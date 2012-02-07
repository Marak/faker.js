'use strict'

var Helpers = require('./helpers');
var definitions = require('./definitions');

exports.email = function() {
	return (this.userName() + "@" + this.domainName()).replace(/([^A-Z0-9._%+-])/ig, '');
};

exports.userName = function() {
  var result
	switch(Helpers.randomNumber(2))
	{
	case 0:
		result = Helpers.randomize(definitions.first_name());
		break;
	case 1:
		result = Helpers.randomize(definitions.first_name()) + Helpers.randomize([".", "_"]) + Helpers.randomize(definitions.last_name());
    break;
	}
  return result.replace(/([^A-Z0-9._%+-])/ig, '')
};

exports.domainName = function() {
	return this.domainWord() + "." + Helpers.randomize(definitions.domain_suffix());
};

exports.domainWord = function() {
  return Helpers.randomize(definitions.first_name()).toLowerCase();
}
