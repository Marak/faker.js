if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("airport.js", function () {
  describe("name()", function () {
      it("returns a random international airport", function () {
          sinon.stub(faker.airport, 'name').returns('Los Angeles International Airport');
          var airport = faker.airport.name();

          assert.equal(airport, 'Los Angeles International Airport');
          faker.airport.name.restore();
      });
  });

  describe("iataCode()", function () {
      it("returns random IATA code", function () {
        var iataCode = faker.airport.iataCode();
        assert.ok(iataCode.match(/^[A-Z]{3}$/));
      });
  });

  describe("icaoCode()", function () {
      it("returns random ICAO code", function () {
        var icaoCode = faker.airport.icaoCode();
        assert.ok(icaoCode.match(/^[A-Z]{2}$/));
      });
  });
});
