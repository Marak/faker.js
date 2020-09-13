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

        it("returns random alpha-3 countryCode", function () {
            sinon.spy(faker.address, 'countryCode');
            var countryCode = faker.address.countryCode("alpha-3");
            assert.ok(countryCode);
            assert.ok(faker.address.countryCode.called);
            assert.equal(countryCode.length, 3);
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

    describe("zipCodeByState()", function () {
        it("returns zipCode valid for specified State", function () {
          faker.locale = "en_US";
          var states = ["IL", "GA", "WA"];

          var zipCode1 = faker.address.zipCodeByState(states[0]);
          assert.ok(zipCode1 >= 60001);
          assert.ok(zipCode1 <= 62999);
          var zipCode2 = faker.address.zipCodeByState(states[1]);
          assert.ok(zipCode2 >= 30001);
          assert.ok(zipCode2 <= 31999);
          var zipCode3 = faker.address.zipCodeByState(states[2]);
          assert.ok(zipCode3 >= 98001);
          assert.ok(zipCode3 <= 99403);
        });

        it("returns undefined if state is invalid", function () {
            var state = "XX";
            sinon.spy(faker.address, 'zipCode');
            var zipCode = faker.address.zipCodeByState(state);
            assert.ok(faker.address.zipCode.called);
            faker.address.zipCode.restore();
        });

        it("returns undefined if state is valid but localeis invalid", function () {
            faker.locale = "zh_CN";
            var state = "IL";
            sinon.spy(faker.address, 'zipCode');
            var zipCode = faker.address.zipCodeByState(state);
            assert.ok(faker.address.zipCode.called);
            faker.address.zipCode.restore();
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

        it("returns latitude with min and max and default precision", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var latitude = faker.address.latitude(-5, 5);
                assert.ok(typeof latitude === 'string');
                assert.equal(latitude.split('.')[1].length, 4);
                var latitude_float = parseFloat(latitude);
                assert.ok(latitude_float >= -5);
                assert.ok(latitude_float <= 5);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });

        it("returns random latitude with custom precision", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var latitude = faker.address.latitude(undefined, undefined, 7);
                assert.ok(typeof latitude === 'string');
                assert.equal(latitude.split('.')[1].length, 7);
                var latitude_float = parseFloat(latitude);
                assert.ok(latitude_float >= -180);
                assert.ok(latitude_float <= 180);
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

        it("returns random longitude with min and max and default precision", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var longitude = faker.address.longitude(100, -30);
                assert.ok(typeof longitude === 'string');
                assert.equal(longitude.split('.')[1].length, 4);
                var longitude_float = parseFloat(longitude);
                assert.ok(longitude_float >= -30);
                assert.ok(longitude_float <= 100);
                assert.ok(faker.random.number.called);
                faker.random.number.restore();
            }
        });

        it("returns random longitude with custom precision", function () {
            for (var i = 0; i < 100; i++) {
                sinon.spy(faker.random, 'number');
                var longitude = faker.address.longitude(undefined, undefined, 7);
                assert.ok(typeof longitude === 'string');
                assert.equal(longitude.split('.')[1].length, 7);
                var longitude_float = parseFloat(longitude);
                assert.ok(longitude_float >= -180);
                assert.ok(longitude_float <= 180);
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

        it("returns abbreviation when useAbbr is false", function () {
            sinon.stub(faker.address, 'direction').returns('N');
            var direction = faker.address.direction(false);
            assert.equal(direction, 'N');
            faker.address.direction.restore();
        })

        it("returns abbreviation when useAbbr is true", function () {
            var direction = faker.address.direction(true);
            assert.equal(typeof direction, 'string');
            assert.equal(direction.length <= 2, true);
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

        it("returns abbreviation when useAbbr is true", function () {
            var ordinalDirection = faker.address.ordinalDirection(true);
            assert.equal(typeof ordinalDirection, 'string');
            assert.equal(ordinalDirection.length <= 2, true);
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

        it("returns abbreviation when useAbbr is true", function () {
            var cardinalDirection = faker.address.cardinalDirection(true);
            assert.equal(typeof cardinalDirection, 'string');
            assert.equal(cardinalDirection.length <= 2, true);
        })

    })

    describe("nearbyGPSCoordinate()", function () {
        it("returns random gps coordinate within a distance of another one", function () {
            function haversine(lat1, lon1, lat2, lon2, isMetric) {
                function degreesToRadians(degrees) {
                    return degrees * (Math.PI/180.0);
                }
                function kilometersToMiles(miles) {
                    return miles * 0.621371;
                }
                var R = 6378.137;
                var dLat = degreesToRadians(lat2-lat1);
                var dLon = degreesToRadians(lon2-lon1);
                var a = Math.sin(dLat/2) * Math.sin(dLat/2)
                    + Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2))
                    * Math.sin(dLon/2) * Math.sin(dLon/2);
                var distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

                return isMetric ? distance : kilometersToMiles(distance);
            }
            for (var i = 0; i < 10000; i++) {
                var latFloat1 = parseFloat(faker.address.latitude());
                var lonFloat1 = parseFloat(faker.address.longitude());
                var radius = (Math.random() * 99) + 1; // range of [1, 100)
                var isMetric = (Math.round(Math.random()) == 1);

                var coordinate = faker.address.nearbyGPSCoordinate([latFloat1, lonFloat1], radius, isMetric);
                assert.ok(coordinate.length === 2);
                assert.ok(typeof coordinate[0] === 'string');
                assert.ok(typeof coordinate[1] === 'string');

                var latFloat2 = parseFloat(coordinate[0]);
                assert.ok(latFloat2 >= -90.0);
                assert.ok(latFloat2 <= 90.0);

                var lonFloat2 = parseFloat(coordinate[1]);
                assert.ok(lonFloat2 >= -180.0);
                assert.ok(lonFloat2 <= 180.0);

                // Due to floating point math, and constants that are not extremely precise,
                // returned points will not be strictly within the given radius of the input
                // coordinate. Using a error of 1.0 to compensate.
                var error = 1.0;
                var actualDistance = haversine(latFloat1, lonFloat1, latFloat2, lonFloat2, isMetric);
                assert.ok(actualDistance <= (radius + error));
            }

            // test once with undefined radius
            var coordinate = faker.address.nearbyGPSCoordinate([latFloat1, lonFloat1], undefined, isMetric);
            assert.ok(coordinate.length === 2);
            assert.ok(typeof coordinate[0] === 'string');
            assert.ok(typeof coordinate[1] === 'string');

        });
    });

    describe("timeZone()", function () {
        it("returns random timeZone", function () {
            sinon.spy(faker.address, 'timeZone');
            var timeZone = faker.address.timeZone();
            assert.ok(timeZone);
            assert.ok(faker.address.timeZone.called);
            faker.address.timeZone.restore();
        });
    });

});
