var Helpers = require('./helpers');
var definitions = require('./definitions');

var finance = {

	account: function(length){
		
		if(!length) length		= 8;

		var template = '';

		for(var i=0; i<length; i++)
		{
			template = template + '#';
		}
		length = null;
		return Helpers.replaceSymbolWithNumber(template);
	},
	
	accountName: function(){
	
		return [Helpers.randomize(definitions.account_type), 'Account'].join(' ');
	},
	
	mask: function(length, parens, elipsis){

		//set defaults
		length = (length === null) ? 4 : length;		
		
		parens = (parens === null) ? true : parens;
		
		elipsis = (elipsis === null) ? true : elipsis;		
	
		//create a template for length
		var template = '';
		
		for(var i=0; i<length; i++)
		{
			template = template + '#';
		}
	
		//prefix with elipsis
		template = (elipsis) ? ['...', template].join('') : template;
	
		template = (parens) ? ['(', template ,')'].join('') : template;
		
		//generate random numbers
		template = Helpers.replaceSymbolWithNumber(template);
		
		return template;
	
	},
	
	//min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
	//NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol
	
	amount: function(min, max, dec, symbol){
	
		if(!min)	min	= 1;
		if(!max)	max	= 1000;
		if(!dec)	dec	= 2;
		if(!symbol) symbol	= '';	//default to nothing
	
	
		return symbol + Math.round((Math.random() * (max - min) + min)*Math.pow(10,dec))/Math.pow(10,dec);
	
	},
	
	transactionType: function(){
		return Helpers.randomize(definitions.transaction_type());
	}
};

module.exports = finance;