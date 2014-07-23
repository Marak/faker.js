var faker = require("../index");

var date = {

    past: function (years, refDate) {
        var date = (refDate) ? new Date(Date.parse(refDate)) : new Date();

        var past = date.getTime();
        past -= faker.random.number(years) * 365 * 3600 * 1000; // some time from now to N years ago, in milliseconds
        date.setTime(past);

        return date.toJSON();
    },

    future: function (years, refDate) {
        var date = (refDate) ? new Date(Date.parse(refDate)) : new Date();
        var future = date.getTime();
        future += faker.random.number(years) * 365 * 3600 * 1000 + 1000; // some time from now to N years later, in milliseconds
        date.setTime(future);

        return date.toJSON();
    },

    between: function(from, to) {
        var fromMilli = Date.parse(from);
        var dateOffset = faker.random.number(Date.parse(to) - fromMilli);

        var newDate = new Date(fromMilli + dateOffset);

        return newDate.toJSON();
    },

    recent: function (days) {
        var date = new Date();
        var future = date.getTime();
        future -= faker.random.number(days) * 24 * 60 * 60 * 1000; // some time from now to N days ago, in milliseconds
        date.setTime(future);

        return date.toJSON();
    }
};
module.exports = date;
