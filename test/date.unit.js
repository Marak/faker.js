if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("date.js", function () {
    describe("past()", function () {
        it("returns a date N years into the past", function () {

            var date = Faker.Date.past(75);
            assert.ok(Date.parse(date) < new Date());
        });

        it("returns a date N years before the date given", function () {

            var refDate = new Date(2120, 11, 9, 10, 0, 0, 0); // set the date beyond the usual calculation (to make sure this is working correctly)

            var date = Date.parse(Faker.Date.past(75, refDate.toJSON()));

            assert.ok(date < refDate && date > new Date()); // date should be before date given but after the current time
        });

    });

    describe("future()", function () {
        it("returns a date N years into the future", function () {

            var date = Faker.Date.future(75);

            assert.ok(Date.parse(date) > new Date());
        });

        it("returns a date N years after the date given", function () {

            var refDate = new Date(1880, 11, 9, 10, 0, 0, 0); // set the date beyond the usual calculation (to make sure this is working correctly)

            var date = Date.parse(Faker.Date.future(75, refDate.toJSON()));

            assert.ok(date > refDate && date < new Date()); // date should be after the date given, but before the current time
        });
    });

    describe("recent()", function () {
        it("returns a date N days from the recent past", function () {

            var date = Faker.Date.recent(30);

            assert.ok(Date.parse(date) < new Date());
        });

    });

    describe("between()", function () {
        it("returns a random date between the dates given", function () {

            var from = new Date(1990, 5, 7, 9, 11, 0, 0);
            var to = new Date(2000, 6, 8, 10, 12, 0, 0);

            var date = Date.parse(Faker.Date.between(from, to));

            assert.ok(date > from && date < to);
        });
    });
});
