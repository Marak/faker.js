/**
 *
 * @namespace faker.laptop
 */
var laptop = function (faker) {
  var self = this;
  
  /**
   * model
   *
   * @method faker.laptop.model
   */
  self.company = function () {
    return faker.random.arrayElement(faker.definitions.laptop.company);
  };
  self.fault = function () {
    return faker.random.arrayElement(faker.definitions.laptop.fault);
  };
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.laptop.model);
  };

}

module['exports'] = laptop;