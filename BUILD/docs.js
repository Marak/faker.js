# Faker.js - generate massive amounts of fake data in the browser and node.js
<img src = "http://imgur.com/KiinQ.png" border = "0">

### online demo @ <a href = "http://maraksquires.com/Faker.js/">http://maraksquires.com/Faker.js/</a>

## USAGE

### browser -

      <script src = "Faker.js" type = "text/javascript"></script>
      <script>
        var randomName = Faker.Name.findName(); // Caitlyn Kerluke
        var randomEmail = Faker.Internet.email(); // Rusty@arne.info
        var randomCard = Faker.Helpers.createCard(); // random contact card containing many properties
      </script>

### node.js -

### usage

      var Faker = require('./Faker');

      var randomName = Faker.Name.findName(); // Rowan Nikolaus
      var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz
      var randomCard = Faker.Helpers.createCard(); // random contact card containing many properties


## API

{{{API}}}

## Authors

####Matthew Bergman & Marak Squires

Heavily inspired by Benjamin Curtis's Ruby Gem [Faker](http://faker.rubyforge.org/) and Perl's [Data::Faker](http://search.cpan.org/~jasonk/Data-Faker-0.07/lib/Data/Faker.pm)

<br/>
Copyright (c) 2010 Matthew Bergman & Marak Squires http://github.com/marak/Faker.js/
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