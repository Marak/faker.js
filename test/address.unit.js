if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("address.js", function () {
    describe("city()", function () {
        beforeEach(function () {
            sinon.spy(faker.address, 'cityPrefix');
            sinon.spy(faker.name, 'firstName');
            sinon.spy(faker.name, 'lastName');
            sinon.spy(faker.address, 'citySuffix');
        });

        afterEach(function () {
            faker.random.number.restore();
            faker.address.cityPrefix.restore();
            faker.name.firstName.restore();
            faker.name.lastName.restore();
            faker.address.citySuffix.restore();
        });

        it("occasionally returns prefix + first name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(0);

            var city = faker.address.city();
            assert.ok(city);

            assert.ok(faker.address.cityPrefix.calledOnce);
            assert.ok(faker.name.firstName.calledOnce);
            assert.ok(faker.address.citySuffix.calledOnce);
        });

        it("occasionally returns prefix + first name", function () {
            sinon.stub(faker.random, 'number').returns(1);

            var city = faker.address.city();
            assert.ok(city);

            assert.ok(faker.address.cityPrefix.calledOnce);
            assert.ok(faker.name.firstName.calledOnce);
        });

        it("occasionally returns first name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(2);

            var city = faker.address.city();
            assert.ok(city);

            assert.ok(faker.address.citySuffix.calledOnce);
        });

        it("occasionally returns last name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(3);

            var city = faker.address.city();
            assert.ok(city);

            assert.ok(!faker.address.cityPrefix.called);
            assert.ok(!faker.name.firstName.called);
            assert.ok(faker.name.lastName.calledOnce);
            assert.ok(faker.address.citySuffix.calledOnce);
        });
    });


    describe("streetName()", function () {
        beforeEach(function () {
            sinon.spy(faker.name, 'firstName');
            sinon.spy(faker.name, 'lastName');
            sinon.spy(faker.address, 'streetSuffix');
        });

        afterEach(function () {
            faker.name.firstName.restore();
            faker.name.lastName.restore();
            faker.address.streetSuffix.restore();
        });

        it("occasionally returns last name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(0);

            var street_name = faker.address.streetName();
            assert.ok(street_name);
            assert.ok(!faker.name.firstName.called);
            assert.ok(faker.name.lastName.calledOnce);
            assert.ok(faker.address.streetSuffix.calledOnce);

            faker.random.number.restore();
        });

        it("occasionally returns first name + suffix", function () {
            sinon.stub(faker.random, 'number').returns(1);

            var street_name = faker.address.streetName();
            assert.ok(street_name);

            assert.ok(faker.name.firstName.calledOnce);
            assert.ok(!faker.name.lastName.called);
            assert.ok(faker.address.streetSuffix.calledOnce);

            faker.random.number.restore();
        });

        it("trims trailing whitespace from the name", function() {
            faker.address.streetSuffix.restore();

            sinon.stub(faker.address, 'streetSuffix').returns("")
            var street_name = faker.address.streetName();
            assert.ok(!street_name.match(/ $/));
        });
    });



    describe("streetAddress()", function () {
        beforeEach(function () {
            sinon.spy(faker.address, 'streetName');
            sinon.spy(faker.address, 'secondaryAddress');
        });

        afterEach(function () {
            faker.address.streetName.restore();
            faker.address.secondaryAddress.restore();
        });

        it("occasionally returns a 5-digit street number", function () {
            sinon.stub(faker.random, 'number').returns(0);
            var address = faker.address.streetAddress();
            var parts = address.split(' ');

            assert.equal(parts[0].length, 5);
            assert.ok(faker.address.streetName.called);

            faker.random.number.restore();
        });

        it("occasionally returns a 4-digit street number", function () {
            sinon.stub(faker.random, 'number').returns(1);
            var address = faker.address.streetAddress();
            var parts = address.split(' ');

            assert.equal(parts[0].length, 4);
            assert.ok(faker.address.streetName.called);

            faker.random.number.restore();
        });

        it("occasionally returns a 3-digit street number", function () {
            sinon.stub(faker.random, 'number').returns(2);
            var address = faker.address.streetAddress();
            var parts = address.split(' ');

            assert.equal(parts[0].length, 3);
            assert.ok(faker.address.streetName.called);
            assert.ok(!faker.address.secondaryAddress.called);

            faker.random.number.restore();
        });

        context("when useFulladdress is true", function () {
            it("adds a secondary address to the result", function () {
                var address = faker.address.streetAddress(true);
                var parts = address.split(' ');

                assert.ok(faker.address.secondaryAddress.called);
            });
        });
    });


    describe("secondaryAddress()", function () {
        it("randomly chooses an Apt or Suite number", function () {
            sinon.spy(faker.random, 'arrayElement');

            var address = faker.address.secondaryAddress();

            var expected_array = [
                'Apt. ###',
                'Suite ###'
            ];

            assert.ok(address);
            assert.ok(faker.random.arrayElement.calledWith(expected_array));
            faker.random.arrayElement.restore();
        });
    });

    describe("county()", function () {
        it("returns random county", function () {
            sinon.spy(faker.address, 'county');
            var county = faker.address.county();
            assert.ok(county);
            assert.ok(faker.address.county.called);
            faker.address.county.restore();
        });
    });

    describe("country()", function () {
        it("returns random country", function () {
            sinon.spy(faker.address, 'country');
            var country = faker.address.country();
            assert.ok(country);
            assert.ok(faker.address.country.called);
            faker.address.country.restore();
        });
    });

    describe("countryCode()", function () {
        it("returns random countryCode", function () {
            sinon.spy(faker.address, 'countryCode');
            var countryCode = faker.address.countryCode();
            assert.ok(countryCode);
            assert.ok(faker.address.countryCode.called);
            faker.address.countryCode.restore();
        });
    });

    describe("state()", function () {
        it("returns random state", function () {
            sinon.spy(faker.address, 'state');
            var state = faker.address.state();
            assert.ok(state);
            assert.ok(faker.address.state.called);
            faker.address.state.restore();
        });
    });

    describe("zipCode()", function () {
        it("returns random zipCode", function () {
            sinon.spy(faker.address, 'zipCode');
            var zipCode = faker.address.zipCode();
            assert.ok(zipCode);
            assert.ok(faker.address.zipCode.called);
            faker.address.zipCode.restore();
        });

        it("returns random zipCode - user specified format", function () {
            var zipCode = faker.address.zipCode("?#? #?#");
            assert.ok(zipCode.match(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/));
            // try another format
            zipCode = faker.address.zipCode("###-###");
            assert.ok(zipCode.match(/^\d{3}-\d{3}$/));
        });

        it("returns zipCode with proper locale format", function () {
            // we'll use the en_CA locale..
            faker.locale = "en_CA";
            var zipCode = faker.address.zipCode();
            assert.ok(zipCode.match(/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/));
        });
    });

    describe("latitude()", function () {
        it("returns random latitude", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var latitude = faker.address.latitude();
                assert.ok(typeof latitude === 'string');
                var latitude_float = parseFloat(latitude);
                assert.ok(latitude_float >= -90.0);
                assert.ok(latitude_float <= 90.0);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });

        it("returns latitude with min and max", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var latitude = faker.address.latitude(-5, 5);
                assert.ok(typeof latitude === 'string');
                var latitude_float = parseFloat(latitude);
                assert.ok(latitude_float >= -5);
                assert.ok(latitude_float <= 5);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });
    });

    describe("longitude()", function () {
        it("returns random longitude", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var longitude = faker.address.longitude();
                assert.ok(typeof longitude === 'string');
                var longitude_float = parseFloat(longitude);
                assert.ok(longitude_float >= -180.0);
                assert.ok(longitude_float <= 180.0);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });

        it("returns random longitude with min and max", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var longitude = faker.address.longitude(100, -30);
                assert.ok(typeof longitude === 'string');
                var longitude_float = parseFloat(longitude);
                assert.ok(longitude_float >= -30);
                assert.ok(longitude_float <= 100);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });
    });

    describe("direction()", function () {
        it("returns random direction", function () {
            sinon.stub(faker.address, 'direction').returns('North');
            var direction = faker.address.direction();

            assert.equal(direction, 'North');
            faker.address.direction.restore();
        })

        it("returns abbreviation when useAbbr is true", function () {
            sinon.stub(faker.address, 'direction').returns('N');
            var direction = faker.address.direction(true);

            assert.equal(direction, 'N');
            faker.address.direction.restore();
        })
    })

    describe("ordinalDirection()", function () {
        it("returns random ordinal direction", function () {
            sinon.stub(faker.address, 'ordinalDirection').returns('West');
            var ordinalDirection = faker.address.ordinalDirection();

            assert.equal(ordinalDirection, 'West');
            faker.address.ordinalDirection.restore();
        })

        it("returns abbreviation when useAbbr is true", function () {
            sinon.stub(faker.address, 'ordinalDirection').returns('W');
            var ordinalDirection = faker.address.ordinalDirection(true);

            assert.equal(ordinalDirection, 'W');
            faker.address.ordinalDirection.restore();
        })
    })

    describe("cardinalDirection()", function () {
        it("returns random cardinal direction", function () {
            sinon.stub(faker.address, 'cardinalDirection').returns('Northwest');
            var cardinalDirection = faker.address.cardinalDirection();

            assert.equal(cardinalDirection, 'Northwest');
            faker.address.cardinalDirection.restore();
        })

        it("returns abbreviation when useAbbr is true", function () {
            sinon.stub(faker.address, 'cardinalDirection').returns('NW');
            var cardinalDirection = faker.address.cardinalDirection(true);

            assert.equal(cardinalDirection, 'NW');
            faker.address.cardinalDirection.restore();
        })
    })
});
