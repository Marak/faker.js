var util = require('util')
   , fs = require('fs');

var Faker= require('../index');


// generate dataSet as example
fs.writeFile('../examples/dataSet.json',  JSON.stringify(Faker.Helpers.userCard()), function() {
  util.puts("dataSet generated successfully!");
});
// generate bigDataSet as example
var bigSet = [];

for(i = 20; i >= 0; i--){
  bigSet.push(Faker.Helpers.userCard());
};

fs.writeFile('../examples/bigDataSet.json',  JSON.stringify(bigSet), function() {
  util.puts("bigDataSet generated successfully!");
});
