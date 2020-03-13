/**
 *
 * @namespace faker.movie
 */
var Movie = function (faker) {
    var self = this;
  
    /**
     * genre
     *
     * @method faker.movie.genre
     */
    this.genre = function() {
        return faker.random.arrayElement(faker.definitions.movie.genre);
    };
  
    /**
     * actor
     *
     * @method faker.movie.actor
     */
    this.hero = function() {
        return faker.random.arrayElement(faker.definitions.movie.actor);
    };
     /**
     * actress
     *
     * @method faker.movie.actress
     */
    this.hero = function() {
        return faker.random.arrayElement(faker.definitions.movie.actress);
    };
     /**
     * director
     *
     * @method faker.movie.director
     */
    this.hero = function() {
        return faker.random.arrayElement(faker.definitions.movie.director);
    };

    return self;
  }
  module['exports'] = Movie;
  