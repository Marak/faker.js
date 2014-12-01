var mersenne = require('../vendor/mersenne');
var faker = require('../index');

var random = {
    // returns a single random number based on a max number or range
    number: function (options) {

        if (typeof options === "number") {
          options = {
            max: options
          };
        }

        options = options || {};

        if (typeof options.min === "undefined") {
          options.min = 0;
        }

        if (typeof options.max === "undefined") {
          options.max = 1;
        }
        if (typeof options.precision === "undefined") {
          options.precision = 1;
        }

        // Make the range inclusive of the max value
        var max = options.max;
        if (max > 0) {
          max += options.precision;
        } 
          
        var randomNumber = options.precision * Math.floor(
          mersenne.rand(max / options.precision, options.min / options.precision));

        return randomNumber;

    },

    // takes an array and returns the array randomly sorted
    arrayElement: function (array) {
        array = array || ["a", "b", "c"];
        var r = faker.random.number({ max: array.length - 1 });
        return array[r];
    },

    // takes an object and returns the randomly key or value
    objectElement: function (object, field) {
        object = object || {};
        var array = Object.keys(object);
        var key = faker.random.arrayElement(array);

        return field === "key" ? key : object[key];
    }
};

module.exports = random;
