if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("vehicle.js", function () {
  describe("vehicle()", function () {
    it("returns a random vehicle", function () {
      sinon.stub(faker.vehicle, 'vehicle').returns('Ford Explorer');
      var vehicle = faker.vehicle.vehicle();

      assert.strictEqual(vehicle, 'Ford Explorer');
      faker.vehicle.vehicle.restore();
    });
  });

  describe("manufacturer()", function () {
    it("returns random manufacturer", function () {
      sinon.stub(faker.vehicle, 'manufacturer').returns('Porsche');
      var manufacturer = faker.vehicle.manufacturer();

      assert.strictEqual(manufacturer, 'Porsche');
      faker.vehicle.manufacturer.restore();
    });
  });

  describe("type()", function () {
    it("returns random vehicle type", function () {
      sinon.stub(faker.vehicle, 'type').returns('Minivan');
      var type = faker.vehicle.type();

      assert.strictEqual(type, 'Minivan');
      faker.vehicle.type.restore();
    });
  });

  describe("fuel()", function () {
    it("returns a fuel type", function () {
      sinon.stub(faker.vehicle, 'fuel').returns('Hybrid');
      var fuel = faker.vehicle.fuel();

      assert.strictEqual(fuel, 'Hybrid');
      faker.vehicle.fuel.restore();
    });
  });

  describe("vin()", function () {
    it("returns valid vin number", function () {
      var vin = faker.vehicle.vin();
      assert.ok(vin.match(/^([A-HJ-NPR-Z0-9]{10}[A-HJ-NPR-Z0-9]{1}[A-HJ-NPR-Z0-9]{1}\d{5})$/));
    });
  });

  describe("color()", function () {
    it("returns a random color", function () {
      sinon.stub(faker.vehicle, 'color').returns('black');
      var color = faker.vehicle.color();

      assert.strictEqual(color, 'black');
      faker.vehicle.color.restore();
    });
  });

  describe("vrm()", function () {
    it("returns a random vrm", function () {
      sinon.stub(faker.vehicle, 'vrm').returns('MF59EEW');
      var vrm = faker.vehicle.vrm();

      assert.equal(vrm, 'MF59EEW');
      faker.vehicle.vrm.restore();
    });
  });

  describe("bicycle()", function () {
    it("returns a random type of bicycle", function () {
      sinon.stub(faker.vehicle, 'bicycle').returns('Adventure Road Bicycle');
      var bicycle = faker.vehicle.bicycle();

      assert.equal(bicycle, 'Adventure Road Bicycle');
      faker.vehicle.bicycle.restore();
    });
  });
});
