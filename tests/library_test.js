var util = require('util');

var definitions = require('../lib/definitions');

var Faker = require('../index');

var card = Faker.Helpers.createCard();

util.puts(JSON.stringify(card));
