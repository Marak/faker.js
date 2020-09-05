if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("star_wars.js", function () {
  describe("character()", function () {
      it("returns a random character", function () {
          sinon.stub(faker.starWars, 'character').returns('Chewbacca');
          var character = faker.starWars.character();

          assert.equal(character, 'Chewbacca');
          faker.starWars.character.restore();
      });
  });

  describe("droid()", function () {
    it("returns a random droid", function () {
    sinon.stub(faker.starWars, 'droid').returns('IG-88');
          var droid = faker.starWars.droid();

          assert.equal(droid, 'IG-88');
          faker.starWars.droid.restore();
      });
  });

  describe("planet()", function () {
    it("returns a random planet", function () {
      sinon.stub(faker.starWars, 'planet').returns('Tatooine');
          var planet = faker.starWars.planet();

          assert.equal(planet, 'Tatooine');
          faker.starWars.planet.restore();
      });
  });

  describe("species()", function () {
      it("returns a random species", function () {
          sinon.stub(faker.starWars, 'species').returns('Jawa');
          var species = faker.starWars.species();

          assert.equal(species, 'Jawa');
          faker.starWars.species.restore();
      });
  });

  describe("vehicle()", function () {
      it("returns a random vehicle", function () {
        sinon.stub(faker.starWars, 'vehicle').returns('Millennium Falcon');
        var vehicle = faker.starWars.vehicle();

        assert.equal(vehicle, 'Millennium Falcon');
        faker.starWars.vehicle.restore();
      });
  });

  describe("quote()", function () {
      it("returns a random quote", function () {
          sinon.stub(faker.starWars, 'quote').returns('Judge me by my size, do you?');
          var quote = faker.starWars.quote();

          assert.equal(quote, 'Judge me by my size, do you?');
          faker.starWars.quote.restore();
      });
  });

  describe("wookiee()", function () {
      it("returns a random wookiee word", function () {
          sinon.stub(faker.starWars, 'wookiee').returns('gwyaaaag');
          var wookiee = faker.starWars.wookiee();

          assert.equal(wookiee, 'gwyaaaag');
          faker.starWars.wookiee.restore();
      });
  });
});
