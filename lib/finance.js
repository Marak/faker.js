var creditcard = require('creditcard-generator');

var Finance = function (faker) {
  var Helpers = faker.helpers,
      self = this;

  self.account = function (length) {

      length = length || 8;

      var template = '';

      for (var i = 0; i < length; i++) {
          template = template + '#';
      }
      length = null;
      return Helpers.replaceSymbolWithNumber(template);
  }

  self.accountName = function () {

      return [Helpers.randomize(faker.definitions.finance.account_type), 'Account'].join(' ');
  }

  self.mask = function (length, parens, elipsis) {


      //set defaults
      length = (length == 0 || !length || typeof length == 'undefined') ? 4 : length;
      parens = (parens === null) ? true : parens;
      elipsis = (elipsis === null) ? true : elipsis;

      //create a template for length
      var template = '';

      for (var i = 0; i < length; i++) {
          template = template + '#';
      }

      //prefix with elipsis
      template = (elipsis) ? ['...', template].join('') : template;

      template = (parens) ? ['(', template, ')'].join('') : template;

      //generate random numbers
      template = Helpers.replaceSymbolWithNumber(template);

      return template;

  }

  //min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
  //NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol

  self.amount = function (min, max, dec, symbol) {

      min = min || 0;
      max = max || 1000;
      dec = dec || 2;
      symbol = symbol || '';

      return symbol + (Math.round((Math.random() * (max - min) + min) * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);

  }

  self.transactionType = function () {
      return Helpers.randomize(faker.definitions.finance.transaction_type);
  }

  self.currencyCode = function () {
      return faker.random.objectElement(faker.definitions.finance.currency)['code'];
  }

  self.currencyName = function () {
      return faker.random.objectElement(faker.definitions.finance.currency, 'key');
  }

  self.currencySymbol = function () {
      var symbol;

      while (!symbol) {
          symbol = faker.random.objectElement(faker.definitions.finance.currency)['symbol'];
      }
      return symbol;
  }

  self.creditcard = function (cardType) {
    var keys = Object.keys(creditcard.Schemes);
    if (cardType == null) { 
        // select a random card type
        cardType = keys[keys.length * Math.random() << 0];
    } else {
        // search card type in schemes, case insensitive
         var foundCardTypes = keys.filter(function(type) { 
           return type.toLowerCase() == cardType.toLowerCase(); 
         });
         
         if (foundCardTypes.length > 0) {
           cardType = foundCardTypes[0];
         } else {
           cardType = null;
         }
    }
    
    if (creditcard.Schemes[cardType] == undefined) { 
        // unknown card type, fallback to Mastercard 
        cardType = "Mastercard";
    }
    
    return {
        issuer: cardType,
        number: creditcard.GenCC(cardType)[0]
    };
  }
}

module['exports'] = Finance;