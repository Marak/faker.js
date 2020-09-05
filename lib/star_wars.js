/**
 *
 * @namespace faker.starWars
 */
var StarWars = function (faker) {
  var self = this;

  /**
   * character
   *
   * @method faker.starWars.character
   */
  self.character = function () {
    return faker.random.arrayElement(faker.definitions.starWars.character);
  };

  self.character.schema = {
    "description": "Generates a character.",
    "sampleResults": ["Boba Fett", "Supreme Leader Snoke", "Jar Jar Binks"]
  };

  /**
   * droid
   *
   * @method faker.starWars.droid
   */
  self.droid = function () {
    return faker.random.arrayElement(faker.definitions.starWars.droid);
  };

  self.droid.schema = {
    "description": "Generates a droid.",
    "sampleResults": ["C-3PO", "IG-88", "Interrogation Droid"]
  };

  /**
   * planet
   *
   * @method faker.starWars.planet
   */
  self.planet = function () {
    return faker.random.arrayElement(faker.definitions.starWars.planet);
  };

  self.planet.schema = {
    "description": "Generates a planet.",
    "sampleResults": ["Cloud City", "Naboo", "Kashyyyk"]
  };

  /**
   * species
   *
   * @method faker.starWars.species
   */
  self.species = function () {
    return faker.random.arrayElement(faker.definitions.starWars.species);
  };

  self.species.schema = {
    "description": "Generates a species.",
    "sampleResults": ["Ewok", "Gungan", "Wookiee"]
  };

  /**
   * vehicle
   *
   * @method faker.starWars.vehicle
   */
  self.vehicle = function () {
    return faker.random.arrayElement(faker.definitions.starWars.vehicle);
  };

  self.vehicle.schema = {
    "description": "Generates a vehicle.",
    "sampleResults": ["Sandcrawler", "X-Wing Fighter", "Podracer"]
  };

  /**
   * quote
   *
   * @method faker.starWars.quote
   */
  self.quote = function () {
    return faker.random.arrayElement(faker.definitions.starWars.quote);
  };

  self.quote.schema = {
    "description": "Generates a quote",
    "sampleResults": ["Never tell me the odds!", "I find your lack of faith disturbing."]
  };

  /**
   * wookiee word
   *
   * @method faker.starWars.wookiee
   */
  self.wookiee = function () {
    return faker.random.arrayElement(faker.definitions.starWars.wookiee);
  };

  self.wookiee.schema = {
    "description": "Generates a wookiee word",
    "sampleResults": ["wyaaaaaa", "gwyaaaag", "huewaa"]
  };
};

module["exports"] = StarWars;
