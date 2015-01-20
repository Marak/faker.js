# faker.js - generate massive amounts of fake data in the browser and node.js

<img src = "http://imgur.com/KiinQ.png" border = "0">

[![Build Status](https://travis-ci.org/Marak/faker.js.svg?branch=master)](https://travis-ci.org/Marak/Faker.js)

## Demo

<a href="http://marak.com/faker.js/">http://marak.com/faker.js/</a>

## USAGE

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

### Usage
```js
  var faker = require('./faker');

  var randomName = faker.name.findName(); // Rowan Nikolaus
  var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

### Localization

As of version `v2.0.0` faker.js supports 27 different language definition packs.

The default language is set to English.

Setting a new locale is simple:

```js
// sets locale to de
faker.locale = "de";
```
Read further for complete list of locales.

## API

<ul><li>name<ul><li>firstName</li><li>lastName</li><li>findName</li><li>prefix</li><li>suffix</li></ul></li><li>address<ul><li>zipCode</li><li>city</li><li>cityPrefix</li><li>citySuffix</li><li>streetName</li><li>streetAddress</li><li>streetSuffix</li><li>secondaryAddress</li><li>county</li><li>country</li><li>state</li><li>stateAbbr</li><li>latitude</li><li>longitude</li></ul></li><li>phone<ul><li>phoneNumber</li><li>phoneNumberFormat</li><li>phoneFormats</li></ul></li><li>internet<ul><li>avatar</li><li>email</li><li>userName</li><li>domainName</li><li>domainSuffix</li><li>domainWord</li><li>ip</li><li>userAgent</li><li>color</li><li>password</li></ul></li><li>company<ul><li>suffixes</li><li>companyName</li><li>companySuffix</li><li>catchPhrase</li><li>bs</li><li>catchPhraseAdjective</li><li>catchPhraseDescriptor</li><li>catchPhraseNoun</li><li>bsAdjective</li><li>bsBuzz</li><li>bsNoun</li></ul></li><li>image<ul><li>image</li><li>avatar</li><li>imageUrl</li><li>abstract</li><li>animals</li><li>business</li><li>cats</li><li>city</li><li>food</li><li>nightlife</li><li>fashion</li><li>people</li><li>nature</li><li>sports</li><li>technics</li><li>transport</li></ul></li><li>lorem<ul><li>words</li><li>sentence</li><li>sentences</li><li>paragraph</li><li>paragraphs</li></ul></li><li>helpers<ul><li>randomNumber</li><li>randomize</li><li>slugify</li><li>replaceSymbolWithNumber</li><li>shuffle</li><li>mustache</li><li>createCard</li><li>contextualCard</li><li>userCard</li><li>createTransaction</li></ul></li><li>date<ul><li>past</li><li>future</li><li>between</li><li>recent</li></ul></li><li>random<ul><li>number</li><li>array_element</li><li>object_element</li></ul></li><li>finance<ul><li>account</li><li>accountName</li><li>mask</li><li>amount</li><li>transactionType</li><li>currencyCode</li><li>currencyName</li><li>currencySymbol</li></ul></li><li>hacker<ul><li>abbreviation</li><li>adjective</li><li>noun</li><li>verb</li><li>ingverb</li><li>phrase</li></ul></li><li>locales<ul><li>de</li><li>de_AT</li><li>de_CH</li><li>en</li><li>en_AU</li><li>en_BORK</li><li>en_CA</li><li>en_GB</li><li>en_IND</li><li>en_US</li><li>en_au_ocker</li><li>es</li><li>fa</li><li>fr</li><li>it</li><li>ja</li><li>ko</li><li>nb_NO</li><li>nep</li><li>nl</li><li>pl</li><li>pt_BR</li><li>ru</li><li>sk</li><li>sv</li><li>vi</li><li>zh_CN</li></ul></li><li>locale<ul><li>0</li><li>1</li></ul></li><li>localeFallback<ul><li>0</li><li>1</li></ul></li><li>definitions<ul><li>name</li><li>address</li><li>company</li><li>lorem</li><li>hacker</li><li>phone_number</li><li>finance</li><li>internet</li></ul></li></ul>

## Tests
```sh
npm install .
make test
```

You can view a code coverage report generated in coverage/lcov-report/index.html.

## Authors

####Matthew Bergman & Marak Squires

<br/>
Copyright (c) 2014 Matthew Bergman & Marak Squires http://github.com/marak/faker.js/
<br/>

faker.js was inspired by and has used data definitions from

https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis <br/>
http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles <br/>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
<br/>
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
<br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
