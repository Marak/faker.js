if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("image.js", function () {
    describe("imageUrl()", function () {
        it("returns a random image url from lorempixel", function () {
            var imageUrl = Faker.Image.LoremPixel.imageUrl();

            assert.equal(imageUrl, 'http://lorempixel.com/640/480');
        });
        it("returns a random image url from lorempixel with width and height", function () {
            var imageUrl = Faker.Image.LoremPixel.imageUrl(100, 100);

            assert.equal(imageUrl, 'http://lorempixel.com/100/100');
        });
        it("returns a random image url in an abstract category", function () {
            var imageUrl = Faker.Image.LoremPixel.imageUrl(100, 100, 'abstract');

            assert.equal(imageUrl, 'http://lorempixel.com/100/100/abstract');
        });
        it("returns a random image url in a category via proxy methods", function () {
            var nightlife = Faker.Image.LoremPixel.nightlife();
            assert.equal(nightlife, 'http://lorempixel.com/640/480/nightlife');

            var city = Faker.Image.LoremPixel.city();
            assert.equal(city, 'http://lorempixel.com/640/480/city');

            var fashion = Faker.Image.LoremPixel.fashion();
            assert.equal(fashion, 'http://lorempixel.com/640/480/fashion');
        });
        it("return a random avatar from UIFaces", function () {
            assert.notEqual(-1, Faker.Image.UIFaces.avatar().indexOf('s3.amazonaws.com/uifaces/faces'));
        })
    });
});
