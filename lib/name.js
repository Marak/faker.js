var faker = require('../index');

var _name = {

    firstName: function () {
      if (typeof faker.locales[faker.locale].name !== "undefined"
        && typeof faker.locales[faker.locale].name.male_first_name !== "undefined"
        && typeof faker.locales[faker.locale].name !== "undefined"
        && typeof faker.locales[faker.locale].name.female_first_name !== "undefined"
      ) {
        // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
        // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
        var rand = faker.random.number(1);
        if (rand === 0) {
          return faker.random.array_element(faker.locales[faker.locale].name.male_first_name);
        } else {
          return faker.random.array_element(faker.locales[faker.locale].name.female_first_name);
        }
      }
      return faker.random.array_element(faker.definitions.name.first_name);
    },

    // basically a clone of firstName
    middleName: function () {
      if (typeof faker.locales[faker.locale].name !== "undefined"
        && typeof faker.locales[faker.locale].name.male_middle_name !== "undefined"
        && typeof faker.locales[faker.locale].name !== "undefined"
        && typeof faker.locales[faker.locale].name.female_middle_name !== "undefined"
      ) {
        var rand = faker.random.number(1);
        if (rand === 0) {
          return faker.random.array_element(faker.locales[faker.locale].name.male_middle_name);
        } else {
          return faker.random.array_element(faker.locales[faker.locale].name.female_middle_name);
        }
      }
      return faker.random.array_element(faker.definitions.name.middle_name);
    },

    lastName: function () {
      if (typeof faker.locales[faker.locale].name !== "undefined"
        && typeof faker.locales[faker.locale].name.male_last_name !== "undefined"
        && typeof faker.locales[faker.locale].name !== "undefined"
        && typeof faker.locales[faker.locale].name.female_last_name !== "undefined"
      ) {
        // some locale datasets ( like ru ) have last_name split by gender. i have no idea how last names can have genders, but also i do not speak russian
        // see above comment of firstName method
        var rand = faker.random.number(1);
        if (rand === 0) {
          return faker.random.array_element(faker.locales[faker.locale].name.male_last_name);
        } else {
          return faker.random.array_element(faker.locales[faker.locale].name.female_last_name);
        }
      }
      return faker.random.array_element(faker.definitions.name.last_name);
    },

    findName: function (firstName, lastName) {
        firstName = firstName || faker.name.firstName();
        var middleName = faker.name.middleName();
        lastName = lastName || faker.name.lastName();
        var nameFormat;
        try {
            nameFormat = faker.random.array_element(faker.locales[faker.locale].name.name);
        } catch (e) {
            // No name format found for given locale, going with default [en] name format
            nameFormat = faker.random.array_element(faker.locales["en"].name.name);
        }
        var fullName = faker.helpers.template(nameFormat, {
            first_name: firstName,
            last_name: lastName,
            male_first_name: firstName,
            male_middle_name: middleName,
            male_last_name: lastName,
            female_first_name: firstName,
            female_middle_name: middleName,
            female_last_name: lastName,
            prefix: faker.name.prefix(),
            suffix: faker.name.suffix()
        });
        return fullName;
    },

    prefix: function () {
        return faker.random.array_element(faker.definitions.name.prefix);
    },

    suffix: function () {
        return faker.random.array_element(faker.definitions.name.suffix);
    },

    title: function() {
        var descriptor  = faker.random.array_element(faker.definitions.name.title.descriptor),
            level       = faker.random.array_element(faker.definitions.name.title.level),
            job         = faker.random.array_element(faker.definitions.name.title.job);

        return descriptor + " " + level + " " + job;
    }

};

module.exports = _name;
