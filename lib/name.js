var Faker = require('../index');

var _name = {
    firstName: function () {
        return Faker.random.first_name();
    },

    lastName: function () {
        return Faker.random.last_name();
    },

    findName: function () {
        var r = Faker.random.number(8);
        switch (r) {
        case 0:
            return Faker.random.name_prefix() + " " + this.firstName() + " " + this.lastName();
        case 1:
            return this.firstName() + " " + this.lastName() + " " + Faker.random.name_suffix();
        }

        return this.firstName() + " " + this.lastName();
    }
};

module.exports = _name;
