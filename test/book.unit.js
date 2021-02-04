if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("book.js", function() {
    describe("genre()", function() {
        it("returns a genre", function() {
            sinon.stub(faker.book, 'genre').returns('Short Story');
            var genre = faker.book.genre();

            assert.equal(genre, 'Short Story');
            faker.book.genre.restore();
        });
    });
});
