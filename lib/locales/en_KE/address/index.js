var address = {};
module['exports'] = address;
address.county = require("./county");
address.postcode = require("./postcode");
address.building_number = require("./building_number");
address.street_suffix = require("./street_suffix");
address.default_country = require("./default_country");
