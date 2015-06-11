var faker = require('../index'),
    password_generator = require('../vendor/password-generator.js'),
    random_ua = require('../vendor/user-agent');

var internet = {

    avatar: function () {
        return faker.random.array_element(faker.definitions.internet.avatar_uri);
    },

    email: function (firstName, lastName, provider) {
        provider = provider || faker.random.array_element(faker.definitions.internet.free_email);
        return  faker.helpers.slugify(faker.internet.userName(firstName, lastName)) + "@" + provider;
    },

    userName: function (options) {
        var result;
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        if (options) {
            switch (options) {
            case '_':
                result = firstName + "_" + lastName;
                break;
            case '.':
                result = firstName + "." + lastName;
                break;
            case '-':
                result = firstName + "-" + lastName;
                break;
            }
        } else {
            switch (faker.random.number(2)) {
            case 0:
                result = firstName + faker.random.number(99);
                break;
            case 1:
                result = firstName + faker.random.array_element([".", "_"]) + lastName;
                break;
            case 2:
                result = firstName + faker.random.array_element([".", "_"]) + lastName + faker.random.number(99);
                break;
            }
            result = result.replace(/'/g, "");
            result = result.replace(/ /g, "");
        }

        return result;
    },

    domainName: function () {
        return faker.internet.domainWord() + "." + faker.internet.domainSuffix();
    },

    domainSuffix: function () {
        return faker.random.array_element(faker.definitions.internet.domain_suffix);
    },

    domainWord:  function () {
        return faker.name.firstName().replace(/([^A-Z0-9._%+-])/ig, '').toLowerCase();
    },

    ip: function () {
        var randNum = function () {
            return (faker.random.number(255)).toFixed(0);
        };

        var result = [];
        for (var i = 0; i < 4; i++) {
            result[i] = randNum();
        }

        return result.join(".");
    },

    userAgent: function () {
      return random_ua.generate();
    },

    color: function (baseRed255, baseGreen255, baseBlue255) {
        baseRed255 = baseRed255 || 0;
        baseGreen255 = baseGreen255 || 0;
        baseBlue255 = baseBlue255 || 0;
        // based on awesome response : http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
        var red = Math.floor((faker.random.number(256) + baseRed255) / 2);
        var green = Math.floor((faker.random.number(256) + baseGreen255) / 2);
        var blue = Math.floor((faker.random.number(256) + baseBlue255) / 2);
        var redStr = red.toString(16);
        var greenStr = green.toString(16);
        var blueStr = blue.toString(16);
        return '#' +
          (redStr.length === 1 ? '0' : '') + redStr +
          (greenStr.length === 1 ? '0' : '') + greenStr +
          (blueStr.length === 1 ? '0': '') + blueStr;

    },

    password: function (len, memorable, pattern, prefix) {
      len = len || 15;
      if (typeof memorable === "undefined") {
        memorable = false;
      }
      return password_generator(len, memorable, pattern, prefix);
    }
};

module.exports = internet;
