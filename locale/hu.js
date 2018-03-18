var Faker = require('../lib');
var faker = new Faker({ locale: 'hu', localeFallback: 'en' });
faker.locales['hu'] = require('../lib/locales/hu');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
