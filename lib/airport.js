/**
 *
 * @namespace faker.airport
 */
var Airport = function (faker) {
  var self = this;

  /**
   * name
   *
   * @method faker.airport.name
   */
  self.name = function () {
    return faker.random.arrayElement(faker.definitions.airport.name);
  };

  self.name.schema = {
    "description": "Generates an international airport.",
    "sampleResults": ["Bristol Airport", "LaGuardia Airport", "Vancouver International Airport"]
  };

  /**
   * IATA code
   *
   * @method faker.airport.iataCode
   */
  self.iataCode = function () {
    return faker.random.alpha({ count: 3, upcase: true });
  };

  self.iataCode.schema = {
    "description": "Generates an airport IATA code.",
    "sampleResults": ["LAX", "NAP", "ABC"]
  };

  /**
   * ICAO code
   *
   * @method faker.airport.icaoCode
   */
  self.icaoCode = function () {
    return faker.random.alpha({ count: 2, upcase: true });
  };

  self.icaoCode.schema = {
    "description": "Generates an airport ICAO code.",
    "sampleResults": ["TR", "BG", "PA"]
  };
};

module["exports"] = Airport;
