/**
 *
 * @namespace faker.music
 */
var Music = function (faker) {
    var self = this;
    /**
     * genre
     *
     * @method faker.music.genre
     */
    self.genre = function () {
        return faker.random.arrayElement(faker.definitions.music.genre);
    };

    self.genre.schema = {
        "description": "Generates a genre.",
        "sampleResults": ["Rock", "Metal", "Pop"]
    };
/**
     * instruments
     *
     * @method faker.music.instruments
     */
    self.instruments = function () {
        return faker.random.arrayElement(faker.definitions.music.instruments);
    };

    self.instruments.schema = {
        "description": "Generates a genre.",
        "sampleResults": ["Veena", "Sitar", "Violin"]
    };

};

module["exports"] = Music;
