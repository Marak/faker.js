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
    break;
  case 1:
    return Helpers.randomize(definitions.first_name()) + Helpers.randomize([".", "_"]) + Helpers.randomize(definitions.last_name()) ;
    break;
  }
};

exports.domainName = function() {
  return this.domainWord() + "." + Helpers.randomize(definitions.domain_suffix());
};

exports.domainWord = function() {
  return Helpers.randomize(definitions.first_name()).toLowerCase();
};

exports.ip = function() {
  var randNum = function() {
    return (Math.random()*254 + 1).toFixed(0);
  }

  var result = [];
  for(var i=0; i<4; i++) {
    result[i] = randNum();
  }

  return result.join(".");
};
