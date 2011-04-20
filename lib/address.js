var Helpers = require('./helpers');
var definitions = require('../lib/definitions');

exports.zipCode = function() {
  return Helpers.replaceSymbolWithNumber(Helpers.randomize(["#####", '#####-####']));
};

exports.zipCodeFormat = function ( format ) {
  return Helpers.replaceSymbolWithNumber( ["#####", '#####-####'][format] );
};

exports.city = function() {
  switch(Helpers.randomNumber(3))
  {
  case 0:
   return Helpers.randomize(definitions.city_prefix()) + " " + Helpers.randomize(definitions.first_name()) + Helpers.randomize(definitions.city_suffix());
   break;
  case 1:
   return Helpers.randomize(definitions.city_prefix()) + " " + Helpers.randomize(definitions.first_name());
    break;
  case 2:
    return Helpers.randomize(definitions.first_name()) + Helpers.randomize(definitions.city_suffix());
    break;
  case 3:
    return Helpers.randomize(definitions.last_name()) + Helpers.randomize(definitions.city_suffix());
    break;
  }
};

exports.streetName = function() {
  switch(Helpers.randomNumber(1))
  {
  case 0:
   return Helpers.randomize(definitions.last_name()) + " " + Helpers.randomize(definitions.street_suffix());
   break;
  case 1:
   return Helpers.randomize(definitions.first_name()) + " " + Helpers.randomize(definitions.street_suffix());
   break;
  }
};

exports.streetAddress = function(i) {
  if( typeof i == 'undefined'){ var i = false;}
  var address = "";
  switch(Helpers.randomNumber(2))
    {
    case 0:
     address =  Helpers.replaceSymbolWithNumber("#####") + " " + this.streetName();
     break;
    case 1:
     address = Helpers.replaceSymbolWithNumber("####") +  " " + this.streetName();
     break;
    case 2:
     address = Helpers.replaceSymbolWithNumber("###") + " " + this.streetName();
     break;
    }
  var full_address = i ?  address + " " + this.secondaryAddress() : address;
  return full_address;
};

exports.secondaryAddress = function() {
    return Helpers.replaceSymbolWithNumber(Helpers.randomize(
    [
      'Apt. ###',
      'Suite ###'
    ]
  )
  );
};

exports.brState = function( abbr ) {
  return Helpers.randomize( definitions[ abbr ? 'br_state_abbr' : 'br_state']() );
}

exports.ukCounty = function(){
  return Helpers.randomize(definitions.uk_county());
};

exports.ukCountry = function(){
  return Helpers.randomize(definitions.uk_country());
};

exports.usState = function( abbr ) {
  return Helpers.randomize( definitions[ abbr ? 'us_state_abbr' : 'us_state']() );
}