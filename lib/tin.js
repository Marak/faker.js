
/**
 * TIN.
 */

var Tin = function (faker) {

  /**
   * Generates a valid `Employer Identification Number`.
   *
   * @param {boolean} formatted
   */

  this.ein = function (formatted) {
    // A few valid EIN prefixes.
    var prefix = faker.random.arrayElement(['10', '12', '15', '24', '30', '32', '35', '36', '37']);
    var serial = faker.random.number({ min: 1000000, max: 9999999 });

    return prefix + (formatted ? '-' : '') + serial;
  };

  /**
   * Generates a valid `Individual Taxpayer Identification Number`.
   *
   * @param {boolean} formatted
   */

  this.itin = function (formatted) {
    var part1 = faker.random.number({ min: 900, max: 999 });
    var part2 = [
      faker.random.number({ min: 70, max: 88 }),
      faker.random.number({ min: 90, max: 92 }),
      faker.random.number({ min: 94, max: 99 }),
    ];
    var part3 = faker.random.number({ min: 1000, max: 9999 });

    return part1 + (formatted ? '-' : '') + faker.random.arrayElement(part2) + (formatted ? '-' : '') + part3;
  };

  /**
   * Generates a valid `Social Security Number`.
   *
   * @param {boolean} formatted
   */

  this.ssn = function (formatted) {
    var area = faker.random.number({ min: 100, max: 665 });
    var group = faker.random.number({ min: 10, max: 99 });
    var serial = faker.random.number({ min: 1000, max: 9900 });

    return area + (formatted ? '-' : '') + group + (formatted ? '-' : '') + serial;
  };
};

module.exports = Tin;
