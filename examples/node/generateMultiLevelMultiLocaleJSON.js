// This example shows the generation of a multilevel object and JSON document using various faker.js features
// including name, address, company, date and commerce namespaces, moustache expressions and random element production
// Using the helper function arr, randomly sized collections of elements are produced in the document.

var faker = require('../../index');
var fs = require('fs');
// produce array with random number of empty elements 
const arr = (maxNumberOfElements) => new Array(faker.random.number({min: 1, max: maxNumberOfElements})).fill()

const locales = ["nl","es","de","fr","en_AU"]
const company = 
  { "name"        : faker.company.companyName()
  , "country"     : faker.address.country()
  , "departments" : arr(8).map(() =>  { faker.locale = faker.random.arrayElement(locales)
                                        return { "name"     : faker.commerce.department()
                                               , "location" : faker.fake("{{address.city}} ({{address.country}})")
                                               , "employees": arr(20).map(() => {
                                                                 return { "name"     : faker.fake("{{name.firstName}} {{name.lastName}}")
                                                                        , "job"      : faker.name.jobTitle()
                                                                        , "hiredate" : faker.date.past(12).toISOString().split('T')[0]
                                                                        , "salary"   : faker.random.number(700, 9000)
                                                                        }
                                                               })
                                               }
                                     })
  }                                        

  console.log(JSON.stringify(company))
  fs.writeFile(__dirname + '/companyDataSet.json',  JSON.stringify(company), function() {
    console.log("dataSet generated successfully!");
  });