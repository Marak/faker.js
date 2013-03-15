if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("helpers.js", function () {
    describe("replaceSymbolWithNumber()", function () {
        context("when no symbol passed in", function () {
            it("uses '#' by default", function () {
                var num = Faker.Helpers.replaceSymbolWithNumber('#AB');
                assert.ok(num.match(/\dAB/));
            });
        });

        context("when symbol passed in", function () {
            it("replaces that symbol with integers", function () {
                var num = Faker.Helpers.replaceSymbolWithNumber('#AB', 'A');
                assert.ok(num.match(/#\dB/));
            });
        });
    });

    describe("slugify()", function () {
        it("removes unwanted characters from URI string", function () {
            assert.equal(Faker.Helpers.slugify("Aiden.Harªann"), "Aiden.Harann");
            assert.equal(Faker.Helpers.slugify("d'angelo.net"), "dangelo.net");
        });
    });

    describe("createCard()", function () {
        it("returns an object", function () {
            var card = Faker.Helpers.createCard();
            assert.ok(typeof card === 'object');
        });
    });

    describe("userCard()", function () {
        it("returns an object", function () {
            var card = Faker.Helpers.userCard();
            assert.ok(typeof card === 'object');
        });
    });

    // Make sure we keep this function for backward-compatibility.
    describe("randomNumber()", function () {
        it("returns an integer", function () {
            var num = Faker.Helpers.randomNumber();
            assert.ok(typeof num === 'number');
        });
    });

    // Make sure we keep this function for backward-compatibility.
    describe("randomize()", function () {
        it("returns a random element from an array", function () {
            var arr = ['a', 'b', 'c'];
            var elem = Faker.Helpers.randomize(arr);
            assert.ok(elem);
            assert.ok(arr.indexOf(elem) !== -1);
        });
    });
});
