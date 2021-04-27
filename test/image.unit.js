if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("image.js", function () {
  describe("lorempicsum", function() {
    describe("imageUrl()", function () {
      it("returns a random image url from lorempixel", function () {
        var imageUrl = faker.image.lorempicsum.imageUrl();
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/640/480');
      });
      it("returns a random image url from lorem picsum with width and height", function () {
        var imageUrl = faker.image.lorempicsum.imageUrl(100, 100);
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/100/100');
      });
      it("returns a random image url grayscaled", function () {
        var imageUrl = faker.image.lorempicsum.imageUrl(100, 100, true);
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/100/100?grayscale');
      });

      it("returns a random image url grayscaled and blurred", function () {
        var imageUrl = faker.image.lorempicsum.imageUrl(100, 100, true, 2);
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/100/100?grayscale&blur=2');
      });

      it("returns a random image url blurred", function () {
        var imageUrl = faker.image.lorempicsum.imageUrl(100, 100, undefined, 2);
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/100/100?blur=2');
      });

      it("returns a random image url with seed", function () {
        var imageUrl = faker.image.lorempicsum.imageUrl(100, 100, undefined, undefined, 'picsum');
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/seed/picsum/100/100');
      });
    });
    describe("avatar()", function () {
      it("return a random avatar from FakerCloud", function () {
        assert.notStrictEqual(-1, faker.image.lorempicsum.avatar().indexOf('cdn.fakercloud.com/avatars'));
      })
    });

    describe("imageGrayscale()", function () {
      it("returns a random URL with grayscale image", function () {
        var imageUrl = faker.image.lorempicsum.imageGrayscale(100, 100, true);
                
        assert.strictEqual(imageUrl, 'https://picsum.photos/100/100?grayscale');
      });
    });
    describe("imageBlurred()", function () {
      it("returns a random image url blurred", function () {
        var imageUrl = faker.image.lorempicsum.imageBlurred(100, 100, 2);
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/100/100?blur=2');
      });
    });
    describe("imageRandomSeeded()", function () {
      it("returns a random image url blurred", function () {
        var imageUrl = faker.image.lorempicsum.imageRandomSeeded(100, 100, undefined, undefined, 'picsum');
    
        assert.strictEqual(imageUrl, 'https://picsum.photos/seed/picsum/100/100');
      });
    });
  });

  describe("lorempixel", function() {
    describe("imageUrl()", function () {
      it("returns a random image url from lorempixel", function () {
        var imageUrl = faker.image.lorempixel.imageUrl();

        assert.strictEqual(imageUrl, 'https://lorempixel.com/640/480');
      });
      it("returns a random image url from lorempixel with width and height", function () {
        var imageUrl = faker.image.lorempixel.imageUrl(100, 100);

        assert.strictEqual(imageUrl, 'https://lorempixel.com/100/100');
      });
      it("returns a random image url for a specified category", function () {
        var imageUrl = faker.image.lorempixel.imageUrl(100, 100, 'abstract');

        assert.strictEqual(imageUrl, 'https://lorempixel.com/100/100/abstract');
      });
    });
    describe("avatar()", function () {
      it("return a random avatar from FakerCloud", function () {
        assert.notStrictEqual(-1, faker.image.lorempixel.avatar().indexOf('cdn.fakercloud.com/avatars'));
      })
    });
    describe("abstract()", function () {
      it("returns a random abstract image url", function () {
        var abstract = faker.image.lorempixel.abstract();
        assert.strictEqual(abstract, 'https://lorempixel.com/640/480/abstract');
      });
    });
    describe("animals()", function () {
      it("returns a random animals image url", function () {
        var animals = faker.image.lorempixel.animals();
        assert.strictEqual(animals, 'https://lorempixel.com/640/480/animals');
      });
    });
    describe("business()", function () {
      it("returns a random business image url", function () {
        var business = faker.image.lorempixel.business();
        assert.strictEqual(business, 'https://lorempixel.com/640/480/business');
      });
    });
    describe("cats()", function () {
      it("returns a random cats image url", function () {
        var cats = faker.image.lorempixel.cats();
        assert.strictEqual(cats, 'https://lorempixel.com/640/480/cats');
      });
    });
    describe("city()", function () {
      it("returns a random city image url", function () {
        var city = faker.image.lorempixel.city();
        assert.strictEqual(city, 'https://lorempixel.com/640/480/city');
      });
    });
    describe("food()", function () {
      it("returns a random food image url", function () {
        var food = faker.image.lorempixel.food();
        assert.strictEqual(food, 'https://lorempixel.com/640/480/food');
      });
    });
    describe("nightlife()", function () {
      it("returns a random nightlife image url", function () {
        var nightlife = faker.image.lorempixel.nightlife();
        assert.strictEqual(nightlife, 'https://lorempixel.com/640/480/nightlife');
      });
    });
    describe("fashion()", function () {
      it("returns a random fashion image url", function () {
        var fashion = faker.image.lorempixel.fashion();
        assert.strictEqual(fashion, 'https://lorempixel.com/640/480/fashion');
      });
    });
    describe("people()", function () {
      it("returns a random people image url", function () {
        var people = faker.image.lorempixel.people();
        assert.strictEqual(people, 'https://lorempixel.com/640/480/people');
      });
    });
    describe("nature()", function () {
      it("returns a random nature image url", function () {
        var nature = faker.image.lorempixel.nature();
        assert.strictEqual(nature, 'https://lorempixel.com/640/480/nature');
      });
    });
    describe("sports()", function () {
      it("returns a random sports image url", function () {
        var sports = faker.image.lorempixel.sports();
        assert.strictEqual(sports, 'https://lorempixel.com/640/480/sports');
      });
    });
    describe("technics()", function () {
      it("returns a random technics image url", function () {
        var technics = faker.image.lorempixel.technics();
        assert.strictEqual(technics, 'https://lorempixel.com/640/480/technics');
      });
    });
    describe("transport()", function () {
      it("returns a random transport image url", function () {
        var transport = faker.image.lorempixel.transport();
        assert.strictEqual(transport, 'https://lorempixel.com/640/480/transport');
      });
    });
  });

  describe("unsplash", function() {
    describe("imageUrl()", function () {
      it("returns a random image url from unsplash", function () {
        var imageUrl = faker.image.unsplash.imageUrl();

        assert.strictEqual(imageUrl, 'https://source.unsplash.com/640x480');
      });
      it("returns a random image url from unsplash with width and height", function () {
        var imageUrl = faker.image.unsplash.imageUrl(100, 100);

        assert.strictEqual(imageUrl, 'https://source.unsplash.com/100x100');
      });
      it("returns a random image url for a specified category", function () {
        var imageUrl = faker.image.unsplash.imageUrl(100, 100, 'food');

        assert.strictEqual(imageUrl, 'https://source.unsplash.com/category/food/100x100');
      });
      it("returns a random image url with correct keywords for a specified category", function () {
        var imageUrl = faker.image.unsplash.imageUrl(100, 100, 'food', 'keyword1,keyword2');

        assert.strictEqual(imageUrl, 'https://source.unsplash.com/category/food/100x100?keyword1,keyword2');
      });
      it("returns a random image url without keyword which format is wrong for a specified category", function () {
        var imageUrl = faker.image.unsplash.imageUrl(100, 100, 'food', 'keyword1,?ds)0123$*908932409');

        assert.strictEqual(imageUrl, 'https://source.unsplash.com/category/food/100x100');
      });
    });
    describe("image()", function() {
      it("returns a searching image url with keyword", function () {
        var food = faker.image.unsplash.image(100, 200, 'keyword1,keyword2,keyword3');
        assert.strictEqual(food, 'https://source.unsplash.com/100x200?keyword1,keyword2,keyword3');
      });
    })
    describe("food()", function () {
      it("returns a random food image url", function () {
        var food = faker.image.unsplash.food();
        assert.strictEqual(food, 'https://source.unsplash.com/category/food/640x480');
      });
    });
    describe("people()", function () {
      it("returns a random people image url", function () {
        var people = faker.image.unsplash.people();
        assert.strictEqual(people, 'https://source.unsplash.com/category/people/640x480');
      });
    });
    describe("nature()", function () {
      it("returns a random nature image url", function () {
        var nature = faker.image.unsplash.nature();
        assert.strictEqual(nature, 'https://source.unsplash.com/category/nature/640x480');
      });
    });
    describe("technology()", function () {
      it("returns a random technology image url", function () {
        var transport = faker.image.unsplash.technology();
        assert.strictEqual(transport, 'https://source.unsplash.com/category/technology/640x480');
      });
    });
    describe("objects()", function () {
      it("returns a random objects image url", function () {
        var transport = faker.image.unsplash.objects();
        assert.strictEqual(transport, 'https://source.unsplash.com/category/objects/640x480');
      });
    });
    describe("buildings()", function () {
      it("returns a random buildings image url", function () {
        var transport = faker.image.unsplash.buildings();
        assert.strictEqual(transport, 'https://source.unsplash.com/category/buildings/640x480');
      });
    });
  });
  describe("dataUri", function () {
    it("returns a blank data", function () {
      var dataUri = faker.image.dataUri(200,300);
      assert.strictEqual(dataUri, 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%3C%2Fsvg%3E');
    });
    it("returns a customed background color data URI", function () {
      var dataUri = faker.image.dataUri(200, 300, 'red');
      assert.strictEqual(dataUri, 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22red%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%3C%2Fsvg%3E');
    });
  });
});
