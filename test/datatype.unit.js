if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var _ = require('lodash');
    var faker = require('../index');
    var mersenne = require('../vendor/mersenne');
}


describe("datatype.js", function () {

    describe("number", function() {

        it("returns a random number given a maximum value as Number", function() {
            var max = 10;
            assert.ok(faker.datatype.number(max) <= max);
        });

        it("returns a random number given a maximum value as Object", function() {
            var options = { max: 10 };
            assert.ok(faker.datatype.number(options) <= options.max);
        });

        it("returns a random number given a maximum value of 0", function() {
            var options = { max: 0 };
            assert.ok(faker.datatype.number(options) === 0);
        });

        it("returns a random number given a negative number minimum and maximum value of 0", function() {
            var options = { min: -100, max: 0 };
            assert.ok(faker.datatype.number(options) <= options.max);
        });

        it("returns a random number between a range", function() {
            var options = { min: 22, max: 33 };
            for(var i = 0; i < 100; i++) {
                var randomNumber = faker.datatype.number(options);
                assert.ok(randomNumber >= options.min);
                assert.ok(randomNumber <= options.max);
            }
        });

        it("provides numbers with a given precision", function() {
            var options = { min: 0, max: 1.5, precision: 0.5 };
            var results = _.chain(_.range(50))
                .map(function() {
                    return faker.datatype.number(options);
                })
                .uniq()
                .value()
                .sort();

            assert.ok(_.includes(results, 0.5));
            assert.ok(_.includes(results, 1.0));

            assert.strictEqual(results[0], 0);
            assert.strictEqual(_.last(results), 1.5);

        });

        it("provides numbers with a with exact precision", function() {
            var options = { min: 0.5, max: 0.99, precision: 0.01 };
            for(var i = 0; i < 100; i++) {
                var number = faker.datatype.number(options);
                assert.strictEqual(number, Number(number.toFixed(2)));
            }
        });

        it("should not modify the input object", function() {
            var min = 1;
            var max = 2;
            var opts = {
                min: min,
                max: max
            };

            faker.datatype.number(opts);

            assert.strictEqual(opts.min, min);
            assert.strictEqual(opts.max, max);
        });

    });

    describe("float", function() {

        it("returns a random float with a default precision value (0.01)", function() {
            var number = faker.datatype.float();
            assert.strictEqual(number, Number(number.toFixed(2)));
        });

        it("returns a random float given a precision value", function() {
            var number = faker.datatype.float(0.001);
            assert.strictEqual(number, Number(number.toFixed(3)));
        });

        it("returns a random number given a maximum value as Object", function() {
            var options = { max: 10 };
            assert.ok(faker.datatype.float(options) <= options.max);
        });

        it("returns a random number given a maximum value of 0", function() {
            var options = { max: 0 };
            assert.ok(faker.datatype.float(options) === 0);
        });

        it("returns a random number given a negative number minimum and maximum value of 0", function() {
            var options = { min: -100, max: 0 };
            assert.ok(faker.datatype.float(options) <= options.max);
        });

        it("returns a random number between a range", function() {
            var options = { min: 22, max: 33 };
            for(var i = 0; i < 5; i++) {
                var randomNumber = faker.datatype.float(options);
                assert.ok(randomNumber >= options.min);
                assert.ok(randomNumber <= options.max);
            }
        });

        it("provides numbers with a given precision", function() {
            var options = { min: 0, max: 1.5, precision: 0.5 };
            var results = _.chain(_.range(50))
                .map(function() {
                    return faker.datatype.float(options);
                })
                .uniq()
                .value()
                .sort();

            assert.ok(_.includes(results, 0.5));
            assert.ok(_.includes(results, 1.0));

            assert.strictEqual(results[0], 0);
            assert.strictEqual(_.last(results), 1.5);

        });

        it("provides numbers with a with exact precision", function() {
            var options = { min: 0.5, max: 0.99, precision: 0.01 };
            for(var i = 0; i < 100; i++) {
                var number = faker.datatype.float(options);
                assert.strictEqual(number, Number(number.toFixed(2)));
            }
        });

        it("should not modify the input object", function() {
            var min = 1;
            var max = 2;
            var opts = {
                min: min,
                max: max
            };

            faker.datatype.float(opts);

            assert.strictEqual(opts.min, min);
            assert.strictEqual(opts.max, max);
        });
    });

    describe('date', function (){
       it('check validity of date and if returned value is created by Date()', function (){
           var date = faker.datatype.date();
           assert.ok(typeof date == 'object');
           assert.ok(!isNaN(date.getTime()));
           assert.ok(Object.prototype.toString.call(date) === "[object Date]");
       });
       it('basic test with stubed value', function (){
           var today = new Date();
           sinon.stub(faker.datatype, 'number').returns(today);
           var date = faker.datatype.date();
           assert.ok(today.valueOf() === date.valueOf());
           faker.datatype.number.restore();
       });
       it('check if date works with seeding', function (){
          faker.seed(100);
          var date = faker.datatype.date();
          var dateVal = date.valueOf();
          console.log(dateVal);
          assert.ok(dateVal === 2520186296319)
       });
    });

    describe('boolean', function() {
        it('should generate a boolean value', function() {
            var bool = faker.datatype.boolean();
            assert.ok(typeof bool == 'boolean');
        });
    });

    describe('UUID', function() {
        it('should generate a valid UUID', function() {
            var UUID = faker.datatype.uuid();
            var RFC4122 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
            assert.ok(RFC4122.test(UUID));
        });
    });

    describe('hexaDecimal', function() {
        var hexaDecimal = faker.datatype.hexaDecimal;

        it('should generate single hex character when no additional argument was provided', function() {
            var hex = hexaDecimal();
            assert.ok(hex.match(/^(0x)[0-9a-f]{1}$/i));
        });

        it('should generate a random hex string', function() {
            var hex = hexaDecimal(5);
            assert.ok(hex.match(/^(0x)[0-9a-f]+$/i));
        });
    });
});