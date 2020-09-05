if (typeof module !== 'undefined') {
    var assert = require('assert');
    var faker = require('../index');
}

describe('email.js', function() {
    describe('salutation()', function() {
        it('returns a random value from email.salutation array', function() {
            var salutation = faker.email.salutation();

            assert.ok(faker.definitions.email.salutation.indexOf(salutation) !== -1);
        });
    });

    describe('closing()', function() {
        it('returns a random value from email.closing array', function() {
            var closing = faker.email.closing();
            console.log('closing', closing);

            assert.ok(faker.definitions.email.closing.indexOf(closing) !== -1);
        });
    });
});
