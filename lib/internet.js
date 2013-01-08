var Faker = require('../index');

var internet = {
    email: function () {
        return this.userName() + "@" + this.domainName();
    },

    userName: function () {
        switch (Faker.random.number(2)) {
        case 0:
            return Faker.random.first_name();
        case 1:
            return Faker.random.first_name() + Faker.random.array_element([".", "_"]) + Faker.random.last_name();
        }
    },

    domainName: function () {
        return this.domainWord() + "." + Faker.random.domain_suffix();
    },

    domainWord:  function () {
        return Faker.random.first_name().toLowerCase();
    },

    ip: function () {
        var randNum = function () {
            return (Math.random() * 254 + 1).toFixed(0);
        };

        var result = [];
        for (var i = 0; i < 4; i++) {
            result[i] = randNum();
        }

        return result.join(".");
    }
};

module.exports = internet;
