var area_code = require("./area_code");
var exchange_code = require("./exchange_code");

localPhoneNumbers = [];
for (let area in area_code) {
    for (let ex in exchange_code) {
        // Every combination of area_code and exchange_code
        localPhoneNumbers.push(area_code[area]+exchange_code[ex]+"####"); 
    }
}

module["exports"] = {
    local: localPhoneNumbers,
    international: localPhoneNumbers.map( function(num) { return "+1"+num; } )
};