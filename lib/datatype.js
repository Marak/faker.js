var mersenne = require('../vendor/mersenne');

/**
 * Method to reduce array of characters
 * @param arr existing array of characters
 * @param values array of characters which should be removed
 * @return {*} new array without banned characters
 */
var arrayRemove = function (arr, values) {
    values.forEach(function(value){
        arr = arr.filter(function(ele){
            return ele !== value;
        });
    });
    return arr;
};

/**
 *
 * @namespace faker.dataType
 */
function DataType (faker, seed) {
    // Use a user provided seed if it is an array or number
    if (Array.isArray(seed) && seed.length) {
        mersenne.seed_array(seed);
    }
    else if(!isNaN(seed)) {
        mersenne.seed(seed);
    }

    /**
     * returns a single random number based on a max number or range
     *
     * @method faker.random.number
     * @param {mixed} options {min, max, precision}
     */
    this.number = function (options) {

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
            options.max = 99999;
        }
        if (typeof options.precision === "undefined") {
            options.precision = 1;
        }

        // Make the range inclusive of the max value
        var max = options.max;
        if (max >= 0) {
            max += options.precision;
        }

        var randomNumber = Math.floor(
            mersenne.rand(max / options.precision, options.min / options.precision));
        // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01
        randomNumber = randomNumber / (1 / options.precision);

        return randomNumber;

    };

    /**
     * returns a single random floating-point number based on a max number or range
     *
     * @method faker.random.float
     * @param {mixed} options
     */
    this.float = function (options) {
        if (typeof options === "number") {
            options = {
                precision: options
            };
        }
        options = options || {};
        var opts = {};
        for (var p in options) {
            opts[p] = options[p];
        }
        if (typeof opts.precision === 'undefined') {
            opts.precision = 0.01;
        }
        return faker.random.number(opts);
    };

    /**
     * takes an array and returns a random element of the array
     *
     * @method faker.random.arrayElement
     * @param {array} array
     */
    this.arrayElement = function (array) {
        array = array || ["a", "b", "c"];
        var r = faker.random.number({ max: array.length - 1 });
        return array[r];
    };

    /**
     * takes an array and returns a subset with random elements of the array
     *
     * @method faker.random.arrayElements
     * @param {array} array
     * @param {number} count number of elements to pick
     */
    this.arrayElements = function (array, count) {
        array = array || ["a", "b", "c"];

        if (typeof count !== 'number') {
            count = faker.random.number({ min: 1, max: array.length });
        } else if (count > array.length) {
            count = array.length;
        } else if (count < 0) {
            count = 0;
        }

        var arrayCopy = array.slice();
        var countToRemove = arrayCopy.length - count;
        for (var i = 0; i < countToRemove; i++) {
            var indexToRemove = faker.random.number({ max: arrayCopy.length - 1 });
            arrayCopy.splice(indexToRemove, 1);
        }

        return arrayCopy;
    };

    /**
     * uuid
     *
     * @method faker.random.uuid
     */
    this.uuid = function () {
        var RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        var replacePlaceholders = function (placeholder) {
            var random = faker.random.number({ min: 0, max: 15 });
            var value = placeholder == 'x' ? random : (random &0x3 | 0x8);
            return value.toString(16);
        };
        return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
    };

    /**
     * boolean
     *
     * @method faker.random.boolean
     */
    this.boolean = function () {
        return !!faker.random.number(1)
    };


    /**
     * hexaDecimal
     *
     * @method faker.random.hexaDecimal
     * @param {number} count defaults to 1
     */
    this.hexaDecimal = function hexaDecimal(count) {
        if (typeof count === "undefined") {
            count = 1;
        }

        var wholeString = "";
        for(var i = 0; i < count; i++) {
            wholeString += faker.random.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
        }

        return "0x"+wholeString;
    };

    return this;

}

module['exports'] = DataType;
