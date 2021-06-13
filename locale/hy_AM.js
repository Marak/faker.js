var Faker = require('../lib');
var faker = new Faker({ locale: 'hy_AM', localeFallback: 'en' });
faker.locales['hy_AM'] = require('../lib/locales/hy_AM');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;

