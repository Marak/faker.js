var sys = require('sys')
   , fs = require('fs');

var faker= require('../index');


// generate dataSet as example
fs.writeFile('../examples/dataSet.json',  JSON.stringify(faker.Helpers.userCard()), function() {
  sys.puts("dataSet generated successfully!");
});
// generate bigDataSet as example
var bigSet = [];

for(i = 20; i >= 0; i--){
  bigSet.push(faker.Helpers.userCard());
};

fs.writeFile('../examples/bigDataSet.json',  JSON.stringify(bigSet), function() {
  sys.puts("bigDataSet generated successfully!");
});
