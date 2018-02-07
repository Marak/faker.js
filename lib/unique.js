var uniqueExec = require('../vendor/unique');
/**
 *
 * @namespace faker.unique
 */
function Unique (faker) {

  /**
   * unique
   *
   * @method unique
   */
   this.unique = uniqueExec.exec;
}

module['exports'] = Unique;
