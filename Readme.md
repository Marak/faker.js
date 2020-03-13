# faker.js - generate massive amounts of fake data in the browser and node.js

![Faker.js](https://raw.githubusercontent.com/Marak/faker.js/master/logo.png)

[![Build Status](https://travis-ci.org/Marak/faker.js.svg?branch=master)](https://travis-ci.org/Marak/faker.js) [![Coverage Status](https://coveralls.io/repos/github/Marak/faker.js/badge.svg?branch=master)](https://coveralls.io/github/Marak/faker.js?branch=master)

[![npm version](https://badge.fury.io/js/faker.svg)](http://badge.fury.io/js/faker)

[![OpenCollective](https://opencollective.com/fakerjs/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/fakerjs/sponsors/badge.svg)](#sponsors)

## Demo

[https://rawgit.com/Marak/faker.js/master/examples/browser/index.html](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html)

## Hosted API Microservice

[http://faker.hook.io](http://faker.hook.io/)
 - Supports all Faker API Methods
 - Full-Featured Microservice
 - Hosted by [hook.io](http://hook.io)

```bash
curl http://faker.hook.io?property=name.findName&locale=de
```

## Usage

### Browser

    <script src = "faker.js" type = "text/javascript"></script>
    <script>
      var randomName = faker.name.findName(); // Caitlyn Kerluke
      var randomEmail = faker.internet.email(); // Rusty@arne.info
      var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    </script>

### Node.js

    var faker = require('faker');

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties

## API


### Faker.fake()

faker.js contains a super useful generator method `Faker.fake` for combining faker API methods using a mustache string format.

**Example:**

``` js
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Marks, Dean Sr."
```

This will interpolate the format string with the value of methods `name.lastName()`, `name.firstName()`, and `name.suffix()`

### JSDoc API Browser

[http://marak.github.io/faker.js/](http://marak.github.io/faker.js/)

### API Methods

* address
  * zipCode
  * city
  * cityPrefix
  * citySuffix
  * streetName
  * streetAddress
  * streetSuffix
  * streetPrefix
  * secondaryAddress
  * county
  * country
  * countryCode
  * state
  * stateAbbr
  * latitude
  * longitude
* commerce
  * color
  * department
  * productName
  * price
  * productAdjective
  * productMaterial
  * product
* company
  * suffixes
  * companyName
  * companySuffix
  * catchPhrase
  * bs
  * catchPhraseAdjective
  * catchPhraseDescriptor
  * catchPhraseNoun
  * bsAdjective
  * bsBuzz
  * bsNoun
* database
  * column
  * type
  * collation
  * engine
* date
  * past
  * future
  * between
  * recent
  * soon
  * month
  * weekday
* fake
* finance
  * account
  * accountName
  * mask
  * amount
  * transactionType
  * currencyCode
  * currencyName
  * currencySymbol
  * bitcoinAddress
  * ethereumAddress
  * iban
  * bic
* hacker
  * abbreviation
  * adjective
  * noun
  * verb
  * ingverb
  * phrase
* helpers
  * randomize
  * slugify
  * replaceSymbolWithNumber
  * replaceSymbols
  * shuffle
  * mustache
  * createCard
  * contextualCard
  * userCard
  * createTransaction
* image
  * image
  * avatar
  * imageUrl
  * abstract
  * animals
  * business
  * cats
  * city
  * food
  * nightlife
  * fashion
  * people
  * nature
  * sports
  * technics
  * transport
  * dataUri
* internet
  * avatar
  * email
  * exampleEmail
  * userName
  * protocol
  * url
  * domainName
  * domainSuffix
  * domainWord
  * ip
  * ipv6
  * userAgent
  * color
  * mac
  * password
* lorem
  * word
  * words
  * sentence
  * slug
  * sentences
  * paragraph
  * paragraphs
  * text
  * lines
* name
  * firstName
  * lastName
  * findName
  * jobTitle
  * prefix
  * suffix
  * title
  * jobDescriptor
  * jobArea
  * jobType
* phone
  * phoneNumber
  * phoneNumberFormat
  * phoneFormats
* random
  * number
  * float
  * arrayElement
  * objectElement
  * uuid
  * boolean
  * word
  * words
  * image
  * locale
  * alphaNumeric
  * hexaDecimal
* system
  * fileName
  * commonFileName
  * mimeType
  * commonFileType
  * commonFileExt
  * fileType
  * fileExt
  * directoryPath
  * filePath
  * semver


## Localization

As of version `v2.0.0` faker.js has support for multiple localities.

The default language locale is set to English.

Setting a new locale is simple:

```js
// sets locale to de
faker.setLocale("de");
// or
faker.locale = "de";
```

 * az
 * cz
 * de
 * de_AT
 * de_CH
 * en
 * en_AU
 * en_BORK
 * en_CA
 * en_GB
 * en_IE
 * en_IND
 * en_US
 * en_ZA
 * en_au_ocker
 * es
 * es_MX
 * fa
 * fr
 * fr_CA
 * ge
 * id_ID
 * it
 * ja
 * ko
 * nb_NO
 * nep
 * nl
 * pl
 * pt_BR
 * pt_PT
 * ru
 * sk
 * sv
 * tr
 * uk
 * vi
 * zh_CN
 * zh_TW


### Individual Localization Packages

As of vesion `v3.0.0` faker.js supports incremental loading of locales.

By default, requiring `faker` will include *all* locale data.

In a production environment, you may only want to include the locale data for a specific set of locales.

```js
// loads only de locale
var faker = require('faker/locale/de');
```

## Setting a randomness seed

If you want consistent results, you can set your own seed:

```js
faker.seed(123);

var firstRandom = faker.random.number();

// Setting the seed again resets the sequence.
faker.seed(123);

var secondRandom = faker.random.number();

console.log(firstRandom === secondRandom);
```

## Tests

    npm install .
    make test

You can view a code coverage report generated in coverage/lcov-report/index.html.

## Projects Built with faker.js

### Fake JSON Schema

Use faker generators to populate JSON Schema samples.
See: https://github.com/pateketrueke/json-schema-faker/

### CLI

Run faker generators from Command Line.
See: https://github.com/lestoni/faker-cli

**Want to see your project added here? Let us know!**

### Meteor

#### Meteor Installation

```
meteor add practicalmeteor:faker
```

#### Meteor Usage, both client and server

```js
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

## Building faker.js

faker uses [gulp](http://gulpjs.com/) to automate its build process. Running the following build command will generate new browser builds, documentation, and code examples for the project.

```
npm run-script build
```

## Building JSDocs

```
npm run-script doc
```

## Version Release Schedule

faker.js is a popular project used by many organizations and individuals in production settings. Major and Minor version releases are generally on a monthly schedule. Bugs fixes are addressed by severity and fixed as soon as possible.

If you require the absolute latest version of `faker.js` the `master` branch @ http://github.com/marak/faker.js/ should always be up to date and working.

## Maintainer

#### Marak Squires

faker.js - Copyright (c) 2017
Marak Squires
http://github.com/marak/faker.js/

faker.js was inspired by and has used data definitions from:

 * https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis
 * http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/fakerjs#backer)]

<a href="https://opencollective.com/fakerjs/backer/0/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/1/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/2/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/3/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/4/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/5/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/6/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/7/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/8/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/9/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/10/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/11/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/12/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/13/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/14/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/15/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/16/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/17/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/18/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/19/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/20/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/21/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/22/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/23/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/24/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/25/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/26/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/27/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/28/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/backer/29/website" target="_blank"><img src="https://opencollective.com/fakerjs/backer/29/avatar.svg"></a>

## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/fakerjs#sponsor)]

<a href="https://opencollective.com/fakerjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/4/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/5/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/6/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/7/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/8/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/9/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/10/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/11/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/12/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/13/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/14/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/15/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/16/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/17/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/18/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/19/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/20/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/21/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/22/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/23/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/24/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/25/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/26/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/27/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/28/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/fakerjs/sponsor/29/website" target="_blank"><img src="https://opencollective.com/fakerjs/sponsor/29/avatar.svg"></a>
