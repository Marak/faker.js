if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("phone_number.js", function () {
    describe("phoneNumber()", function () {
        it("returns a random phoneNumber with a random format", function () {
            sinon.spy(faker.random, 'phone_formats');
            sinon.spy(faker.Helpers, 'replaceSymbolWithNumber');
            var phone_number = faker.PhoneNumber.phoneNumber();

            assert.ok(phone_number.match(/\d/));
            assert.ok(faker.random.phone_formats.called);
            assert.ok(faker.Helpers.replaceSymbolWithNumber.called);

            faker.random.phone_formats.restore();
            faker.Helpers.replaceSymbolWithNumber.restore();
        });
    });

    describe("phoneNumberFormat()", function () {
        it("returns phone number with requested format (Array index)", function () {
            for (var i = 0; i < 10; i++) {
              var phone_number = faker.PhoneNumber.phoneNumberFormat(5);
              assert.ok(phone_number.match(/\(\d\d\d\)\d\d\d-\d\d\d\d/));
            }
        });
    });

    describe("phoneCode()", function () {
        it("returns a phone code with a format +xx", function () {
            var phone_code = faker.PhoneNumber.phoneCode();
            assert.ok(phone_code.match(/^\+\d{1,3}$/));
        });
    });
});
