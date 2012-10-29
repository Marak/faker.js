#!/usr/bin/env node

var util = require('util');

var Faker = require('../Faker');

var card = Faker.Helpers.createCard();

util.puts(JSON.stringify(card));