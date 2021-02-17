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
    
    describe("artist()", function () {
        it("returns a artist", function () {
            sinon.stub(faker.music, 'artist').returns('Queen');
            var artist = faker.music.artist();

            assert.strictEqual(artist, 'Queen');
            faker.music.artist.restore();
        });
    });
    
    describe("song()", function () {
        it("returns a song", function () {
            sinon.stub(faker.music, 'song').returns('Angie');
            var song = faker.music.song();

            assert.strictEqual(song, 'Angie');
            faker.music.song.restore();
        });
    });
});
