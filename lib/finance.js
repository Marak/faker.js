var Helpers = require('./helpers');
var definitions = require('./definitions');
var faker = require('../index');

var finance = {

    account: function (length) {

        length = length || 8;

        var template = '';

        for (var i = 0; i < length; i++) {
            template = template + '#';
        }
        length = null;
        return Helpers.replaceSymbolWithNumber(template);
    },

    accountName: function () {

        return [Helpers.randomize(definitions.account_type), 'Account'].join(' ');
    },

    mask: function (length, parens, elipsis) {

        //set defaults
        length = (length === 0 || !length || typeof length == 'undefined') ? 4 : length;
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

    },

    //min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
    //NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol

    amount: function (min, max, dec, symbol) {

        min = min || 0;
        max = max || 1000;
        dec = dec || 2;
        symbol = symbol || '';

        return symbol + (Math.round((Math.random() * (max - min) + min) * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);

    },

    transactionType: function () {
        return Helpers.randomize(definitions.transaction_type);
    },

    currencyCode: function () {
        return faker.random.currency_code();
    },

    currencyName: function () {
        return faker.random.currency_name();
    },

    currencySymbol: function () {
        return faker.random.currencies_symbol();
    }
};

module.exports = finance;