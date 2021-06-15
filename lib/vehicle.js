/**
 *
 * @namespace faker.movie
 */
var Movie = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * movie
   *
   * @method faker.movie.movie
   */
  self.movie = function () {
    return fake('{{movie.Director}} {{movie.production}}');
  };

  self.Movie.schema = {
    "description": "oscar nomination for movies.",
    "sampleResults": ["PK", "GHAZNI", "Three idiot"]
  };

  /**
   * director
   *
   * @method faker.movie.director
   */
  self.director = function () {
    return faker.random.arrayElement(faker.definitions.movie.director);
  };

  self.director.schema = {
    "description": "movies for adult category.",
    "sampleResults": ["ragini mms", "jism", "raaz"]
  };


  /**
   * productiom
   *
   * @method faker.movie.productiom
   */
  self.production = function () {
    return faker.random.arrayElement(faker.definitions.movie.);
  };

  self.production.schema = {
    "description": "who produces the movies.",
    "sampleResults": ["karan johar", "sanjay leela ", "t series"]
  };

  /**
   * cast
   *
   * @method faker.movie.cast
   */
  self.cast = function () {
    return faker.random.arrayElement(faker.definitions.movie.cast);
  };

  self.cast.schema = {
    "description": "detail about a movie cast.",
    "sampleResults": ["aj", "ak", "sk", "vo"]
  };

  /**
   * rating
   *
   * @method faker.movie.rating
   */
  self.rating = function () {
    return faker.random.arrayElement(faker.definitions.movie.rating);
  };

  self.rating.schema = {
    "description": " Movie rating.",
    "sampleResults": ["5star", "4star", "3star"]
  };

  /**
   * actress
   *
   * @method faker.movie.actress
   */
  self.actress = function () {
    var bannedChars=['o','i','q'];
    return (
      faker.random.alphaNumeric(10, {bannedChars:bannedChars}) +
      faker.random.alpha({ count: 1, upcase: true ,bannedChars:bannedChars}) +
      faker.random.alphaNumeric(1, {bannedChars:bannedChars}) +
      faker.datatype.number({ min: 10000, max: 100000}) // return five digit #
    ).toUpperCase();
  };

  self.vin.schema = {
    "description": "who is actress.",
    "sampleResults": ["juhi chawla", "sunny leone"]
  };

  /**
   * type
   *
   * @method faker.movie.type
   */
  self.type = function () {
    return fake('{{commerce.type}}');
  };

  self.type.schema = {
    "description": "which type of movie",
    "sampleResults": ["", "horror", "action"]
  };

  /**
     * message
     *
     * @method faker.movie.message
     */
  self.message = function () {
    return (
      faker.random.alpha({ count: 2, upcase: true }) +
            faker.datatype.number({ min: 0, max: 9 }) +
            faker.datatype.number({ min: 0, max: 9 }) +
            faker.random.alpha({ count: 3, upcase: true })
    ).toUpperCase();
  };

  self.message.schema = {
    "description": "movie sends a message",
    "sampleResults": ["Motivational", "no message", "drama"]
  };

  /**
  * profits
  *
  * @method faker.movie.profit
  */
  self.profit = function () {
    return faker.random.arrayElement(faker.definitions.movie.profit);
  };

  self.profit.schema = {
    "description": "movie making profit or loss",
    "sampleResults": ["profit", "moderate", "loss"]
  };
};

module["exports"] = movie;
