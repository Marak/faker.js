/**
 *
 * @namespace faker.movie
 */
var Movie = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * genre
     *
     * @method faker.movie.genre
     */
    self.genre = function() {
        return faker.random.arrayElement(faker.definitions.movie.genre);
    };
  
    /**
     * actor
     *
     * @method faker.movie.actor
     */
    self.actor = function() {
        return faker.random.arrayElement(faker.definitions.movie.actor);
    };
     /**
     * actress
     *
     * @method faker.movie.actress
     */
    self.actress = function() {
        return faker.random.arrayElement(faker.definitions.movie.actress);
    };
     /**
     * director
     *
     * @method faker.movie.director
     */
    self.director = function() {
        return faker.random.arrayElement(faker.definitions.movie.director);
    };
  }
  module['exports'] = Movie;
  