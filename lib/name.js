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
            return Faker.random.name_prefix() + " " + _name.firstName() + " " + _name.lastName();
        case 1:
            return _name.firstName() + " " + _name.lastName() + " " + Faker.random.name_suffix();
        }

        return _name.firstName() + " " + _name.lastName();
    }
};

module.exports = _name;
