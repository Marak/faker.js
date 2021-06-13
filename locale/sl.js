var Faker = require('../lib');
var faker = new Faker({ locale: 'sl', localeFallback: 'en' });
faker.locales['sl'] = require('../lib/locales/sl');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
