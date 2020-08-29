var Faker = require('../lib');
var faker = new Faker({ locale: 'hr', localeFallback: 'en' });
faker.locales['hr'] = require('../lib/locales/hr');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
