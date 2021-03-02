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

       //@TODO make seeding work exactly, not only on Dates (not Times)
       it('check if date works with seeding', function (){
          faker.seed(100);
          var date = faker.datatype.date();
          var dateVal = date.valueOf();
          console.log(dateVal);
          assert.ok(dateVal === 2520186296319)
       });
    });

    describe('string', function() {
        it('should generate a string value', function() {
            var generateString = faker.datatype.string();
            assert.ok(typeof generateString === 'string');
            assert.ok(generateString.length === 10);
        });

        it('should generate a string value, checks seeding', function() {
            faker.seed(100);
            var generateString = faker.datatype.string();
            assert.ok(generateString === 'S_:GHQo.!/');
        });

        it('returns empty string if negative length is passed', function() {
            const negativeValue = faker.datatype.number({min: -1000, max: -1});
            var generateString = faker.datatype.string(negativeValue);
            assert.ok(generateString === '')
            assert.ok(generateString.length === 0);
        });

        it('returns string with length of 2^20 if bigger length value is passed', function() {
            const overMaxValue = Math.pow(2, 28);
            var generateString = faker.datatype.string(overMaxValue);
            assert.ok(generateString.length === (Math.pow(2,20)));
        });


    });

    describe('boolean', function() {
        it('generates a boolean value', function() {
            var bool = faker.datatype.boolean();
            assert.ok(typeof bool == 'boolean');
        });
    });

    describe('UUID', function() {
        it('generates a valid UUID', function() {
            var UUID = faker.datatype.uuid();
            var RFC4122 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
            assert.ok(RFC4122.test(UUID));
        });
    });

    describe('hexaDecimal', function() {
        var hexaDecimal = faker.datatype.hexaDecimal;

        it('generates single hex character when no additional argument was provided', function() {
            var hex = hexaDecimal();
            assert.ok(hex.match(/^(0x)[0-9a-f]{1}$/i));
        });

        it('generates a random hex string', function() {
            var hex = hexaDecimal(5);
            assert.ok(hex.match(/^(0x)[0-9a-f]+$/i));
        });
    });

    describe('json', function() {
        it('generates a valid json object', function() {
            const jsonObject = faker.datatype.json();
            console.log(jsonObject);
            assert.ok(typeof jsonObject == 'string');
            assert.ok(JSON.parse(jsonObject));
        });
    });
});