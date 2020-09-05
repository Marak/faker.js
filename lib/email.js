/**
 *
 * @namespace faker.email
 */

var Email = function(faker) {
    var self = this;

    self.closing = function() {
        return faker.random.arrayElement(faker.definitions.email.closing);
    };

    self.salutation = function() {
        return faker.random.arrayElement(faker.definitions.email.salutation);
    };

    return self;
};

module['exports'] = Email;
