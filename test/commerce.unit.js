if (typeof module !== 'undefined') {
    var assert = require('assert'),
        sinon = require('sinon'),
        faker = require('../index');
}

describe("commerce.js", function() {

  describe("color()", function() {
      it("returns random value from commerce.color array", function() {
          var color = faker.commerce.color();
          assert.ok(faker.definitions.commerce.color.indexOf(color) !== -1);
      });
  });

  describe("department(max, fixedValue)", function() {

    it("should use the default amounts when not passing arguments", function() {
        var department = faker.commerce.department();
        assert.ok(department.split(" ").length === 1);
    });

    /*

    it("should return only one value if we specify a maximum of one", function() {
        sinon.spy(faker.random, 'arrayElement');

        var department = faker.commerce.department(1);

        assert.strictEqual(department.split(" ").length, 1);
        assert.ok(faker.random.arrayElement.calledOnce);

        faker.random.arrayElement.restore();
    });

    it("should return the maxiumum value if we specify the fixed value", function() {
        sinon.spy(faker.random, 'arrayElement');

        var department = faker.commerce.department(5, true);

        console.log(department);

        // account for the separator
        assert.strictEqual(department.split(" ").length, 6);
        // Sometimes it will generate duplicates that aren't used in the final string,
        // so we check if arrayElement has been called exactly or more than 5 times
        assert.ok(faker.random.arrayElement.callCount >= 5);

        faker.random.arrayElement.restore();
    });
    */
  });

  describe("productName()", function() {
      it("returns name comprising of an adjective, material and product", function() {
          sinon.spy(faker.random, 'arrayElement');
          sinon.spy(faker.commerce, 'productAdjective');
          sinon.spy(faker.commerce, 'productMaterial');
          sinon.spy(faker.commerce, 'product');
          var name = faker.commerce.productName();

          assert.ok(name.split(' ').length >= 3);
          assert.ok(faker.random.arrayElement.calledThrice);
          assert.ok(faker.commerce.productAdjective.calledOnce);
          assert.ok(faker.commerce.productMaterial.calledOnce);
          assert.ok(faker.commerce.product.calledOnce);

          faker.random.arrayElement.restore();
          faker.commerce.productAdjective.restore();
          faker.commerce.productMaterial.restore();
          faker.commerce.product.restore();
      });
  });

  describe("price(min, max, dec, symbol)", function() {
    it("should use the default amounts when not passing arguments", function() {
        var price = faker.commerce.price();

        assert.ok(price);
        assert.equal((price > 0), true, "the amount should be greater than 0");
        assert.equal((price < 1001), true, "the amount should be less than 1000");
    });

    it("should use the default decimal location when not passing arguments", function() {
        var price = faker.commerce.price();

        var decimal = ".";
        var expected = price.length - 3;
        var actual = price.indexOf(decimal);

        assert.equal(actual, expected, "The expected location of the decimal is " + expected + " but it was " + actual + " amount " + price);
    });

    it("should not include a currency symbol by default", function () {

        var amount = faker.commerce.price();

        var regexp = new RegExp(/[0-9.]/);

        var expected = true;
        var actual = regexp.test(amount);

        assert.equal(actual, expected, 'The expected match should not include a currency symbol');
    });

    it("it should handle negative amounts, but return 0", function () {

        var amount = faker.commerce.price(-200, -1);

        assert.ok(amount);
        assert.equal((amount == 0.00), true, "the amount should equal 0");
    });

    it("it should handle argument dec", function () {

        var price = faker.commerce.price(100, 100, 1);

        assert.ok(price);
        assert.strictEqual(price , '100.0', "the price should be equal 100.0");
    });

    it("it should handle argument dec = 0", function () {

        var price = faker.commerce.price(100, 100, 0);

        assert.ok(price);
        assert.strictEqual(price , '100', "the price should be equal 100");
    });

  });

});
