if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("git.js", function() {
  describe("branch()", function() {
    beforeEach(function() {
      sinon.spy(faker.hacker, 'noun');
      sinon.spy(faker.hacker, 'verb');
    });

    afterEach(function() {
      faker.hacker.noun.restore();
      faker.hacker.verb.restore();
    });

    it("returns a branch with hacker noun and verb", function() {
      faker.git.branch();

      assert.ok(faker.hacker.noun.calledOnce);
      assert.ok(faker.hacker.verb.calledOnce);
    });
  });

  describe("commitSha()", function() {
    it("returns a random commit SHA", function() {
      var commitSha = faker.git.commitSha();
      assert.ok(commitSha.match(/^[a-z0-9]{40}$/));
    });
  });

  describe("commitMessage()", function() {
    beforeEach(function() {
      sinon.spy(faker.hacker, 'verb');
      sinon.spy(faker.hacker, 'adjective');
      sinon.spy(faker.hacker, 'noun');
    });

    afterEach(function() {
      faker.hacker.verb.restore();
      faker.hacker.adjective.restore();
      faker.hacker.noun.restore();
    });

    it("returns a commit message with hacker noun, adj and verb", function() {
      faker.git.commitMessage();

      assert.ok(faker.hacker.verb.calledOnce);
      assert.ok(faker.hacker.adjective.calledOnce);
      assert.ok(faker.hacker.noun.calledOnce);
    });
  });

  describe("shortSha()", function() {
    it("returns a random short SHA", function() {
      var shortSha = faker.git.shortSha();
      assert.ok(shortSha.match(/^[a-z0-9]{7}$/));
    });
  });
});
