var mersenne = require('../vendor/mersenne');

/**
 *
 * @namespace faker.ethereum
 */
function Ethereum(faker, seed) {
  // Use a user provided seed if it exists
  if (seed) {
    if (Array.isArray(seed) && seed.length) {
      mersenne.seed_array(seed);
    }
    else {
      mersenne.seed(seed);
    }
  }

  /**
   * address
   *
   * @method faker.ethereum.address
   */
  this.address = function address() {
    var wholeString = "0x";
    for(var i = 0; i < 40; i++) {
      wholeString += faker.random.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
    }

    return wholeString;
  };

  return this;

}

module['exports'] = Ethereum;
