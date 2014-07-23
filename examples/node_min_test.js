#!/usr/bin/env node

var util = require('util');

var faker = require('../faker');

var card = faker.Helpers.createCard();

util.puts(JSON.stringify(card));