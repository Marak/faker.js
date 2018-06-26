/**
 * @namespace faker.git
 */

var Git = function(faker) {
  var self = this;
  var f = faker.fake;

  /**
   * branch
   *
   * @method faker.git.branch
   */
  self.branch = function() {
    var noun = faker.hacker.noun().replace(' ', '-');
    var verb = faker.hacker.verb().replace(' ', '-');
    return 'noun' + '-' + 'verb';
  }

  /**
   * commitSha
   *
   * @method faker.git.commitSha
   */
  self.commitSha = function() {
    var commit = "";

    for (var i = 0; i < 40; i++) {
      commit += faker.random.alphaNumeric();
    }

    return commit;
  };

  /**
   * commitMessage
   *
   * @method faker.git.commitMessage
   */
  self.commitMessage = function() {
    var format = '{{hacker.verb}} {{hacker.adjective}} {{hacker.noun}}';
    return f(format);
  };

  /**
   * shortSha
   *
   * @method faker.git.shortSha
   */
  self.shortSha = function() {
    var shortSha = "";

    for (var i = 0; i < 7; i++) {
      shortSha += faker.random.alphaNumeric();
    }

    return shortSha;
  };

  return self;
}

module['exports'] = Git;