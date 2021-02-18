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

  describe("commitEntry()", function() {
    beforeEach(function() {
      sinon.spy(faker.git, 'commitMessage');
      sinon.spy(faker.git, 'commitSha');
      sinon.spy(faker.internet, 'email');
      sinon.spy(faker.name, 'firstName');
      sinon.spy(faker.name, 'lastName');
      sinon.spy(faker.random, 'number');
    });

    afterEach(function() {
      faker.git.commitMessage.restore();
      faker.git.commitSha.restore();
      faker.internet.email.restore();
      faker.name.firstName.restore();
      faker.name.lastName.restore();
      faker.random.number.restore();
    });

    it("returns merge entry at random", function() {
      faker.git.commitEntry();

      assert.ok(faker.random.number.called);
    });

    it("returns a commit entry with git commit message and sha", function() {
      faker.git.commitEntry();

      assert.ok(faker.git.commitMessage.calledOnce);
      assert.ok(faker.git.commitSha.calledOnce);
    });

    it("returns a commit entry with internet email", function() {
      faker.git.commitEntry();

      assert.ok(faker.internet.email.calledOnce);
    });

    it("returns a commit entry with name first and last", function() {
      faker.git.commitEntry();

      assert.ok(faker.name.firstName.calledTwice);
      assert.ok(faker.name.lastName.calledTwice);
    });

    context("with options['merge'] equal to true", function() {
      beforeEach(function() {
        sinon.spy(faker.git, 'shortSha');
      });

      afterEach(function() {
        faker.git.shortSha.restore();
      });

      it("returns a commit entry with merge details", function() {
        faker.git.commitEntry({ merge: true });

        assert.ok(faker.git.shortSha.calledTwice);
      });
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


  describe("commitSha()", function() {
    it("returns a random commit SHA", function() {
      var commitSha = faker.git.commitSha();
      assert.ok(commitSha.match(/^[a-f0-9]{40}$/));
    });
  });

  describe("shortSha()", function() {
    it("returns a random short SHA", function() {
      var shortSha = faker.git.shortSha();
      assert.ok(shortSha.match(/^[a-f0-9]{7}$/));
    });
  });
});
