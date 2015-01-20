## faker.js - Generate massive amounts of fake contextual data
<img src = "http://imgur.com/KiinQ.png" border = "0">

[![Build Status](https://travis-ci.org/Marak/faker.js.svg?branch=master)](https://travis-ci.org/Marak/Faker.js)

## Demo

<a href="http://marak.com/faker.js/">http://marak.com/faker.js/</a>

## Usage

### Browser
```html
<script src = "faker.js" type = "text/javascript"></script>
<script>
  var randomName = faker.name.findName(); // Caitlyn Kerluke
  var randomEmail = faker.internet.email(); // Rusty@arne.info
  var randomCard = faker.helpers.createCard(); // random contact card containing many properties
</script>
```

### Node.js

```js
var faker = require('./faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

## Localization

As of version `v2.0.0` faker.js supports 27 different language definition packs.

The default language is set to English.

Setting a new locale is simple:

```js
// sets locale to de
faker.locale = "de";
```
Read further for a complete list of locales.

## API Usage

### faker.name

```js
faker.name.firstName() // Blanca
faker.name.lastName()  // Denesik
faker.name.findName()  // Sedrick Wintheiser IV
faker.name.prefix()    // Mrs.
faker.name.suffix()    // DDS
```

### faker.address

```js
faker.address.zipCode()           // 01860
faker.address.city()              // Grimesberg
faker.address.cityPrefix()        // South
faker.address.citySuffix()        // side
faker.address.streetName()        // Harley Plain
faker.address.streetAddress()     // 22944 Bert Shores
faker.address.streetSuffix()      // Mountain
faker.address.secondaryAddress()  // Apt. 488
faker.address.county()            // Borders
faker.address.country()           // Cameroon
faker.address.state()             // Mississippi
faker.address.stateAbbr()         // VT
faker.address.latitude()          // 29.9357
faker.address.longitude()         // -101.2776
```
### faker.phone

```js
faker.phone.phoneNumber()        // 530-319-6715 x412
faker.phone.phoneNumberFormat()  // 624-882-3940
faker.phone.phoneFormats()       // 1-###-###-#### x#####
```

### faker.internet

```js
faker.internet.avatar()       // https://s3.amazonaws.com/uifaces/faces/twitter/twitteruiface/128.jpg
faker.internet.email()        // Misty.Hoppe76@hotmail.com
faker.internet.userName()     // Janae22
faker.internet.domainName()   // preston.name
faker.internet.domainSuffix() // name
faker.internet.domainWord()   // georgianna
faker.internet.ip()           // 121.110.86.180
faker.internet.userAgent()    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_0 rv:5.0; NL) AppleWebKit/533.0.1 (KHTML, like Gecko) Version/6.1.6 Safari/533.0.1
faker.internet.color()        // #396a67
faker.internet.password()     // pYxwv3wt4usqpiQ
```

### faker.company

```js
faker.company.suffixes()               // [ 'Inc','and Sons','LLC','Group','and Daughters' ]
faker.company.companyName()            // Marks, Schaefer and Corkery
faker.company.companySuffix()          // and Daughters
faker.company.catchPhrase()            // Re-contextualized neutral concept
faker.company.bs()                     // intuitive leverage experiences
faker.company.catchPhraseAdjective()   // Universal
faker.company.catchPhraseDescriptor()  // grid-enabled
faker.company.catchPhraseNoun()        // time-frame
faker.company.bsAdjective()            // revolutionary
faker.company.bsBuzz()                 // deliver
faker.company.bsNoun()                 // supply-chains
```

### faker.image

```js
faker.image.image()      // http://lorempixel.com/640/480/animals
faker.image.avatar()     // https://s3.amazonaws.com/uifaces/faces/twitter/twitteruiface/128.jpg
faker.image.imageUrl()   // http://lorempixel.com/640/480
faker.image.abstract()   // http://lorempixel.com/640/480/abstract
faker.image.animals()    // http://lorempixel.com/640/480/animals
faker.image.business()   // http://lorempixel.com/640/480/business
faker.image.cats()       // http://lorempixel.com/640/480/cats
faker.image.city()       // http://lorempixel.com/640/480/city
faker.image.food()       // http://lorempixel.com/640/480/food
faker.image.nightlife()  // http://lorempixel.com/640/480/nightlife
faker.image.fashion()    // http://lorempixel.com/640/480/fashion
faker.image.people()     // http://lorempixel.com/640/480/people
faker.image.nature()     // http://lorempixel.com/640/480/nature
faker.image.sports()     // http://lorempixel.com/640/480/soprts
faker.image.technics()   // http://lorempixel.com/640/480/technics
faker.image.transport()  // http://lorempixel.com/640/480/transport
```

### faker.lorem

> Each function, also, accept a number as parameter.

```js
fake.lorem.words()       // [ 'velit', 'magni', 'ab' ]
fake.lorem.sentence()    // qui eligendi dicta culpa minus quia voluptate ea repellat
fake.lorem.sentences()   // omnis veniam\ndistinctio autem perspiciatis...sint temporibus rerum dolor magni
fake.lorem.paragraph()   // autem cupiditate saepe itaque architecto...quis\nerror inventorfugiat doloribus
fake.lorem.paragraphs()  // pariatur commodi beatae at sunt quasi esse\n quia...et officiis repudiandae
```

### faker.helpers

```js
faker.helpers.randomNumber()             // return 0 or 1 
faker.helpers.randomNumber(10)           // return a number between 0 and 10 included

faker.helpers.randomize()                // return 'a' or 'b' or 'c'
faker.helpers.randomize('faker')         // return a random character of the string

faker.helpers.slugify()                  //
faker.helpers.replaceSymbolWithNumber()  //
faker.helpers.shuffle()                  //
faker.helpers.mustache()                 //
faker.helpers.createCard()               //
faker.helpers.contextualCard()           //
faker.helpers.userCard()                 //
faker.helpers.createTransaction()        //
```


  * helpers
    * randomNumber
    * randomize
    * slugify
    * replaceSymbolWithNumber
    * shuffle
    * mustache
    * createCard
    * contextualCard
    * userCard
    * createTransaction
  * date
    * past
    * future
    * between
    * recent
  * random
    * number
    * array_element
    * object_element
  * finance
    * account
    * accountName
    * mask
    * amount
    * transactionType
    * currencyCode
    * currencyName
    * currencySymbol
  * hacker
    * abbreviation
    * adjective
    * noun
    * verb
    * ingverb
    * phrase
  * locales
    * de
    * de_AT
    * de_CH
    * en
    * en_AU
    * en_BORK
    * en_CA
    * en_GB
    * en_IND
    * en_US
    * en_au_ocker
    * es
    * fa
    * fr
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
    * vi
    * zh_CN
  * locale
    * 0
    * 1
  * localeFallback
    * 0
    * 1
  * definitions
    * name
    * address
    * company
    * lorem
    * hacker
    * phone_number
    * finance
    * internet

## Tests
```sh
npm install .
make test
```

You can view a code coverage report generated in coverage/lcov-report/index.html.

## Authors

#### Matthew Bergman & Marak Squires

Copyright (c) 2015 Matthew Bergman & Marak Squires http://github.com/marak/faker.js/

faker.js was inspired by and has used data definitions from

https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis  
http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles

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
