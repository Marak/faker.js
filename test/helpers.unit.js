if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("helpers.js", function () {
    describe("replaceSymbolWithNumber()", function () {
        context("when no symbol passed in", function () {
            it("uses '#' by default", function () {
                var num = faker.helpers.replaceSymbolWithNumber('#AB');
                assert.ok(num.match(/\dAB/));
            });
        });

        context("when symbol passed in", function () {
            it("replaces that symbol with integers", function () {
                var num = faker.helpers.replaceSymbolWithNumber('#AB', 'A');
                assert.ok(num.match(/#\dB/));
            });
        });
    });

    describe("shuffle()", function () {
        it("the output is the same length as the input", function () {
            sinon.spy(faker.random, 'number');
            var shuffled = faker.helpers.shuffle(["a", "b"]);
            assert.ok(shuffled.length === 2);
            assert.ok(faker.random.number.calledWith(1));
            faker.random.number.restore();
        });
    });

    describe("slugify()", function () {
        it("removes unwanted characters from URI string", function () {
            assert.equal(faker.helpers.slugify("Aiden.Harªann"), "Aiden.Harann");
            assert.equal(faker.helpers.slugify("d'angelo.net"), "dangelo.net");
        });
    });

    describe("createCard()", function () {
        it("returns an object", function () {
            var card = faker.helpers.createCard();
            assert.ok(typeof card === 'object');
        });
    });

    describe("userCard()", function () {
        it("returns an object", function () {
            var card = faker.helpers.userCard();
            assert.ok(typeof card === 'object');
        });
    });

    // Make sure we keep this function for backward-compatibility.
    describe("randomize()", function () {
        it("returns a random element from an array", function () {
            var arr = ['a', 'b', 'c'];
            var elem = faker.helpers.randomize(arr);
            assert.ok(elem);
            assert.ok(arr.indexOf(elem) !== -1);
        });
    });

  describe("createTransaction()", function() {
    it("should create a random transaction", function() {
      var transaction = faker.helpers.createTransaction();
      assert.ok(transaction);
      assert.ok(transaction.amount);
      assert.ok(transaction.date);
      assert.ok(transaction.business);
      assert.ok(transaction.name);
      assert.ok(transaction.type);
      assert.ok(transaction.account);
    });
  });

  describe('masked()', function() {
    it('should generate a lowercase character', function() {
      var character = faker.helpers.masked("a");
      var lowercase = /[a-z]/;
      assert.ok(lowercase.test(character));
    });
    it('should generate a uppercase character', function() {
      var character = faker.helpers.masked("A");
      var uppercase = /[A-Z]/;
      assert.ok(uppercase.test(character));
    });
    it('should generate a digit', function() {
      var character = faker.helpers.masked("9");
      var digit = /[0-9]/;
      assert.ok(digit.test(character));
    });
    it('should generate a digit or character', function() {
      var character = faker.helpers.masked("*");
      var any = /[a-zA-Z0-9]/;
      assert.ok(any.test(character));
    });
    it('should generate a digit or character and using non filtred character', function() {
      var character = faker.helpers.masked("99.a-A*");
      var any = /[0-9][0-9].[a-z]-[A-Z][a-zA-Z0-9]/;
      assert.ok(any.test(character));
    });
  });
  
});
