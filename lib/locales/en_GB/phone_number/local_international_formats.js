localPhoneNumbers = [
    "01#########",
    "01#########",
    "01#1#######",
    "011########",
    "02#########",
    "03#########",
    "055########",
    "056########",
    "0800#######",
    "08#########",
    "09#########",
    "016977####",
    "01########",
    "0500######",
    "0800######"
];

module["exports"] = {
    local: localPhoneNumbers,
    international: localPhoneNumbers.map( function(num) { return "+44"+num; } )
};