var faker = require('../index');

// backword-compatibility
exports.randomNumber = function (range) {
    return faker.random.number(range);
};

// backword-compatibility
exports.randomize = function (array) {
    array = array || ["a", "b", "c"];
    return faker.random.array_element(array);
};

// slugifies string
exports.slugify = function (string) {
    string = string || "";
    return string.replace(/ /g, '-').replace(/[^\w\.\-]+/g, '');
};

// parses string for a symbol and replace it with a random number from 1-10
exports.replaceSymbolWithNumber = function (string, symbol) {
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

// parses string for symbols (numbers or letters) and replaces them appropriately
exports.replaceSymbols = function (string) {
    string = string || "";
	var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var str = '';
	
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == "#") {
            str += faker.random.number(9);
		} else if (string.charAt(i) == "?") {
			str += alpha[Math.floor(Math.random() * alpha.length)];
        } else {
            str += string.charAt(i);
        }
    }
    return str;
};

// takes an array and returns it randomized
exports.shuffle = function (o) {
    o = o || ["a", "b", "c"];
    for (var j, x, i = o.length; i; j = faker.random.number(i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

exports.mustache = function (str, data) {
  for(var p in data) {
    var re = new RegExp('{{' + p + '}}', 'g')
    str = str.replace(re, data[p]);
  }
  return str;
};

exports.createCard = function () {
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

exports.contextualCard = function () {
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


exports.userCard = function () {
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

exports.createTransaction = function(){
  return {
    "amount" : faker.finance.amount(),
    "date" : new Date(2012, 1, 2),  //TODO: add a ranged date method
    "business": faker.company.companyName(),
    "name": [faker.finance.accountName(), faker.finance.mask()].join(' '),
    "type" : exports.randomize(faker.definitions.finance.transaction_type),
    "account" : faker.finance.account()
  };
};

/*
String.prototype.capitalize = function () { //v1.0
    return this.replace(/\w+/g, function (a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};
*/

