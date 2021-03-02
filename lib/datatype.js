var mersenne = require('../vendor/mersenne');

/**
 *
 * @namespace faker.datatype
 */
function Datatype (faker, seed) {
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
     * @method faker.datatype.number
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
        let max = options.max;
        if (max >= 0) {
            max += options.precision;
        }

        let randomNumber = Math.floor(
            mersenne.rand(max / options.precision, options.min / options.precision));
        // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01
        randomNumber = randomNumber / (1 / options.precision);

        return randomNumber;

    };

    /**
     * returns a single random floating-point number based on a max number or range
     *
     * @method faker.datatype.float
     * @param {mixed} options
     */
    this.float = function (options) {
        if (typeof options === "number") {
            options = {
                precision: options
            };
        }
        options = options || {};
        let opts = {};
        for (let p in options) {
            opts[p] = options[p];
        }
        if (typeof opts.precision === 'undefined') {
            opts.precision = 0.01;
        }
        return faker.datatype.number(opts);
    };

    /**
     * Similar to description of Date by MDN,
     * this method uses a random number of milliseconds since 1. Jan 1970 UTC to return a Date object
     *
     * @method faker.datatype.date
     * @param {mixed} options, pass min or max as number of milliseconds since 1. Jan 1970 UTC
     */
    this.date = function (options) {
        if (typeof options === "number") {
            options = {
                max: options
            };
        }

        const minMax = 8640000000000000;

        options = options || {};

        if (typeof options.min === "undefined" || options.min < minMax*-1) {
            options.min = new Date().setFullYear(1990, 1, 1);
        }

        if (typeof options.max === "undefined" || options.max > minMax) {
            options.max = new Date().setFullYear(2100,1,1);
        }

        const random = faker.datatype.number(options);
        return new Date(random);
    };

    /**
     * Returns a string, containing UTF-16 chars between 33 and 125 ('!' to '}')
     *
     *
     * @method faker.datatype.string
     * @param { number } strLength: length of generated string, default = 10, max length = 2^20
     */
    this.string = function (strLength) {
        if(strLength === undefined ){
           strLength = 10;
        }

        const maxLength = Math.pow(2, 20);
        if(strLength >= (maxLength)){
            strLength = maxLength
        }

        const charCodeOption = {
            min: 33,
            max: 125
        }
        let returnString = '';

        for(let i = 0; i < strLength; i++){
            returnString += String.fromCharCode(faker.datatype.number(charCodeOption));
        }
        return returnString;
    };

    /**
     * uuid
     *
     * @method faker.datatype.uuid
     */
    this.uuid = function () {
        const RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        const replacePlaceholders = function (placeholder) {
            const random = faker.datatype.number({ min: 0, max: 15 });
            const value = placeholder == 'x' ? random : (random &0x3 | 0x8);
            return value.toString(16);
        };
        return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
    };

    /**
     * boolean
     *
     * @method faker.datatype.boolean
     */
    this.boolean = function () {
        return !!faker.datatype.number(1)
    };


    /**
     * hexaDecimal
     *
     * @method faker.datatype.hexaDecimal
     * @param {number} count defaults to 1
     */
    this.hexaDecimal = function hexaDecimal(count) {
        if (typeof count === "undefined") {
            count = 1;
        }

        let wholeString = "";
        for(let i = 0; i < count; i++) {
            wholeString += faker.random.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
        }

        return "0x"+wholeString;
    };

    /**
     * returns
     *
     * @method faker.datatype.json
     */
    this.json = function json() {

        const properties = ['foo', 'bar', 'bike', 'a', 'b', 'name', 'prop']

        let returnObject = {};
        properties.map((prop, i) => {
            returnObject[prop] = i%faker.datatype.number({min:1, max:3}) === 0 ?
                faker.datatype.string() : faker.datatype.number();
        })

        return JSON.stringify(returnObject);
    };

    return this;
}

module['exports'] = Datatype;
