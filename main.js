// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
// /module['exports'] = faker;
count = 3
for(let printCount =0; printCount< count ; printCount++){
    console.log('\n')
    console.log(faker.laptop.model());
    console.log(faker.laptop.fault());
    console.log(faker.laptop.company());
    console.log('\n')
}   