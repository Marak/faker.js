var faker = require('../index');

// backword-compatibility
exports.randomNumber = function (range) {
    return faker.random.number(range);
};

// backword-compatibility
exports.randomize = function (array) {
    return faker.random.array_element(array);
};

// slugifies string
exports.slugify = function (string) {
    return string.replace(/ /g, '-').replace(/[^\w\.\-]+/g, '');
};

// parses string for a symbol and replace it with a random number from 1-10
exports.replaceSymbolWithNumber = function (string, symbol) {
    // default symbol is '#'
    if (symbol === undefined) {
        symbol = '#';
    }

    var str = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            str += Math.floor(Math.random() * 10);
        } else {
            str += string[i];
        }
    }
    return str;
};

// takes an array and returns it randomized
exports.shuffle = function (o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

exports.createCard = function () {
    return {
        "name": faker.Name.findName(),
        "username": faker.Internet.userName(),
        "email": faker.Internet.email(),
        "address": {
            "streetA": faker.Address.streetName(),
            "streetB": faker.Address.streetAddress(),
            "streetC": faker.Address.streetAddress(true),
            "streetD": faker.Address.secondaryAddress(),
            "city": faker.Address.city(),
            "ukCounty": faker.Address.ukCounty(),
            "ukCountry": faker.Address.ukCountry(),
            "zipcode": faker.Address.zipCode(),
            "geo": {
                "lat": faker.Address.latitude(),
                "lng": faker.Address.longitude()
            }
        },
        "phone": faker.PhoneNumber.phoneNumber(),
        "website": faker.Internet.domainName(),
        "company": {
            "name": faker.Company.companyName(),
            "catchPhrase": faker.Company.catchPhrase(),
            "bs": faker.Company.bs()
        },
        "posts": [
            {
                "words": faker.Lorem.words(),
                "sentence": faker.Lorem.sentence(),
                "sentences": faker.Lorem.sentences(),
                "paragraph": faker.Lorem.paragraph()
            },
            {
                "words": faker.Lorem.words(),
                "sentence": faker.Lorem.sentence(),
                "sentences": faker.Lorem.sentences(),
                "paragraph": faker.Lorem.paragraph()
            },
            {
                "words": faker.Lorem.words(),
                "sentence": faker.Lorem.sentence(),
                "sentences": faker.Lorem.sentences(),
                "paragraph": faker.Lorem.paragraph()
            }
        ]
    };
};


exports.userCard = function () {
    return {
        "name": faker.Name.findName(),
        "username": faker.Internet.userName(),
        "email": faker.Internet.email(),
        "address": {
            "street": faker.Address.streetName(true),
            "suite": faker.Address.secondaryAddress(),
            "city": faker.Address.city(),
            "zipcode": faker.Address.zipCode(),
            "geo": {
                "lat": faker.Address.latitude(),
                "lng": faker.Address.longitude()
            }
        },
        "phone": faker.PhoneNumber.phoneNumber(),
        "website": faker.Internet.domainName(),
        "company": {
            "name": faker.Company.companyName(),
            "catchPhrase": faker.Company.catchPhrase(),
            "bs": faker.Company.bs()
        }
    };
};


/*
String.prototype.capitalize = function () { //v1.0
    return this.replace(/\w+/g, function (a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};
*/
