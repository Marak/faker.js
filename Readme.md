# faker.js - generate massive amounts of fake data in the browser and node.js
<img src = "http://imgur.com/KiinQ.png" border = "0">
## USAGE
### browser -
      <script src = "faker.js" type = "text/javascript"></script>
      <script>
        var randomName = faker.Name.findName(); // Caitlyn Kerluke
        var randomEmail = faker.Internet.email(); // Rusty@arne.info
        var randomCard = faker.Helpers.createCard(); // random contact card containing many properties
      </script>
### node.js -
### usage
      var faker = require('./faker');
      var randomName = faker.Name.findName(); // Rowan Nikolaus
      var randomEmail = faker.Internet.email(); // Kassandra.Haley@erich.biz
      var randomCard = faker.Helpers.createCard(); // random contact card containing many properties
## API
<ul><li>Name<ul><li>firstName</li><li>firstNameFemale</li><li>firstNameMale</li><li>lastName</li><li>findName</li></ul></li><li>Address<ul><li>zipCode</li><li>zipCodeFormat</li><li>city</li><li>streetName</li><li>streetAddress</li><li>secondaryAddress</li><li>brState</li><li>ukCounty</li><li>ukCountry</li><li>usState</li><li>latitude</li><li>longitude</li></ul></li><li>PhoneNumber<ul><li>phoneNumber</li><li>phoneNumberFormat</li></ul></li><li>Internet<ul><li>email</li><li>userName</li><li>domainName</li><li>domainWord</li><li>ip</li><li>color</li></ul></li><li>Company<ul><li>suffixes</li><li>companyName</li><li>companySuffix</li><li>catchPhrase</li><li>bs</li></ul></li><li>Image<ul><li>avatar</li><li>imageUrl</li><li>abstractImage</li><li>animals</li><li>business</li><li>cats</li><li>city</li><li>food</li><li>nightlife</li><li>fashion</li><li>people</li><li>nature</li><li>sports</li><li>technics</li><li>transport</li></ul></li><li>Lorem<ul><li>words</li><li>sentence</li><li>sentences</li><li>paragraph</li><li>paragraphs</li></ul></li><li>Helpers<ul><li>randomNumber</li><li>randomize</li><li>slugify</li><li>replaceSymbolWithNumber</li><li>shuffle</li><li>createCard</li><li>userCard</li></ul></li><li>Tree<ul><li>clone</li><li>createTree</li></ul></li><li>Date<ul><li>past</li><li>future</li><li>between</li><li>recent</li></ul></li><li>random<ul><li>number</li><li>array_element</li><li>city_prefix</li><li>city_suffix</li><li>street_suffix</li><li>br_state</li><li>br_state_abbr</li><li>us_state</li><li>us_state_abbr</li><li>uk_county</li><li>uk_country</li><li>first_name</li><li>last_name</li><li>name_prefix</li><li>name_suffix</li><li>catch_phrase_adjective</li><li>catch_phrase_descriptor</li><li>catch_phrase_noun</li><li>bs_adjective</li><li>bs_buzz</li><li>bs_noun</li><li>phone_formats</li><li>domain_suffix</li><li>avatar_uri</li></ul></li><li>definitions<ul><li>first_name</li><li>last_name</li><li>name_prefix</li><li>name_suffix</li><li>br_state</li><li>br_state_abbr</li><li>us_state</li><li>us_state_abbr</li><li>city_prefix</li><li>city_suffix</li><li>street_suffix</li><li>uk_county</li><li>uk_country</li><li>catch_phrase_adjective</li><li>catch_phrase_descriptor</li><li>catch_phrase_noun</li><li>bs_adjective</li><li>bs_buzz</li><li>bs_noun</li><li>domain_suffix</li><li>lorem</li><li>phone_formats</li><li>avatar_uri</li></ul></li></ul>
## Tests
       npm install .
       make test
You can view a code coverage report generated in coverage/lcov-report/index.html.
## Authors
####Matthew Bergman & Marak Squires
Heavily inspired by Benjamin Curtis's Ruby Gem [faker](http://faker.rubyforge.org/) and Perl's [Data::faker](http://search.cpan.org/~jasonk/Data-faker-0.07/lib/Data/faker.pm)
<br/>
Copyright (c) 2014 Matthew Bergman & Marak Squires http://github.com/marak/faker.js/
<br/>
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