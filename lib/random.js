var mersenne = require('../vendor/mersenne');
var faker = require('../index');

var random = {
    // returns a single random number based on a max number or range
    number: function (options) {

        if (typeof options === "number") {
          var options = {
            max: options
          };
        }

        options = options || {
          min: 0,
          max: 1,
          precision: 1
        };

        if (typeof options.min === "undefined") {
          options.min = 0;
        }

        if (typeof options.max === "undefined") {
          options.max = 1;
        }

        // by incrementing max by 1, max becomes inclusive of the range
        if (options.max > 0) {
          options.max++;
        }

        var randomNumber = mersenne.rand(options.max, options.min);
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
