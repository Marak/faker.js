var Faker = require('../lib');
var faker = new Faker({ locale: 'th', localeFallback: 'en' });
faker.locales['th'] = require('../lib/locales/th');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
