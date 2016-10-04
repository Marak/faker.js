if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("image.js", function () {
    describe("imageUrl()", function () {
        it("returns a random image url from lorempixel", function () {
            var imageUrl = faker.image.imageUrl();

            assert.equal(imageUrl, 'http://lorempixel.com/640/480');
        });
        it("returns a random image url from lorempixel with width and height", function () {
            var imageUrl = faker.image.imageUrl(100, 100);

            assert.equal(imageUrl, 'http://lorempixel.com/100/100');
        });
        it("returns a random image url for a specified category", function () {
            var imageUrl = faker.image.imageUrl(100, 100, 'abstract');

            assert.equal(imageUrl, 'http://lorempixel.com/100/100/abstract');
        });
        /*
        it.only("returns a random image url from lorempixel with a randomizer", function () {
            var imageUrl = faker.image.imageUrl(100, 100, undefined, true);

            console.log(imageUrl);
            assert.ok(imageUrl.match(/^http:\/\/lorempixel.com\/100\/100\?[\d]+$/));
        });
        */
    });
    describe("avatar()", function () {
        it("return a random avatar from UIFaces", function () {
            assert.notEqual(-1, faker.image.avatar().indexOf('s3.amazonaws.com/uifaces/faces'));
        })
    });
    describe("abstract()", function () {
        it("returns a random abstract image url", function () {
            var abstract = faker.image.abstract();
            assert.equal(abstract, 'http://lorempixel.com/640/480/abstract');
        });
    });
    describe("animals()", function () {
        it("returns a random animals image url", function () {
            var animals = faker.image.animals();
            assert.equal(animals, 'http://lorempixel.com/640/480/animals');
        });
    });
    describe("business()", function () {
        it("returns a random business image url", function () {
            var business = faker.image.business();
            assert.equal(business, 'http://lorempixel.com/640/480/business');
        });
    });
    describe("cats()", function () {
        it("returns a random cats image url", function () {
            var cats = faker.image.cats();
            assert.equal(cats, 'http://lorempixel.com/640/480/cats');
        });
    });
    describe("city()", function () {
        it("returns a random city image url", function () {
            var city = faker.image.city();
            assert.equal(city, 'http://lorempixel.com/640/480/city');
        });
    });
    describe("food()", function () {
        it("returns a random food image url", function () {
            var food = faker.image.food();
            assert.equal(food, 'http://lorempixel.com/640/480/food');
        });
    });
    describe("nightlife()", function () {
        it("returns a random nightlife image url", function () {
            var nightlife = faker.image.nightlife();
            assert.equal(nightlife, 'http://lorempixel.com/640/480/nightlife');
        });
    });
    describe("fashion()", function () {
        it("returns a random fashion image url", function () {
            var fashion = faker.image.fashion();
            assert.equal(fashion, 'http://lorempixel.com/640/480/fashion');
        });
    });
    describe("people()", function () {
        it("returns a random people image url", function () {
            var people = faker.image.people();
            assert.equal(people, 'http://lorempixel.com/640/480/people');
        });
    });
    describe("nature()", function () {
        it("returns a random nature image url", function () {
            var nature = faker.image.nature();
            assert.equal(nature, 'http://lorempixel.com/640/480/nature');
        });
    });
    describe("sports()", function () {
        it("returns a random sports image url", function () {
            var sports = faker.image.sports();
            assert.equal(sports, 'http://lorempixel.com/640/480/sports');
        });
    });
    describe("technics()", function () {
        it("returns a random technics image url", function () {
            var technics = faker.image.technics();
            assert.equal(technics, 'http://lorempixel.com/640/480/technics');
        });
    });
    describe("transport()", function () {
        it("returns a random transport image url", function () {
            var transport = faker.image.transport();
            assert.equal(transport, 'http://lorempixel.com/640/480/transport');
        });
    });
    describe("dataurl", function () {
        it("returns a blank data", function () {
            var dataurl = faker.image.dataurl(200,300);
            assert.equal(dataurl, 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%20%3C%2Fsvg%3E');
        });
    });
});
