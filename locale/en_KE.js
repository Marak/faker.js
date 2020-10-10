var Faker = require('../lib');
var faker = new Faker({ locale: 'en_KE', localeFallback: 'en' });
faker.locales['en_KE'] = require('../lib/locales/en_KE');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
