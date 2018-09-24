var Faker = require('../lib');
var faker = new Faker({ locale: 'nl_BE', localeFallback: 'en' });
faker.locales['nl_BE'] = require('../lib/locales/nl_BE');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
