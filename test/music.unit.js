if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("music.js", function () {
  describe("genre()", function () {
    it("returns a genre", function () {
      sinon.stub(faker.music, 'genre').returns('Rock');
      var genre = faker.music.genre();

      assert.strictEqual(genre, 'Rock');
      faker.music.genre.restore();
    });
  });
});
