var unique = require("../vendor/unique");
/**
 *
 * @namespace faker.unique
 */
function Unique(faker) {
  // initialize unique module class variables

  // maximum time unique.exec will attempt to run before aborting
  var maxTime = 10;

  // maximum retries unique.exec will recurse before abortings ( max loop depth )
  var maxRetries = 10;

  // time the script started
  // var startTime = 0;

  /**
   * exec
   *
   * @method unique
   */
  this.exec = function exec(method, args, opts) {
    opts = opts || {};
    opts.startTime = new Date().getTime();
    if (typeof opts.maxTime !== "number") {
      opts.maxTime = maxTime;
    }
    if (typeof opts.maxRetries !== "number") {
      opts.maxRetries = maxRetries;
    }
    if (typeof opts.scope !== "string") {
      opts.scope = null;
    }
    opts.currentIterations = 0;
    return unique.exec(method, args, opts);
  };

  /**
   * clear
   *
   * @method clear
   */
  this.clear = function clear(scope) {
    if (typeof scope !== "string") {
      return unique.clear(null);
    }
    return unique.clear(scope);
  };

  //return this;
}

module["exports"] = Unique;
