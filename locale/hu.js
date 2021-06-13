var Faker = require('../lib');
var faker = new Faker({ locale: 'hu', localeFallback: 'hu' });
faker.locales['hu'] = require('../lib/locales/hu');
faker.locales['hu'] = require('../lib/locales/hu');
module['exports'] = faker;
