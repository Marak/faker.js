if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("address.js", function () {
    describe("city()", function () {
        beforeEach(function () {
            sinon.spy(faker.random, 'city_prefix');
            sinon.spy(faker.random, 'first_name');
            sinon.spy(faker.random, 'last_name');
            sinon.spy(faker.random, 'city_suffix');
        });

        afterEach(function () {
            faker.random.number.restore();
            faker.random.city_prefix.restore();
            faker.random.first_name.restore();
            faker.random.last_name.restore();
            faker.random.city_suffix.restore();
        });

        it("occasionally returns prefix + first name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(0);

            var city = faker.Address.city();
            assert.ok(city);

            assert.ok(faker.random.city_prefix.calledOnce);
            assert.ok(faker.random.first_name.calledOnce);
            assert.ok(faker.random.city_suffix.calledOnce);
        });

        it("occasionally returns prefix + first name", function () {
            sinon.stub(faker.random, 'number').returns(1);

            var city = faker.Address.city();
            assert.ok(city);

            assert.ok(faker.random.city_prefix.calledOnce);
            assert.ok(faker.random.first_name.calledOnce);
            assert.ok(!faker.random.city_suffix.called);
        });

        it("occasionally returns first name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(2);

            var city = faker.Address.city();
            assert.ok(city);

            assert.ok(!faker.random.city_prefix.called);
            assert.ok(faker.random.first_name.calledOnce);
            assert.ok(faker.random.city_suffix.calledOnce);
        });

        it("occasionally returns last name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(3);

            var city = faker.Address.city();
            assert.ok(city);

            assert.ok(!faker.random.city_prefix.called);
            assert.ok(!faker.random.first_name.called);
            assert.ok(faker.random.last_name.calledOnce);
            assert.ok(faker.random.city_suffix.calledOnce);
        });
    });

    describe("streetName()", function () {
        beforeEach(function () {
            sinon.spy(faker.random, 'first_name');
            sinon.spy(faker.random, 'last_name');
            sinon.spy(faker.random, 'street_suffix');
        });

        afterEach(function () {
            faker.random.number.restore();
            faker.random.first_name.restore();
            faker.random.last_name.restore();
            faker.random.street_suffix.restore();
        });

        it("occasionally returns last name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(0);

            var street_name = faker.Address.streetName();
            assert.ok(street_name);

            assert.ok(!faker.random.first_name.called);
            assert.ok(faker.random.last_name.calledOnce);
            assert.ok(faker.random.street_suffix.calledOnce);
        });

        it("occasionally returns first name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(1);

            var street_name = faker.Address.streetName();
            assert.ok(street_name);

            assert.ok(faker.random.first_name.calledOnce);
            assert.ok(!faker.random.last_name.called);
            assert.ok(faker.random.street_suffix.calledOnce);
        });
    });

    describe("streetAddress()", function () {
        beforeEach(function () {
            sinon.spy(faker.Address, 'streetName');
            sinon.spy(faker.Address, 'secondaryAddress');
        });

        afterEach(function () {
            faker.Address.streetName.restore();
            faker.Address.secondaryAddress.restore();
        });

        it("occasionally returns a 5-digit street number", function () {
            sinon.stub(faker.random, 'number').returns(0);
            var address = faker.Address.streetAddress();
            var parts = address.split(' ');

            assert.equal(parts[0].length, 5);
            assert.ok(faker.Address.streetName.called);

            faker.random.number.restore();
        });

        it("occasionally returns a 4-digit street number", function () {
            sinon.stub(faker.random, 'number').returns(1);
            var address = faker.Address.streetAddress();
            var parts = address.split(' ');

            assert.equal(parts[0].length, 4);
            assert.ok(faker.Address.streetName.called);

            faker.random.number.restore();
        });

        it("occasionally returns a 3-digit street number", function () {
            sinon.stub(faker.random, 'number').returns(2);
            var address = faker.Address.streetAddress();
            var parts = address.split(' ');

            assert.equal(parts[0].length, 3);
            assert.ok(faker.Address.streetName.called);
            assert.ok(!faker.Address.secondaryAddress.called);

            faker.random.number.restore();
        });

        context("when useFulladdress is true", function () {
            it("adds a secondary address to the result", function () {
                var address = faker.Address.streetAddress(true);
                var parts = address.split(' ');

                assert.ok(faker.Address.secondaryAddress.called);
            });
        });
    });

    describe("secondaryAddress()", function () {
        it("randomly chooses an Apt or Suite number", function () {
            sinon.spy(faker.random, 'array_element');

            var address = faker.Address.secondaryAddress();

            var expected_array = [
                'Apt. ###',
                'Suite ###'
            ];

            assert.ok(address);
            assert.ok(faker.random.array_element.calledWith(expected_array));
            faker.random.array_element.restore();
        });
    });

    describe("brState()", function () {
        beforeEach(function () {
            sinon.spy(faker.random, 'br_state_abbr');
            sinon.spy(faker.random, 'br_state');
        });

        afterEach(function () {
            faker.random.br_state_abbr.restore();
            faker.random.br_state.restore();
        });

        context("when useAbbr is true", function () {
            it("returns a br_state_abbr", function () {
                var state = faker.Address.brState(true);

                assert.ok(state);
                assert.ok(faker.random.br_state_abbr.called);
                assert.ok(!faker.random.br_state.called);
            });
        });

        context("when useAbbr is not set", function () {
            it("returns a br_state", function () {
                var state = faker.Address.brState();

                assert.ok(state);
                assert.ok(!faker.random.br_state_abbr.called);
                assert.ok(faker.random.br_state.called);
            });
        });
    });

    describe("ukCounty()", function () {
        it("returns random uk_county", function () {
            sinon.spy(faker.random, 'uk_county');
            var county = faker.Address.ukCounty();
            assert.ok(county);
            assert.ok(faker.random.uk_county.called);
            faker.random.uk_county.restore();
        });
    });

    describe("ukCountry()", function () {
        it("returns random uk_country", function () {
            sinon.spy(faker.random, 'uk_country');
            var country = faker.Address.ukCountry();
            assert.ok(country);
            assert.ok(faker.random.uk_country.called);
            faker.random.uk_country.restore();
        });
    });

    describe("usState()", function () {
        beforeEach(function () {
            sinon.spy(faker.random, 'us_state_abbr');
            sinon.spy(faker.random, 'us_state');
        });

        afterEach(function () {
            faker.random.us_state_abbr.restore();
            faker.random.us_state.restore();
        });

        context("when useAbus is true", function () {
            it("returns a us_state_abbr", function () {
                var state = faker.Address.usState(true);

                assert.ok(state);
                assert.ok(faker.random.us_state_abbr.called);
                assert.ok(!faker.random.us_state.called);
            });
        });

        context("when useAbus is not set", function () {
            it("returns a us_state", function () {
                var state = faker.Address.usState();

                assert.ok(state);
                assert.ok(!faker.random.us_state_abbr.called);
                assert.ok(faker.random.us_state.called);
            });
        });
    });

    describe("latitude()", function () {
        it("returns random latitude", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var latitude = faker.Address.latitude();
                assert.ok(typeof latitude === 'string');
                var latitude_float = parseFloat(latitude);
                assert.ok(latitude_float >= -90.0);
                assert.ok(latitude_float <= 90.0);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });
    });

    describe("longitude()", function () {
        it("returns random longitude", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var longitude = faker.Address.longitude();
                assert.ok(typeof longitude === 'string');
                var longitude_float = parseFloat(longitude);
                assert.ok(longitude_float >= -180.0);
                assert.ok(longitude_float <= 180.0);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });
    });

});
