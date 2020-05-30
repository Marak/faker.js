var faker = require('faker')

var  fakeName = {
        firstName : faker.name.firstName(),
        lastName  : faker.name.lastName(),
        fullName  :function(firstName,lastName){
                        return this. firstName + " " + this.lastName
                                }       

                };
var  name =fakeName.fullName();
console.log(name);
