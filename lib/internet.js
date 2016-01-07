var password_generator = require('../vendor/password-generator.js'),
    random_ua = require('../vendor/user-agent');
    require('randexp').sugar();

var Internet = function (faker) {
  var self = this;
  self.avatar = function () {
      return faker.random.arrayElement(faker.definitions.internet.avatar_uri);
  };

  self.email = function (firstName, lastName, provider) {
      provider = provider || faker.random.arrayElement(faker.definitions.internet.free_email);
      return  faker.helpers.slugify(faker.internet.userName(firstName, lastName)) + "@" + provider;
  };

  self.userName = function (firstName, lastName) {
      var result;
      firstName = firstName || faker.name.firstName();
      lastName = lastName || faker.name.lastName();
      switch (faker.random.number(2)) {
      case 0:
          result = firstName + faker.random.number(99);
          break;
      case 1:
          result = firstName + faker.random.arrayElement([".", "_"]) + lastName;
          break;
      case 2:
          result = firstName + faker.random.arrayElement([".", "_"]) + lastName + faker.random.number(99);
          break;
      }
      result = result.toString().replace(/'/g, "");
      result = result.replace(/ /g, "");
      return result;
  };

  self.protocol = function () {
      var protocols = ['http','https'];
      return faker.random.arrayElement(protocols);
  };

  self.url = function () {
      return faker.internet.protocol() + '://' + faker.internet.domainName();
  };

  self.domainName = function () {
      return faker.internet.domainWord() + "." + faker.internet.domainSuffix();
  };

  self.domainSuffix = function () {
      return faker.random.arrayElement(faker.definitions.internet.domain_suffix);
  };

  self.domainWord = function () {
      return faker.name.firstName().replace(/([\\~#&*{}/:<>?|\"])/ig, '').toLowerCase();
  };

  self.ip = function () {
      var ipv4 = /^63\.212\.171\.(25[0-4]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)$/;
      return ipv4.gen();
  };

  self.userAgent = function () {
    return random_ua.generate();
  };

  self.color = function (baseRed255, baseGreen255, baseBlue255) {
      baseRed255 = baseRed255 || 0;
      baseGreen255 = baseGreen255 || 0;
      baseBlue255 = baseBlue255 || 0;
      // based on awesome response : http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
      var red = Math.floor((faker.random.number(256) + baseRed255) / 2);
      var green = Math.floor((faker.random.number(256) + baseGreen255) / 2);
      var blue = Math.floor((faker.random.number(256) + baseBlue255) / 2);
      var redStr = red.toString(16);
      var greenStr = green.toString(16);
      var blueStr = blue.toString(16);
      return '#' +
        (redStr.length === 1 ? '0' : '') + redStr +
        (greenStr.length === 1 ? '0' : '') + greenStr +
        (blueStr.length === 1 ? '0': '') + blueStr;

  };

  self.mac = function(){
      var mac = /^([0-9A-Fa-f]{1,2}:){5}([0-9A-Fa-f]{1,2})$/
      return regex.gen();
  };

  self.password = function (len, memorable, pattern, prefix) {
    len = len || 15;
    if (typeof memorable === "undefined") {
      memorable = false;
    }
    return password_generator(len, memorable, pattern, prefix);
  }

};


module["exports"] = Internet;
