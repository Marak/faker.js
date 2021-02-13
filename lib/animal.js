/**
 *
 * @namespace faker.animal
 */
var Animal = function (faker) {
  var self = this;

  /**
   * dog
   *
   * @method faker.animal.dog
   */
  self.dog = function() {
      return faker.random.arrayElement(faker.definitions.animal.dog);
  };

  return self;
};

module['exports'] = Animal;
