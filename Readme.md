# faker.js - generate massive amounts of fake data in the browser and node.js

![Faker.js](http://imgur.com/KiinQ.png)

[![Build Status](https://travis-ci.org/Marak/faker.js.svg?branch=master)](https://travis-ci.org/Marak/faker.js)

[![npm version](https://badge.fury.io/js/faker.svg)](http://badge.fury.io/js/faker)

## Demo

[https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html](https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html)

## Hosted API Microservice

[http://faker.hook.io](http://faker.hook.io/)
 - Supports all Faker API Methods
 - Full-Featured Microservice
 - Hosted by [hook.io](http://hook.io)

```bash
curl http://faker.hook.io?property=name.findName&locale=de
```
## Support Faker Development

Please pledge support at [https://www.patreon.com/marak](https://www.patreon.com/marak) to help ensure continued development of faker.js

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
  * zipCode (format: String)
  * city (format: String)
  * cityPrefix ()
  * citySuffix ()
  * streetName ()
  * streetAddress (useFullAddress: Boolean)
  * streetSuffix ()
  * streetPrefix ()
  * secondaryAddress ()
  * county ()
  * country ()
  * countryCode ()
  * state (useAbbr: Boolean)
  * stateAbbr ()
  * latitude ()
  * longitude ()
* commerce
  * color ()
  * department ()
  * productName ()
  * price (min, max, dec, symbol)
  * productAdjective ()
  * productMaterial ()
  * product ()
* company
  * suffixes ()
  * companyName (format: String)
  * companySuffix ()
  * catchPhrase ()
  * bs ()
  * catchPhraseAdjective ()
  * catchPhraseDescriptor ()
  * catchPhraseNoun ()
  * bsAdjective ()
  * bsBuzz ()
  * bsNoun ()
* date
  * past (years: Number, refDate: Date, options: {format: String})
  * future (years: Number, refDate: Date, options: {format: String})
  * between (from: Date, to: Date, options: {format: String})
  * recent (days: Number, options: {format: String})
  * month (options: {format: String})
  * weekday (options: {format: String})
* fake
* finance
  * account (length: Number)
  * accountName ()
  * mask (length: Number, parens: Boolean, elipsis: Boolean)
  * amount (min: Number, max: Number, dec: Number, symbol: String)
  * transactionType ()
  * currencyCode ()
  * currencyName ()
  * currencySymbol ()
  * bitcoinAddress ()
* hacker
  * abbreviation ()
  * adjective ()
  * noun ()
  * verb ()
  * ingverb ()
  * phrase ()
* helpers
  * randomize (array: Array)
  * slugify (string: String)
  * replaceSymbolWithNumber (string: String, symbol: String)
  * replaceSymbols (string: String)
  * shuffle (o: Array)
  * mustache (str: String, data: Object)
  * createCard ()
  * contextualCard ()
  * userCard ()
  * createTransaction ()
* image
  * image (width: Number, height: Number, randomize: Boolean)
  * avatar ()
  * imageUrl (width: Number, height: Number, category: String, randomize: Boolean)
  * abstract (width: Number, height: Number, randomize: Boolean)
  * animals (...)
  * business (...)
  * cats (...)
  * city (...)
  * food (...)
  * nightlife (...)
  * fashion (...)
  * people (...)
  * nature (...)
  * sports (...)
  * technics (...)
  * transport (...)
* internet
  * avatar ()
  * email (firstName: String, lastName: String, provider: String)
  * exampleEmail (firstName: String, lastName: String)
  * userName (firstName: String, lastName: String)
  * protocol ()
  * url ()
  * domainName ()
  * domainSuffix ()
  * domainWord ()
  * ip ()
  * userAgent ()
  * color (baseRed255: Number, baseGreen255: Number, baseBlue255: Number)
  * mac ()
  * password (len: Number, memorable: Boolean, pattern: String, prefix: String)
* lorem
  * word (num: Number)
  * words (num: Number)
  * sentence (wordCount: Number, range: Number)
  * sentences (sentenceCount: Number, separator: String)
  * paragraph (sentenceCount: Number)
  * paragraphs (paragraphCount: Number, separator: String)
  * text (times: Number)
  * lines (count: Number)
* name
  * firstName (gender: 1 or 0)
  * lastName (gender: 1 or 0)
  * findName (firstName: String, lastName: String, gender: 1 o 0)
  * jobTitle ()
  * prefix (gender: 1 or 0)
  * suffix ()
  * title ()
  * jobDescriptor ()
  * jobArea ()
  * jobType ()
* phone
  * phoneNumber (format: String)
  * phoneNumberFormat (phoneFormatsArrayIndex: Number)
  * phoneFormats ()
* random
  * number (options: {min, max, precision, decimals})
  * arrayElement (array: Array)
  * objectElement (object: Object, field: String or "key")
  * uuid ()
  * boolean ()
  * word (type: String, such as 'hacker.noun')
  * words (count: Number)
  * image ()
  * locale ()
  * alphaNumeric (count: Number)
* string
  * random (options: Object - see 'randomstring' module)
  * useful (options: {type: String, transform: {method, args}, [type]: {method, args} })
* system
  * fileName (ext: String, type: String)
  * commonFileName (ext: String, type: String)
  * mimeType ()
  * commonFileType ()
  * commonFileExt (type: String)
  * fileType ()
  * fileExt (mimeType: String)
  * directoryPath ()
  * filePath ()
  * semver ()

## Localization

As of version `v2.0.0` faker.js has support for multiple localities.

The default language locale is set to English.

Setting a new locale is simple:

```js
// sets locale to de
faker.locale = "de";
```

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

faker uses [gulp](http://gulpjs.com/) to automate it's build process. Running the following build command will generate new browser builds, documentation, and code examples for the project.

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

faker.js - Copyright (c) 2016
Matthew Bergman & Marak Squires
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


