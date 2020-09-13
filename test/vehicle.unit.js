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

          assert.equal(vehicle, 'Ford Explorer');
          faker.vehicle.vehicle.restore();
      });
  });

  describe("manufacturer()", function () {
      it("returns random manufacturer", function () {
          sinon.stub(faker.vehicle, 'manufacturer').returns('Porsche');
          var manufacturer = faker.vehicle.manufacturer();

          assert.equal(manufacturer, 'Porsche');
          faker.vehicle.manufacturer.restore();
      });
  });

  describe("type()", function () {
    it("returns random vehicle type", function () {
      sinon.stub(faker.vehicle, 'type').returns('Minivan');
          var type = faker.vehicle.type();

          assert.equal(type, 'Minivan');
          faker.vehicle.type.restore();
      });
  });

  describe("fuel()", function () {
      it("returns a fuel type", function () {
          sinon.stub(faker.vehicle, 'fuel').returns('Hybrid');
          var fuel = faker.vehicle.fuel();

          assert.equal(fuel, 'Hybrid');
          faker.vehicle.fuel.restore();
      });
  });

  describe("vin()", function () {
      it("returns valid vin number", function () {
        var vin = faker.vehicle.vin();
        assert.ok(vin.match(/^[A-Z0-9]{10}[A-Z]{1}[A-Z0-9]{1}\d{5}$/));
      });
  });

  describe("color()", function () {
      it("returns a random color", function () {
          sinon.stub(faker.vehicle, 'color').returns('black');
          var color = faker.vehicle.color();

          assert.equal(color, 'black');
          faker.vehicle.color.restore();
      });
  });
});
