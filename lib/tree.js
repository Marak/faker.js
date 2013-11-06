var Faker = require('../index');

var tree = {

    clone: function clone(obj) {
        if (obj == null || typeof(obj) != 'object')
            return obj;

        var temp = obj.constructor(); // changed

        for (var key in obj) {
            temp[key] = this.clone(obj[key]);
        }
        return temp;
    },

    createTree: function (depth, width, obj) {
        if (!obj) {
            throw {
                name: "ObjectError",
                message: "there needs to be an object passed in"
            };
        }


        if (width <= 0) {
            throw {
                name: "TreeParamError",
                message: "width must be greater than zero"
            };
        }

        var newObj = this.clone(obj);

        for (var prop in newObj) {
            if (newObj.hasOwnProperty(prop)) {
                var value = null;
                if (newObj[prop] !== "__RECURSE__") {
                    value = eval(newObj[prop]);
                }
                else {
                    if (depth !== 0) {
                        value = [];
                        var evalWidth = 1;

                        if (typeof(width) == "function") {
                            evalWidth = width();
                        }
                        else {
                            evalWidth = width;
                        }

                        for (var i = 0; i < evalWidth; i++) {
                            value.push(this.createTree(depth - 1, width, obj));
                        }

                    }
                }

                newObj[prop] = value;
            }
        }

        return newObj;
    }

};

module.exports = tree;
