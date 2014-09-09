var faker = require('../index');

var company = {
    suffixes: function () {
        return ["Inc", "and Sons", "LLC", "Group", "and Daughters"];
    },

    companyName: function (format) {
        format = parseInt(format);

        switch ((format ? format : faker.random.number(3))) {
        case 0:
            return faker.Name.lastName() + " " + faker.Company.companySuffix();
        case 1:
            return faker.Name.lastName() + "-" + faker.Name.lastName();
        case 2:
            return faker.Name.lastName() + ", " + faker.Name.lastName() + " and " + faker.Name.lastName();
        }
    },

    companySuffix: function () {
        return faker.random.array_element(faker.Company.suffixes());
    },

    catchPhrase: function () {
        return faker.random.catch_phrase_adjective() + " " +
            faker.random.catch_phrase_descriptor() + " " +
            faker.random.catch_phrase_noun();
    },

    bs: function () {
        return faker.random.bs_adjective() + " " +
            faker.random.bs_buzz() + " " +
            faker.random.bs_noun();
    }
};

module.exports = company;
