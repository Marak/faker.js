// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log("Director: "+faker.movie.director());
console.log("Actor: "+faker.movie.actor());
console.log("Actress: "+faker.movie.actress());
console.log("Genre: "+faker.movie.genre());
