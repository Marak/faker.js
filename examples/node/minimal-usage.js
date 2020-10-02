#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "fi";

//console.log(faker.lorem.sentences())

console.log(faker.name.findName())
return;
//console.log(faker.address)
console.log(faker.internet.email())
console.log(faker.date.recent())
console.log(faker.helpers.contextualCard());

faker.locale = "uk";

console.log(faker.helpers.contextualCard());