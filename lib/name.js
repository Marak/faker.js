var faker = require('../index');

var _name = {
    firstName: function () {
        return faker.random.first_name();
    },

    //Working as intended
    firstNameFemale: function () {
        return faker.random.first_name();
    },
    //Working as intended
    firstNameMale: function () {
        return faker.random.first_name();
    },

    lastName: function () {
        return faker.random.last_name();
    },

    findName: function () {
        var r = faker.random.number(8);
        switch (r) {
        case 0:
            return faker.random.name_prefix() + " " + faker.Name.firstName() + " " + faker.Name.lastName();
        case 1:
            return faker.Name.firstName() + " " + faker.Name.lastName() + " " + faker.random.name_suffix();
        }

        return faker.Name.firstName() + " " + faker.Name.lastName();
    }
};

module.exports = _name;
