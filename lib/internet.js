var Helpers = require('./helpers');
var definitions = require('./definitions');

exports.email = function() {
	return this.userName() + "@" + this.domainName(); 
};

exports.userName = function() {
	switch(Helpers.randomNumber(2))
	{
	case 0:
		return Helpers.randomize(definitions.first_name());
	case 1:
		return Helpers.randomize(definitions.first_name()) + Helpers.randomize([".", "_"]) + Helpers.randomize(definitions.last_name()) ;
	}
};

exports.domainName = function() {
	return this.domainWord() + "." + Helpers.randomize(definitions.domain_suffix());
};

exports.domainWord = function() {
  return Helpers.randomize(definitions.first_name()).toLowerCase();
};
