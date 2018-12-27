var Faker = require('../lib');
var faker = new Faker({ locale: 'fr_CH', localeFallback: 'fr' });
faker.locales['fr_CH'] = require('../lib/locales/fr_CH');
faker.locales['fr'] = require('../lib/locales/fr');
module['exports'] = faker;
