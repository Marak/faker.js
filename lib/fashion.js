/**
 *
 * @namespace faker.fashion
 */
var Fashion = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * fashion
   *
   * @method faker.fashion.fashion
   */
  self.fashion = function () {
    return fake('{{fashion.gender}} {{fashion.category}}');
  };


 self.fashion.schema = {
    "description": "Generates a random fashion.",
    "sampleResults": ["Outfits", "Innerfits"]
  };

  /**
   * gender
   *
   * @method faker.fashion.gender
   */
  self.gender = function () {
    return faker.random.arrayElement(faker.definitions.fashion.gender);
  };

  self.gender.schema = {
    "description": "Generates a gender name.",
    "sampleResults": ["Male", "Female"]
  };


/**
   * category
   *
   * @method faker.fashion.category
   */
  self.category = function () {
    return faker.random.arrayElement(faker.definitions.fashion.category);
  };

  self.category.schema = {
    "description": "Generates a fashion category.",
    "sampleResults": ["Explorer", "Camry", "Ranchero"]
  };

/**
   * type
   *
   * @method faker.fashion.type
   */
  self.type = function () {
    return faker.random.arrayElement(faker.definitions.fashion.type);
  };

  self.type.schema = {
    "description": "Generates a fashion type.",
    "sampleResults": ["Pijama", "Dhoti", "Leggings"]
  };

/**
   * fabric
   *
   * @method faker.fashion.fabric
   */
  self.fabric = function () {
    return faker.random.arrayElement(faker.definitions.fashion.fabric);
  };

  self.fabric.schema = {
    "description": "Generates a fabric type.",
    "sampleResults": ["Silk", "Nylon", "Cotton"]
  };

/**
   * color
   *
   * @method faker.fashion.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"]
  };


/**
   * size
   *
   * @method faker.fashion.size
   */
  self.size = function () {
    return faker.random.arrayElement(faker.definitions.fashion.size);
  };

  self.size.schema = {
    "description": "Generates a fabric size.",
    "sampleResults": ["Small", "Medium", "Large"]
  };
