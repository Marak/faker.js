/**
 *
 * @namespace faker.instruments
 */
var Instruments = function (faker) {
    var self = this;
    /**
     * musical
     *
     * @method faker.instruments.musical
     */
    self.musical = function () {
        return faker.random.arrayElement(faker.definitions.instruments.musical);
    };
  
    self.musical.schema = {
        "description": "Generate musical instruments.",
        "sampleResults": ["Drum", "Piano", "Guitar"]
    };
  };
  
  module["exports"] = Instruments;