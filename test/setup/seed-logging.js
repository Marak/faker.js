if (typeof module !== 'undefined') {
    var faker = require('../../index');
}

/**
 * Tells faker to use a generated seed. Logs to the console.
 * You can also set your SEED environment variable to override this.
 */
before(function () {
    if(process.env.SEED) {
        faker.seed(parseInt(process.env.SEED, 10));
    };

    console.log("Seed:", faker.seedValue);
});