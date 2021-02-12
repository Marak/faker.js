/**
 *
 * @namespace faker.book
 */
var Book = function(faker) {
    var self = this;
    /**
     * genre
     *
     * @method faker.book.genre
     */
    self.genre = function() {
        return faker.random.arrayElement(faker.definitions.book.genre);
    };

    self.genre.schema = {
        "description": "Generates a genre.",
        "sampleResults": ["Fable", "Legend", "Short Story"]
    };
};

module["exports"] = Book;