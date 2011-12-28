var Faker = require('../Faker');

// returns a single random number based on a range
exports.randomNumber = function(range) {
    r = Math.floor(Math.random()*range);
    return r;
};

// takes an array and returns the array randomly sorted
exports.randomize = function(array) {
    r = Math.floor(Math.random()*array.length);
    return array[r];
};

// parses string for a symbol and replace it with a random number from 1-10
exports.replaceSymbolWithNumber = function(string, symbol){

  // default symbol is '#'
  if(typeof symbol == 'undefined'){
    var symbol = '#';
  }

  var str = '';
  for(var i = 0; i < string.length; i++){
   if(string[i] == symbol){
     str += Math.floor(Math.random()*10);
   }
   else{
     str += string[i];
   }
  }
  return str;
};

// takes an array and returns it randomized
exports.shuffle = function(o){
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};


exports.generateDataSet = function(size){

};

exports.createCard = function(){

  return {
    "name":Faker.Name.findName(),
    "username":Faker.Internet.userName(),
    "email":Faker.Internet.email(),
    "address":{
      "streetA":Faker.Address.streetName(),
      "streetB":Faker.Address.streetAddress(),
      "streetC":Faker.Address.streetAddress(true),
      "streetD":Faker.Address.secondaryAddress(),
      "city":Faker.Address.city(),
      "ukCounty":Faker.Address.ukCounty(),
      "ukCountry":Faker.Address.ukCountry(),
      "zipcode":Faker.Address.zipCode()
    },
    "phone":Faker.PhoneNumber.phoneNumber(),
    "website":Faker.Internet.domainName(),
    "company":{
      "name":Faker.Company.companyName(),
      "catchPhrase":Faker.Company.catchPhrase(),
      "bs":Faker.Company.bs(),
    },
    "posts":[
     {
       "words":Faker.Lorem.words(),
       "sentence":Faker.Lorem.sentence(),
       "sentences":Faker.Lorem.sentences(),
       "paragraph":Faker.Lorem.paragraph()
     },
     {
       "words":Faker.Lorem.words(),
       "sentence":Faker.Lorem.sentence(),
       "sentences":Faker.Lorem.sentences(),
       "paragraph":Faker.Lorem.paragraph()
     },
     {
       "words":Faker.Lorem.words(),
       "sentence":Faker.Lorem.sentence(),
       "sentences":Faker.Lorem.sentences(),
       "paragraph":Faker.Lorem.paragraph()
     }
    ]
  };
};


exports.userCard = function(){

  return {
    "name":Faker.Name.findName(),
    "username":Faker.Internet.userName(),
    "email":Faker.Internet.email(),
    "address":{
      "street":Faker.Address.streetName(true),
      "suite":Faker.Address.secondaryAddress(),
      "city":Faker.Address.city(),
      "zipcode":Faker.Address.zipCode()
    },
    "phone":Faker.PhoneNumber.phoneNumber(),
    "website":Faker.Internet.domainName(),
    "company":{
      "name":Faker.Company.companyName(),
      "catchPhrase":Faker.Company.catchPhrase(),
      "bs":Faker.Company.bs(),
    },
  };
};


String.prototype.capitalize = function(){ //v1.0
    return this.replace(/\w+/g, function(a){
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};