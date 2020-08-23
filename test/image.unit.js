if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("image.js", function () {
    describe("lorempixel", function() {
      describe("imageUrl()", function () {
        it("returns a random image url from lorempixel", function () {
            var imageUrl = faker.image.lorempixel.imageUrl();

            assert.equal(imageUrl, 'https://lorempixel.com/640/480');
        });
        it("returns a random image url from lorempixel with width and height", function () {
            var imageUrl = faker.image.lorempixel.imageUrl(100, 100);

            assert.equal(imageUrl, 'https://lorempixel.com/100/100');
        });
        it("returns a random image url for a specified category", function () {
            var imageUrl = faker.image.lorempixel.imageUrl(100, 100, 'abstract');

            assert.equal(imageUrl, 'https://lorempixel.com/100/100/abstract');
        });
      });
      describe("avatar()", function () {
          it("return a random avatar from UIFaces", function () {
              assert.notEqual(-1, faker.image.lorempixel.avatar().indexOf('s3.amazonaws.com/uifaces/faces'));
          })
      });
      describe("abstract()", function () {
          it("returns a random abstract image url", function () {
              var abstract = faker.image.lorempixel.abstract();
              assert.equal(abstract, 'https://lorempixel.com/640/480/abstract');
          });
      });
      describe("animals()", function () {
          it("returns a random animals image url", function () {
              var animals = faker.image.lorempixel.animals();
              assert.equal(animals, 'https://lorempixel.com/640/480/animals');
          });
      });
      describe("business()", function () {
          it("returns a random business image url", function () {
              var business = faker.image.lorempixel.business();
              assert.equal(business, 'https://lorempixel.com/640/480/business');
          });
      });
      describe("cats()", function () {
          it("returns a random cats image url", function () {
              var cats = faker.image.lorempixel.cats();
              assert.equal(cats, 'https://lorempixel.com/640/480/cats');
          });
      });
      describe("city()", function () {
          it("returns a random city image url", function () {
              var city = faker.image.lorempixel.city();
              assert.equal(city, 'https://lorempixel.com/640/480/city');
          });
      });
      describe("food()", function () {
          it("returns a random food image url", function () {
              var food = faker.image.lorempixel.food();
              assert.equal(food, 'https://lorempixel.com/640/480/food');
          });
      });
      describe("nightlife()", function () {
          it("returns a random nightlife image url", function () {
              var nightlife = faker.image.lorempixel.nightlife();
              assert.equal(nightlife, 'https://lorempixel.com/640/480/nightlife');
          });
      });
      describe("fashion()", function () {
          it("returns a random fashion image url", function () {
              var fashion = faker.image.lorempixel.fashion();
              assert.equal(fashion, 'https://lorempixel.com/640/480/fashion');
          });
      });
      describe("people()", function () {
          it("returns a random people image url", function () {
              var people = faker.image.lorempixel.people();
              assert.equal(people, 'https://lorempixel.com/640/480/people');
          });
      });
      describe("nature()", function () {
          it("returns a random nature image url", function () {
              var nature = faker.image.lorempixel.nature();
              assert.equal(nature, 'https://lorempixel.com/640/480/nature');
          });
      });
      describe("sports()", function () {
          it("returns a random sports image url", function () {
              var sports = faker.image.lorempixel.sports();
              assert.equal(sports, 'https://lorempixel.com/640/480/sports');
          });
      });
      describe("technics()", function () {
          it("returns a random technics image url", function () {
              var technics = faker.image.lorempixel.technics();
              assert.equal(technics, 'https://lorempixel.com/640/480/technics');
          });
      });
      describe("transport()", function () {
          it("returns a random transport image url", function () {
              var transport = faker.image.lorempixel.transport();
              assert.equal(transport, 'https://lorempixel.com/640/480/transport');
          });
      });
    });

    describe("unsplash", function() {
      describe("imageUrl()", function () {
        it("returns a random image url from unsplash", function () {
            var imageUrl = faker.image.unsplash.imageUrl();

            assert.equal(imageUrl, 'https://source.unsplash.com/640x480');
        });
        it("returns a random image url from unsplash with width and height", function () {
            var imageUrl = faker.image.unsplash.imageUrl(100, 100);

            assert.equal(imageUrl, 'https://source.unsplash.com/100x100');
        });
        it("returns a random image url for a specified category", function () {
            var imageUrl = faker.image.unsplash.imageUrl(100, 100, 'food');

            assert.equal(imageUrl, 'https://source.unsplash.com/category/food/100x100');
        });
        it("returns a random image url with correct keywords for a specified category", function () {
            var imageUrl = faker.image.unsplash.imageUrl(100, 100, 'food', 'keyword1,keyword2');

            assert.equal(imageUrl, 'https://source.unsplash.com/category/food/100x100?keyword1,keyword2');
        });
        it("returns a random image url without keyword which format is wrong for a specified category", function () {
            var imageUrl = faker.image.unsplash.imageUrl(100, 100, 'food', 'keyword1,?ds)0123$*908932409');

            assert.equal(imageUrl, 'https://source.unsplash.com/category/food/100x100');
        });
      });
      describe("image()", function() {
          it("returns a searching image url with keyword", function () {
              var food = faker.image.unsplash.image(100, 200, 'keyword1,keyword2,keyword3');
              assert.equal(food, 'https://source.unsplash.com/100x200?keyword1,keyword2,keyword3');
          });
      })
      describe("food()", function () {
          it("returns a random food image url", function () {
              var food = faker.image.unsplash.food();
              assert.equal(food, 'https://source.unsplash.com/category/food/640x480');
          });
      });
      describe("people()", function () {
          it("returns a random people image url", function () {
              var people = faker.image.unsplash.people();
              assert.equal(people, 'https://source.unsplash.com/category/people/640x480');
          });
      });
      describe("nature()", function () {
          it("returns a random nature image url", function () {
              var nature = faker.image.unsplash.nature();
              assert.equal(nature, 'https://source.unsplash.com/category/nature/640x480');
          });
      });
      describe("technology()", function () {
          it("returns a random technology image url", function () {
              var transport = faker.image.unsplash.technology();
              assert.equal(transport, 'https://source.unsplash.com/category/technology/640x480');
          });
      });
      describe("objects()", function () {
          it("returns a random objects image url", function () {
              var transport = faker.image.unsplash.objects();
              assert.equal(transport, 'https://source.unsplash.com/category/objects/640x480');
          });
      });
      describe("buildings()", function () {
          it("returns a random buildings image url", function () {
              var transport = faker.image.unsplash.buildings();
              assert.equal(transport, 'https://source.unsplash.com/category/buildings/640x480');
          });
      });
    });
    describe("dataUri", function () {
        it("returns a blank data", function () {
            var dataUri = faker.image.dataUri(200,300);
            assert.equal(dataUri, 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%3C%2Fsvg%3E');
        });
        it("returns a customed background color data URI", function () {
            var dataUri = faker.image.dataUri(200, 300, 'red');
            assert.equal(dataUri, 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22red%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%3C%2Fsvg%3E');
        });
    });
});
