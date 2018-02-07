// the `unique` module
var unique = {};

// global results store
// currently uniqueness is global to entire faker instance
// this means that faker should currently *never* return duplicate values across all API methods when using `Faker.unique`
// it's possible in the future that some users may want to scope found per function call instead of faker instance
var found = {};

// global exclude list of results
// defaults to nothing excluded
var exclude = [];

// maximum time unique.exec will attempt to run before aborting
var maxTime = 5000;

// maximum retries unique.exec will recurse before abortings ( max loop depth )
var maxRetries = 50;

// time the script started
var startTime = new Date().getTime();

// current iteration or retries of unique.exec ( current loop depth )
var currentIterations = 0;

// uniqueness compare function
// default behavior is to check value as key against object hash
var defaultCompare = function(obj, key) {
  if (typeof obj[key] === 'undefined') {
    return -1;
  }
  return 0;
};

// common error handler for messages
unique.errorMessage = function (now, code) {
  console.error('error', code);
  console.log('found', Object.keys(found).length, 'unique entries before throwing error. \nretried:', currentIterations, '\ntotal time:', now - startTime, 'ms');
  throw new Error(code + ' for uniquness check. may not be able to generate any more unique values with current settings. try adjusting maxTime or maxRetries parameters for faker.unique()')
};

unique.exec = function (method, args, opts) {

  var now = new Date().getTime();

  opts = opts || {};
  opts.maxTime = opts.maxTime || maxTime;
  opts.maxRetries = opts.maxRetries || maxRetries;
  opts.exclude = opts.exclude || exclude;
  opts.compare = opts.compare || defaultCompare;

  // support single exclude argument as string
  if (typeof opts.exclude === 'string') {
    opts.exclude = [opts.exclude];
  }

  if (currentIterations > 0) {
    // console.log('iterating', currentIterations)
  }

  // console.log(now - startTime)
  if (now - startTime >= opts.maxTime) {
    return unique.errorMessage(now, 'exceeded maxTime');
  }

  if (currentIterations >= opts.maxRetries) {
    return unique.errorMessage(now, 'exceeded maxRetries');
  }

  // execute the provided method to find a potential satifised value
  var result = method.apply(this, args);

  // if the result has not been previously found, add it to the found array and return the value as it's unique
  if (opts.compare(found, result) === -1 && opts.exclude.indexOf(result) === -1) {
    found[result] = result;
    currentIterations = 0;
    return result;
  } else {
    // console.log('conflict', result);
    currentIterations++;
    return unique.exec(method, args, opts);
  }
};

module.exports = unique;