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
     * artist
     *
     * @method faker.music.artist
     */
    self.artist = function () {
        return faker.random.arrayElement(faker.definitions.music.artist)
    }
    
    self.artist.schema = {
        "description": "Generates a random artist",
        "sampleResults": ["U2", "Bon Jovi", "Queen"]
    };
   
    /**
     * song
     *
     * @method faker.music.song
     */
    self.song = function () {
        return faker.random.arrayElement(faker.definitions.music.song)
    }
    
    self.song.schema = {
        "description": "Generates a random song tiltle",
        "sampleResults": ["Gimme Shelter", "Beat It", "Hotel California"]
    };
};

module["exports"] = Music;
