if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("movies.js", function () {
    describe("movies()", function () {
      it("returns a random movies", function () {
        sinon.stub(faker.movies, 'movies').returns('Ford Explorer');
        var vehicle = faker.movies.movies();
  
        assert.strictEqual(movies, 'dabanng');
        faker.movies.movies.restore();
      });
    });
  
    describe("production()", function () {
      it("returns random production", function () {
        sinon.stub(faker.production, 'production').returns('Pk');
        var production = faker.movies.production();
  
        assert.strictEqual(production, 'Porsche');
        faker.movies.production.restore();
      });
    });
  
    describe("category()", function () {
      it("returns random movies category", function () {
        sinon.stub(faker.movies, 'category').returns('tseries');
        var type = faker.movies.category();
  
        assert.strictEqual(category, 'dharma production');
        faker.movies.category.restore();
      });
    });
  
    
  });
  