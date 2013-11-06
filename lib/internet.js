var Faker = require('../index');

var internet = {
    email: function () {
        return Faker.Helpers.slugify(this.userName()) + "@" + Faker.Helpers.slugify(this.domainName());
    },

    userName: function () {
        var result;
        switch (Faker.random.number(2)) {
        case 0:
            result = Faker.random.first_name();
            break;
        case 1:
            result = Faker.random.first_name() + Faker.random.array_element([".", "_"]) + Faker.random.last_name();
            break;
        }
        return result;
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
    },

    color: function (baseRed255, baseGreen255, baseBlue255) {

        // based on awesome response : http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
        var red = Math.floor((Faker.random.number(256) + baseRed255) / 2);
        var green = Math.floor((Faker.random.number(256) + baseRed255) / 2);
        var blue = Math.floor((Faker.random.number(256) + baseRed255) / 2);

        return '#' + red.toString(16) + green.toString(16) + blue.toString(16);
    }
};

module.exports = internet;
