localPhoneNumbers = [
    "21#######",
    "22#######",
    "239######",
    "253######",
    "291######",
    "292######",
    "295######",
    "296######",
    "91#######",
    "93#######",
    "96#######"
];

module["exports"] = {
    local: localPhoneNumbers,
    international: localPhoneNumbers.map( function(num) { return "+351"+num; } )
};