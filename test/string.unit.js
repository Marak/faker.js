if (typeof module !== 'undefined') {
    var assert = require('assert');
    var faker = require('../index');
}

describe("string.js", function () {
  describe("random()", function () {
    describe("basic", function () {
      it("returns a random string", function () {

          var value = faker.string.random();

          assert.ok(value.match(/[0-9a-zA-Z]/));
      });
    });

    describe("alphabetic", function () {
      it("returns an alphabetic string", function () {

          var value = faker.string.random({
            charset: 'alphabetic'
          });

          assert.ok(value.match(/[a-zA-Z]/));
      });

      it("returns a 12 char alphabetic string", function () {

          var value = faker.string.random({
            length: 12,
            charset: 'alphabetic'
          });

          assert.ok(value.length === 12);
          assert.ok(value.match(/[a-zA-Z]/));
      });
    })

    describe("lowercase and alphanumeric", function () {
      it("returns a lowercase 20 char alphanumeric string", function () {

          var value = faker.string.random({
            length: 20,
            charset: 'alphanumeric',
            capitalization: 'lowercase'
          });

          assert.ok(value.length === 20);
          assert.ok(value.match(/[0-9a-z]/));
      });
    })
  })

  describe("useful()", function () {
    describe("finance dasherized", function () {
      it("returns dasherized account name", function () {

          var value = faker.string.useful({
            type: 'finance',
            transform: 'dasherize'
          })

          assert.ok(value.match(/([0-9a-z]|\s)+/));
      });
    })

    describe("lorem words(2) slugified", function () {
      it("returns two words slugified", function () {

          var value = faker.string.useful({
            type: 'lorem',
            lorem: {
              method: 'words',
              args: [2]
            },
            transform: 'slugify'
          })
          assert.ok(value.match(/^[a-z]+\-[a-z]+$/));
      });
    })
  })
})