# faker.js - generate massive amounts of fake data in the browser and node.js

![faker.js](http://imgur.com/KiinQ.png)

[![Build Status](https://travis-ci.org/Marak/faker.js.svg?branch=master)](https://travis-ci.org/Marak/Faker.js)

## Demo

[Demo Site](http://marak.com/faker.js/">http://marak.com/faker.js/)

## USAGE

### browser

	<script src = "faker.js" type = "text/javascript"></script>
    <script>
    	var randomName = faker.name.findName(); 		// => OUTPUTS: Caitlyn Kerluke
        var randomEmail = faker.internet.email(); 		// => OUTPUTS: Rusty@arne.info
        var randomCard = faker.helpers.createCard(); 	// => OUTPUTS: An Object containing many properties
    </script>

### node.js

	var faker = require('./faker');

    var randomName = faker.name.findName(); 			// => OUTPUTS: Rowan Nikolaus
    var randomEmail = faker.internet.email(); 			// => OUTPUTS: Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); 		// => OUTPUTS: An object containing many properties

### Localization

As of version `v2.0.0` faker.js supports 27 different language definition packs.

The default language is set to English.

Setting a new locale is simple:

	// sets locale to de
	faker.locale = "de";

Read further for complete list of locales.

## API

## faker.name

Functions to generate random names for people

	console.log(faker.name.firstName()); 					// => OUTPUTS: Rowan
	
	console.log(faker.name.lastName()); 					// => OUTPUTS: Kerluke

	console.log(faker.name.findName()); 					// => OUTPUTS: Rowan Kerluke

	console.log(faker.name.findName("John"); 				// => OUTPUTS: John Rippin
	console.log(faker.name.findName("John", "Walsh"); 		// => OUTPUTS: John Walsh
	console.log(faker.name.findName("John", "Walsh"); 		// => OUTPUTS: Mr. John Walsh
	console.log(faker.name.findName("John", "Walsh"); 		// => OUTPUTS: John Walsh Sr.

	console.log(faker.name.prefix()); 						// => OUTPUTS: Mr.

	console.log(faker.name.suffix()); 						// => OUTPUTS: Jr.

## faker.address

Functions to generate random address information 

	console.log(faker.address.zipCode()); 					// => OUTPUTS: 60184-487

	console.log(faker.address.city()); 						// => OUTPUTS: North Bellshire

	console.log(faker.address.cityPrefix()); 				// => OUTPUTS: South

	console.log(faker.address.citySuffix()); 				// => OUTPUTS: town

	console.log(faker.address.streetName()); 				// =>  OUTPUTS: Ferry Alley

	console.log(faker.address.streetAddress()); 			// =>  OUTPUTS: 74589 Kertzmann Mall
	console.log(faker.address.streetAddress(true)); 		// =>  OUTPUTS: 51154 DuBuque Extensions Suite 261

	console.log(faker.address.streetSuffix()); 				// =>  OUTPUTS: Canyon

	console.log(faker.address.secondaryAddress()); 			// =>  OUTPUTS: Apt. 123

	console.log(faker.address.county()); 					// =>  OUTPUTS: Bedfordshire

	console.log(faker.address.country()); 					// =>  OUTPUTS: Austria

	console.log(faker.address.state()); 					// =>  OUTPUTS: Kansas

	console.log(faker.address.stateAbbr()); 				// =>  OUTPUTS: KS

	console.log(faker.address.latitude()); 					// =>  OUTPUTS: 52.9541

	console.log(faker.address.longitude()); 				// =>  OUTPUTS: -1.1640

## faker.phone

Functions to generate phone numbers

	console.log(faker.phone.phoneNumber());					// => OUTPUTS: 123-456-7890
	console.log(faker.phone.phoneNumber('##### ######));	// => OUTPUTS: 12345 678901

	console.log(faker.phone.phoneNumberFormat());			// => OUTPUTS: 123-456-7890
	console.log(faker.phone.phoneNumberFormat(1));			// => OUTPUTS: (123) 456-7890	

	console.log(faker.phone.phoneFormats());				// => OUTPUTS: ###-###-####

## faker.internet

Functions to generate common internet information, such as email addresses or domains

	console.log(faker.internet.avatar());								// => OUTPUTS: https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg
	
	console.log(faker.internet.email());								// => OUTPUTS: rowan.haley@gmail.com
	console.log(faker.internet.email('james'));							// => OUTPUTS: james.green@hotmail.com
	console.log(faker.internet.email('james', 'bond'));					// => OUTPUTS: james.bond53@yahoo.com
	console.log(faker.internet.email('james', 'bond', 'a.com'));		// => OUTPUTS: james_bond@a.com
	
	console.log(faker.internet.userName());								// => OUTPUTS: rowan.haley
	console.log(faker.internet.userName('james'));						// => OUTPUTS: james_green6
	console.log(faker.internet.userName('james', 'bond'));				// => OUTPUTS: james41
	console.log(faker.internet.userName('james', 'bond'));				// => OUTPUTS: james.bond
	
	console.log(faker.internet.domainName());							// => OUTPUTS: joe.com
	
	console.log(faker.internet.domainSuffix());							// => OUTPUTS: info
	
	console.log(faker.internet.domainWord());							// => OUTPUTS: aurelio
	
	console.log(faker.internet.ip());									// => OUTPUTS: 192.154.21.265
	
	console.log(faker.internet.userAgent());							// => OUTPUTS: Mozilla/5.0 (Windows; U; Windows NT 5.3) AppleWebKit/1.5 (KHTML, like Gecko) Chrome
	
	console.log(faker.internet.color());								// => OUTPUTS: #
 
	console.log(faker.internet.password());								// => OUTPUTS: Sg05EU9qJ866K_V
    console.log(faker.internet.password(25));							// => OUTPUTS: bck57QGpCk6NZLn6Jpb0OEw4F
    console.log(faker.internet.password(25, true));						// => OUTPUTS: bujolufayihohuduqucipeweq
	console.log(faker.internet.password(25, false, /\d/));				// => OUTPUTS: 8616909730935728756345227
	console.log(faker.internet.password(25, true, /\w/, 'password')); 	// => OUTPUTS: passwordabaweyolayaqogote

## faker.company

Functions to generate Company Information

	console.log(faker.company.suffixes());							// => OUTPUTS: ["Inc", "and Sons", "LLC", "Group", "and Daughters"]
	
	console.log(faker.company.companyName());						// => OUTPUTS: Block and Sons
	console.log(faker.company.companyName(1));						// => OUTPUTS: Block-Paucek
	console.log(faker.company.companyName(2));						// => OUTPUTS: Block, Paucek and Kub
	
	console.log(faker.company.companySuffix());						// => OUTPUTS: Group
	
	console.log(faker.company.catchPhrase());						// => OUTPUTS: Devolved bifurcated attitude

	console.log(faker.company.bs());								// => OUTPUTS: interactive enhance solutions
	
	console.log(faker.company.catchPhraseAdjective());				// => OUTPUTS: Proactive
	
	console.log(faker.company.catchPhraseDescriptor());				// => OUTPUTS: intangible
	
	console.log(faker.company.catchPhraseNoun());					// => OUTPUTS: definition
	
	console.log(faker.company.bsAdjective());						// => OUTPUTS: best-of-breed
	
	console.log(faker.company.bsBuzz());							// => OUTPUTS: syndicate
 
	console.log(faker.company.bsNoun());							// => OUTPUTS: metrics

## faker.commerce

Functions to generate information normally associated with commerce
	
	console.log(faker.commerce.color());						// => OUTPUTS: yellow
	
	console.log(faker.commerce.department());					// => OUTPUTS: Books, Movies & Games
	console.log(faker.commerce.department(1));					// => OUTPUTS: Garden
	console.log(faker.commerce.department(3));					// => OUTPUTS: Home & Garden
	console.log(faker.commerce.department(3, true));			// => OUTPUTS: Home, Garden & Outdoors
	
	console.log(faker.commerce.productName());					// => OUTPUTS: gorgeous metal bike
	
	console.log(faker.commerce.price());						// => OUTPUTS: 149.99
	console.log(faker.commerce.price(10, 20));					// => OUTPUTS: 15.50
	console.log(faker.commerce.price(10, 1000, 2, '£'));		// => OUTPUTS: £495.21
	
## faker.image

Functions to generate random images, images provided by [lorempixel](http://lorempixel.com)

	console.log(faker.image.image());							// => OUTPUTS: http://lorempixel.com/640/480/animals

	console.log(faker.image.avatar());							// => OUTPUTS: https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg
	
	console.log(faker.image.imageUrl());						// => OUTPUTS: http://lorempixel.com/640/480
	console.log(faker.image.imageUrl(300));						// => OUTPUTS: http://lorempixel.com/300/480
	console.log(faker.image.imageUrl(300, 200));				// => OUTPUTS: http://lorempixel.com/300/200
	console.log(faker.image.imageUrl(300, 200, 'business'));	// => OUTPUTS: http://lorempixel.com/300/200/business
	
	console.log(faker.image.abstract());						// => OUTPUTS: http://lorempixel.com/640/480/abstract
	console.log(faker.image.abstract(300, 200));				// => OUTPUTS: http://lorempixel.com/300/200/abstract
	
	console.log(faker.image.animals());							// => OUTPUTS: http://lorempixel.com/640/480/animals
	console.log(faker.image.animals(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/animals
	
	console.log(faker.image.business());						// => OUTPUTS: http://lorempixel.com/640/480/business
	console.log(faker.image.business(300, 200));				// => OUTPUTS: http://lorempixel.com/300/200/business
	
	console.log(faker.image.cats());							// => OUTPUTS: http://lorempixel.com/640/480/cats
	console.log(faker.image.cats(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/cats
	
	console.log(faker.image.city());							// => OUTPUTS: http://lorempixel.com/640/480/city
	console.log(faker.image.city(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/city
	
	console.log(faker.image.food());							// => OUTPUTS: http://lorempixel.com/640/480/food
	console.log(faker.image.food(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/food
	
	console.log(faker.image.nightlife());						// => OUTPUTS: http://lorempixel.com/640/480/nightlife
	console.log(faker.image.nightlife(300, 200));				// => OUTPUTS: http://lorempixel.com/300/200/nightlife
	
	console.log(faker.image.fashion());							// => OUTPUTS: http://lorempixel.com/640/480/fashion
	console.log(faker.image.fashion(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/fashion
	
	console.log(faker.image.people());							// => OUTPUTS: http://lorempixel.com/640/480/people
	console.log(faker.image.people(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/people
	
	console.log(faker.image.nature());							// => OUTPUTS: http://lorempixel.com/640/480/nature
	console.log(faker.image.nature(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/nature
	
	console.log(faker.image.sports());							// => OUTPUTS: http://lorempixel.com/640/480/sports
	console.log(faker.image.sports(300, 200));					// => OUTPUTS: http://lorempixel.com/300/200/sports
	
	console.log(faker.image.technics());						// => OUTPUTS: http://lorempixel.com/640/480/technics
	console.log(faker.image.technics(300, 200));				// => OUTPUTS: http://lorempixel.com/300/200/technics
	
	console.log(faker.image.transport());						// => OUTPUTS: http://lorempixel.com/640/480/transport
	console.log(faker.image.transport(300, 200));				// => OUTPUTS: http://lorempixel.com/300/200/transport

## faker.lorem

Functions to provide placeholder text generated by words found in lorem ipsum.

	console.log(faker.lorem.words());						// => OUTPUTS: doloremque veritatis sunt
	console.log(faker.lorem.words(5));						// => OUTPUTS: dolores neque ipsum amet sed

	console.log(faker.lorem.sentence());					// => OUTPUTS: veritatis quia dolores quae adipisci
	console.log(faker.lorem.sentence(4, 2));				// => OUTPUTS: dicta quia sequi aperiam voluptatem, consequatur  
	
	console.log(faker.lorem.sentences());					// => OUTPUTS: veniam suscipit consequatur numquam quia \n consectetur voluptate minima \n ducimus dolores similique error id laudantium facilis
	console.log(faker.lorem.sentences(2));					// => OUTPUTS: veniam suscipit consequatur numquam quia \n consectetur voluptate minima
	
	console.log(faker.lorem.paragraph());					// => OUTPUTS: veniam suscipit consequatur numquam quia \n consectetur voluptate minima \n ducimus dolores similique error id laudantium facilis \n veritatis quia dolores quae adipisci
	console.log(faker.lorem.paragraph(5));					// => OUTPUTS: veniam suscipit consequatur numquam quia \n consectetur voluptate minima \n ducimus dolores similique error id laudantium facilis \n veritatis quia dolores quae adipisci \n doloremque veritatis sunt \n consectetur voluptate minima sequi
	
	console.log(faker.lorem.paragraphs());					// => OUTPUTS: veniam suscipit consequatur numquam quia \n consectetur voluptate minima \n ducimus dolores similique error id laudantium facilis \n veritatis quia dolores quae adipisci \n \r\t veniam suscipit consequatur numquam quia \n consectetur voluptate minima \n ducimus dolores similique error id laudantium facilis \n veritatis quia dolores quae adipisci \n \r\t veniam suscipit consequatur numquam quia \n consectetur voluptate minima \n ducimus dolores similique error id laudantium facilis \n veritatis quia dolores quae 

## faker.helpers

Functions to help create data quickly.
	
	console.log(faker.helpers.randomNumber());								// => OUTPUTS: 1
	console.log(faker.helpers.randomNumber(10));							// => OUTPUTS: 8
	console.log(faker.helpers.randomNumber({min: 5, max: 50}));				// => OUTPUTS: 32
	
	var array = [1, 2];
	console.log(faker.helpers.randomize(array));							// => OUTPUTS: 1
	var array = ["item1", "item2", "item3", "item4"];
	console.log(faker.helpers.randomize(array));							// => OUTPUTS: item3

	console.log(faker.helpers.slugify('test string made of Text'));			// => OUTPUTS: test-string-made-of-Text

	console.log(faker.helpers.replaceSymbolWithNumber("ext: ####-##"));		// => OUTPUTS: ext: 4716-58
	console.log(faker.helpers.replaceSymbolWithNumber("$$$.$$", "$"));		// => OUTPUTS: 524.26
	
	console.log(faker.helpers.shuffle());									// => OUTPUTS: [ 'a', 'c', 'b' ]
    console.log(faker.helpers.shuffle([1, 2, 3, 4]));						// => OUTPUTS: [ 2, 4, 3, 1 ]

	console.log(faker.helpers.mustache("test {{key}}", {"key": "string"}));	// => OUTPUTS: test string
		
	console.log(faker.helpers.createCard());								// => OUTPUTS: {
																					name: 'Anita Waelchi',
  																					username: 'Terence.Kuhic37',
  																					email: 'Lavern_Kemmer9@hotmail.com',
  																					address: {
																						streetA: 'Gregoria Wells',
																						....
	
	console.log(faker.helpers.contextualCard());							// => OUTPUTS: {
																					name: 'Annabel',
																					username: 'Annabel_Bauch',
																					avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg',
																					email: 'Annabel_Bauch.Stoltenberg@gmail.com',
																					dob: Mon Feb 25 1974 03:43:58 GMT+0000 (GMT Standard Time),
																					phone: '(560) 043-3168 x826',
																					address: {
																						street: 'Alfred Lodge',
																						...

	console.log(faker.helpers.userCard()); 									// => OUTPUTS: {
																					name: 'Eugene Rath',
																				  	username: 'Zelda29',
																				  	email: 'Adolf95@hotmail.com',
																				  	address: {
																						street: 'Larson Canyon',
																		     			suite: 'Suite 156',
																					    city: 'Williamsontown',
																					    zipcode: '21518-1560',
																					    geo: { lat: '-26.6674', lng: '-48.7346' }
																					},
																					phone: '1-242-561-4692 x003',
																					website: 'magnus.org',
																					company: {
																						name: 'Herzog, Stamm and Willms',
																					    catchPhrase: 'Innovative methodical hierarchy',
																					    bs: 'out-of-the-box empower architectures'
																					}
																				}

	console.log(faker.helpers.createTransaction());							// => OUTPUTS: {
																					 amount: '755.59',
																					 date: Thu Feb 02 2012 00:00:00 GMT+0000 (GMT Standard Time),
																					 business: 'Marks-McLaughlin',
																					 name: 'Home Loan Account 9319',
																					 type: 'invoice',
																					 account: '31060525'
																				}

## faker.date

Functions to generate dates

	console.log(faker.date.past());									// OUTPUTS: Mon Jan 26 2015 11:19:15 GMT+0000 (GMT Standard Time)
	console.log(faker.date.past(3));								// OUTPUTS: Sun Nov 03 2013 01:10:25 GMT+0000 (GMT Standard Time)
	console.log(faker.date.past(3, '02/05/2011'));					// OUTPUTS: Sun Dec 19 2010 05:59:05 GMT+0000 (GMT Standard Time)

	console.log(faker.date.future());								// OUTPUTS: Wed Sep 02 2015 01:25:30 GMT+0100 (GMT Daylight Time)
	console.log(faker.date.future(3));								// OUTPUTS: Fri Mar 20 2015 13:47:54 GMT+0000 (GMT Standard Time)
	console.log(faker.date.future(3, '02/05/2018'));				// OUTPUTS: Sun Jan 27 2019 14:53:44 GMT+0000 (GMT Standard Time)

	console.log(faker.date.between('02/05/2011', '02/05/2018'));	// OUTPUTS: Thu May 18 2017 04:49:07 GMT+0100 (GMT Daylight Time)

	console.log(faker.date.recent());								// OUTPUTS: Wed Mar 11 2015 19:12:05 GMT+0000 (GMT Standard Time)
	console.log(faker.date.recent(50));								// OUTPUTS: Wed Jan 28 2015 05:21:22 GMT+0000 (GMT Standard Time)

## faker.random 

Functions to provide random information based on passed in items.

	console.log(faker.random.number());							// OUTPUTS: 1
	console.log(faker.random.number(10));						// OUTPUTS: 8
	console.log(faker.random.number({min: 5, max: 50}));		// OUTPUTS: 32

	var array = [1, 2];
	console.log(faker.random.array_element(array));				// OUTPUTS: 1
	var array = ["item1", "item2", "item3", "item4"];
	console.log(faker.random.array_element(array));				// OUTPUTS: item3
	
	var object = {
		'name': 'john smith',
		'age': 28,
		'value': 1154
	};
	console.log(faker.random.object_element(object));			// OUTPUTS: john smith
	console.log(faker.random.object_element(object, 'key'));	// OUTPUTS: name


## faker.finance

Functions to generate common finance information

	console.log(faker.finance.account());						// OUTPUTS: 12451658
	console.log(faker.finance.account(5));						// OUTPUTS: 12451

	console.log(faker.finance.accountName());					// OUTPUTS: Savings Account
	
	console.log(faker.finance.mask());							// OUTPUTS:
	
	console.log(faker.finance.amount());						// OUTPUTS: 59.54
	console.log(faker.finance.amount(900));						// OUTPUTS: 940.15
	console.log(faker.finance.amount(900, 2000));				// OUTPUTS: 1889.28
	console.log(faker.finance.amount(900, 2000, 2, '$'));		// OUTPUTS: $1248.74
	
	console.log(faker.finance.transactionType());				// OUTPUTS: withdrawal
	
	console.log(faker.finance.currencyCode());					// OUTPUTS: AUD
	
	console.log(faker.finance.currencyName());					// OUTPUTS: Australian Dollar
	
	console.log(faker.finance.currencySymbol());				// OUTPUTS: $

## faker.hacker

Functions to generate computer related information

	console.log(faker.hacker.abbreviation());					// OUTPUTS: HTTP

	console.log(faker.hacker.adjective());						// OUTPUTS: haptic
	
	console.log(faker.hacker.noun());							// OUTPUTS: microchip
	
	console.log(faker.hacker.verb());							// OUTPUTS: compress
	
	console.log(faker.hacker.ingverb());						// OUTPUTS: generating
	
	console.log(faker.hacker.phrase());							// OUTPUTS: We need to calculate the neural EXE interface!

## faker.locale

Gets or Sets the locale. See the "*Supported Locales*" section for a list of allowed values

	console.log(faker.locale);							// OUTPUTS: en

	faker.locale = "es"
	console.log(faker.locale);							// OUTPUTS: es

## faker.localeFallback

Gets or Sets the locale Fallback, this is used if a value isn't specified in the chosen locale. This defaults to **en**. See the "*Supported Locales*" section for a list of allowed values

	console.log(faker.localeFallback);					// OUTPUTS: en

	faker.localeFallback = "en_US"
	console.log(faker.localeFallback);					// OUTPUTS: en_US

## Supported Locales

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

## Tests
	
	npm install .
    make test

You can view a code coverage report generated in `coverage/lcov-report/index.html`.

## Authors

#### Matthew Bergman & Marak Squires

Copyright (c) 2014 Matthew Bergman & Marak Squires http://github.com/marak/faker.js/

faker.js was inspired by and has used data definitions from:

* [https://github.com/stympy/faker/](https://github.com/stympy/faker/) - Copyright (c) 2007-2010 Benjamin Curtis
* [http://search.cpan.org/~jasonk/Data-Faker-0.07/](http://search.cpan.org/~jasonk/Data-Faker-0.07/) - Copyright 2004-2005 by Jason Kohles

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

* The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
