var faker = require('../index');

var image = {
  avatar: function () {
    return faker.random.avatar_uri();
  },
  imageUrl: function (width, height, category) {
      var width = width || 640;
      var height = height || 480;

      var url ='http://lorempixel.com/' + width + '/' + height;
      if (typeof category !== 'undefined') {
        url += '/' + category;
      }
      return url;
  },
  abstractImage: function (width, height) {
    return this.imageUrl(width, height, 'abstract');
  },
  animals: function (width, height) {
    return this.imageUrl(width, height, 'animals');
  },
  business: function (width, height) {
    return this.imageUrl(width, height, 'business');
  },
  cats: function (width, height) {
    return this.imageUrl(width, height, 'cats');
  },
  city: function (width, height) {
    return this.imageUrl(width, height, 'city');
  },
  food: function (width, height) {
    return this.imageUrl(width, height, 'food');
  },
  nightlife: function (width, height) {
    return this.imageUrl(width, height, 'nightlife');
  },
  fashion: function (width, height) {
    return this.imageUrl(width, height, 'fashion');
  },
  people: function (width, height) {
    return this.imageUrl(width, height, 'people');
  },
  nature: function (width, height) {
    return this.imageUrl(width, height, 'nature');
  },
  sports: function (width, height) {
    return this.imageUrl(width, height, 'sports');
  },
  technics: function (width, height) {
    return this.imageUrl(width, height, 'technics');
  },
  transport: function (width, height) {
    return this.imageUrl(width, height, 'transport');
  }
};

module.exports = image;
