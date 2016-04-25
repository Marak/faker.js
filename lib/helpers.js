/**
 *
 * @namespace faker.helpers
 */
var Helpers = function (faker) {

  var self = this;

  /**
   * backword-compatibility
   *
   * @method faker.helpers.randomize
   * @param {array} array
   */
  self.randomize = function (array) {
      array = array || ["a", "b", "c"];
      return faker.random.arrayElement(array);
  };

  /**
   * slugifies string
   *
   * @method faker.helpers.slugify
   * @param {string} string
   */
  self.slugify = function (string) {
      string = string || "";
      return string.replace(/ /g, '-').replace(/[^\w\.\-]+/g, '');
  };

  /**
   * parses string for a symbol and replace it with a random number from 1-10
   *
   * @method faker.helpers.replaceSymbolWithNumber
   * @param {string} string
   * @param {string} symbol defaults to `"#"`
   */
  self.replaceSymbolWithNumber = function (string, symbol) {
      string = string || "";
      // default symbol is '#'
      if (symbol === undefined) {
          symbol = '#';
      }

      var str = '';
      for (var i = 0; i < string.length; i++) {
          if (string.charAt(i) == symbol) {
              str += faker.random.number(9);
          } else {
              str += string.charAt(i);
          }
      }
      return str;
  };

  /**
   * parses string for symbols (numbers or letters) and replaces them appropriately
   *
   * @method faker.helpers.replaceSymbols
   * @param {string} string
   */
  self.replaceSymbols = function (string) {
      string = string || "";
  	var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      var str = '';

      for (var i = 0; i < string.length; i++) {
          if (string.charAt(i) == "#") {
              str += faker.random.number(9);
  		} else if (string.charAt(i) == "?") {
  			str += faker.random.arrayElement(alpha);
          } else {
              str += string.charAt(i);
          }
      }
      return str;
  };

  /**
   * takes an array and returns it randomized
   *
   * @method faker.helpers.shuffle
   * @param {array} o
   */
  self.shuffle = function (o) {
      o = o || ["a", "b", "c"];
      for (var j, x, i = o.length-1; i; j = faker.random.number(i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  /**
   * mustache
   *
   * @method faker.helpers.mustache
   * @param {string} str
   * @param {object} data
   */
  self.mustache = function (str, data) {
    if (typeof str === 'undefined') {
      return '';
    }
    for(var p in data) {
      var re = new RegExp('{{' + p + '}}', 'g')
      str = str.replace(re, data[p]);
    }
    return str;
  };

  /**
   * createCard
   *
   * @method faker.helpers.createCard
   */
  self.createCard = function () {
      return {
          "name": faker.name.findName(),
          "username": faker.internet.userName(),
          "email": faker.internet.email(),
          "address": {
              "streetA": faker.address.streetName(),
              "streetB": faker.address.streetAddress(),
              "streetC": faker.address.streetAddress(true),
              "streetD": faker.address.secondaryAddress(),
              "city": faker.address.city(),
              "state": faker.address.state(),
              "country": faker.address.country(),
              "zipcode": faker.address.zipCode(),
              "geo": {
                  "lat": faker.address.latitude(),
                  "lng": faker.address.longitude()
              }
          },
          "phone": faker.phone.phoneNumber(),
          "website": faker.internet.domainName(),
          "company": {
              "name": faker.company.companyName(),
              "catchPhrase": faker.company.catchPhrase(),
              "bs": faker.company.bs()
          },
          "posts": [
              {
                  "words": faker.lorem.words(),
                  "sentence": faker.lorem.sentence(),
                  "sentences": faker.lorem.sentences(),
                  "paragraph": faker.lorem.paragraph()
              },
              {
                  "words": faker.lorem.words(),
                  "sentence": faker.lorem.sentence(),
                  "sentences": faker.lorem.sentences(),
                  "paragraph": faker.lorem.paragraph()
              },
              {
                  "words": faker.lorem.words(),
                  "sentence": faker.lorem.sentence(),
                  "sentences": faker.lorem.sentences(),
                  "paragraph": faker.lorem.paragraph()
              }
          ],
          "accountHistory": [faker.helpers.createTransaction(), faker.helpers.createTransaction(), faker.helpers.createTransaction()]
      };
  };

  /**
   * contextualCard
   *
   * @method faker.helpers.contextualCard
   */
  self.contextualCard = function () {
    var name = faker.name.firstName(),
        userName = faker.internet.userName(name);
    return {
        "name": name,
        "username": userName,
        "avatar": faker.internet.avatar(),
        "email": faker.internet.email(userName),
        "dob": faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)")),
        "phone": faker.phone.phoneNumber(),
        "address": {
            "street": faker.address.streetName(true),
            "suite": faker.address.secondaryAddress(),
            "city": faker.address.city(),
            "zipcode": faker.address.zipCode(),
            "geo": {
                "lat": faker.address.latitude(),
                "lng": faker.address.longitude()
            }
        },
        "website": faker.internet.domainName(),
        "company": {
            "name": faker.company.companyName(),
            "catchPhrase": faker.company.catchPhrase(),
            "bs": faker.company.bs()
        }
    };
  };


  /**
   * userCard
   *
   * @method faker.helpers.userCard
   */
  self.userCard = function () {
      return {
          "name": faker.name.findName(),
          "username": faker.internet.userName(),
          "email": faker.internet.email(),
          "address": {
              "street": faker.address.streetName(true),
              "suite": faker.address.secondaryAddress(),
              "city": faker.address.city(),
              "zipcode": faker.address.zipCode(),
              "geo": {
                  "lat": faker.address.latitude(),
                  "lng": faker.address.longitude()
              }
          },
          "phone": faker.phone.phoneNumber(),
          "website": faker.internet.domainName(),
          "company": {
              "name": faker.company.companyName(),
              "catchPhrase": faker.company.catchPhrase(),
              "bs": faker.company.bs()
          }
      };
  };

  /**
   * createTransaction
   *
   * @method faker.helpers.createTransaction
   */
  self.createTransaction = function(){
    return {
      "amount" : faker.finance.amount(),
      "date" : new Date(2012, 1, 2),  //TODO: add a ranged date method
      "business": faker.company.companyName(),
      "name": [faker.finance.accountName(), faker.finance.mask()].join(' '),
      "type" : self.randomize(faker.definitions.finance.transaction_type),
      "account" : faker.finance.account()
    };
  };

  function stringToPath(string) {
    /** Used to match property names within property paths. */
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;    

    var result = [];
    string.replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  };  

  function getProp(object, path) {
    if (object != null && typeof(path) == "string" && path in Object(object))
      path = [path];
    else
      path = stringToPath(path);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return (index && index == length) ? object : undefined;
  };

  /**
   * Generate fake data by locale formats
   * @param {string} path 
   * @method faker.helpers.generate
   */
  self.generate = function(path) {
    var locale = faker.locales[faker.locale];
    return self.generateBy(locale, path);
  };

  self.generateBy = function(def, path) {
    var arr = getProp(def, path.toLowerCase());
    var item;
    if (typeof(arr) == "string")
      item = arr;
    else if (arr && arr.length > 0)
      item = faker.random.arrayElement(arr);

    if (item) {
      if (item.indexOf("#{") != -1) {
        item = item.replace(/\#\{([A-Za-z_\.]+)\}/g, function(match, cap) {
          if (cap.indexOf(".") != -1)
            return self.generateBy(def, cap);
          else {
            var newPath = cap;
            var parts = path.split(".");
            if (parts.length > 1) {
              parts.pop();
              newPath = parts.join(".") + "." + cap;
            }
            return self.generateBy(def, newPath);
          }
        });
      }
      item = self.replaceSymbols(item);
      return item;
    }
  };  

  return self;

};


/*
String.prototype.capitalize = function () { //v1.0
    return this.replace(/\w+/g, function (a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};
*/

module['exports'] = Helpers;
