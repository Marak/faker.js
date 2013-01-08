if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("phone_number.js", function () {
    describe("phoneNumber()", function () {
        it("returns a random phoneNumber with a random format", function () {
            sinon.spy(Faker.random, 'phone_formats');
            sinon.spy(Faker.Helpers, 'replaceSymbolWithNumber');
            var phone_number = Faker.PhoneNumber.phoneNumber();

            assert.ok(phone_number.match(/\d/));
            assert.ok(Faker.random.phone_formats.called);
            assert.ok(Faker.Helpers.replaceSymbolWithNumber.called);

            Faker.random.phone_formats.restore();
            Faker.Helpers.replaceSymbolWithNumber.restore();
        });
    });

    describe("phoneNumberFormat()", function () {
        it("returns phone number with requested format (Array index)", function () {
            var phone_number = Faker.PhoneNumber.phoneNumberFormat(5);
            assert.ok(phone_number.match(/\(\d\d\d\)\d\d\d-\d\d\d\d/));
        });
    });
});
