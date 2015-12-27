// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');

function makeNewInstance() {
  return new Faker({ locales: require('./lib/locales') });
}

var faker = makeNewInstance();
faker.makeNewInstance = makeNewInstance;
module['exports'] = faker;
