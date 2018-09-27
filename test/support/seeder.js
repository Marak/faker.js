if (typeof module !== 'undefined') {
    var faker = require('../../index');
}

/**
 * Tells faker to use a generated seed. Logs to the console.
 * You can also set your SEED environment variable to override this.
 */
module.exports = function Seeder () {
    var seed = process.env.SEED ? parseInt(process.env.SEED) : Math.floor(Math.random() * 1000000);

    faker.seed(seed);
    
    console.log("Seed:", seed);

    return seed;
}