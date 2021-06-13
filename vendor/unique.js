// the `unique` module
var unique = {};

// global results store
// currently uniqueness is global to entire faker instance
// this means that faker should currently *never* return duplicate values across all API methods when using `Faker.unique`
// it's possible in the future that some users may want to scope found per function call instead of faker instance
var globalFound = {};

// scoped results store
var scopedFound = {};

// global exclude list of results
// defaults to nothing excluded
var exclude = [];

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
unique.errorMessage = function ({ now, message, opts, found }) {
  console.error('error', message);
  console.log('found', Object.keys(found).length, 'unique entries before throwing error. \nretried:', currentIterations,
    "\ntotal time:",
    now - opts.startTime,
    "ms"
  );
  throw new Error(
    message +
      " for uniqueness check \n\nMay not be able to generate any more unique values with current settings. \nTry adjusting maxTime or maxRetries parameters for faker.unique()"
  );
};

// clear found values, scoped ones or global
unique.clear = function (scope) {
  if (scope) {
    if (scopedFound[scope]) {
      scopedFound[scope] = undefined;
    }
  } else {
    globalFound = {};
  }
};

unique.exec = function (method, args, opts) {
  //console.log(currentIterations)

  var now = new Date().getTime();

  opts = opts || {};
  opts.maxTime = opts.maxTime || 3;
  opts.maxRetries = opts.maxRetries || 50;
  opts.exclude = opts.exclude || exclude;
  opts.compare = opts.compare || defaultCompare;

  var found;
  if (opts.scope) {
    if (!scopedFound[opts.scope]) {
      scopedFound[opts.scope] = {};
    }
    found = scopedFound[opts.scope];
  } else {
    found = globalFound;
  }

  if (typeof opts.currentIterations !== 'number') {
    opts.currentIterations = 0;
  }

  if (typeof opts.startTime === 'undefined') {
    opts.startTime = new Date().getTime();
  }

  var startTime = opts.startTime;

  // support single exclude argument as string
  if (typeof opts.exclude === 'string') {
    opts.exclude = [opts.exclude];
  }

  if (opts.currentIterations > 0) {
    // console.log('iterating', currentIterations)
  }

  // console.log(now - startTime)
  if (now - startTime >= opts.maxTime) {
    return unique.errorMessage({
      now,
      message: 'Exceeded maxTime:' + opts.maxTime,
      opts,
      found
    });
  }

  if (opts.currentIterations >= opts.maxRetries) {
    return unique.errorMessage({
      now,
      message: 'Exceeded maxRetries:' + opts.maxRetries,
      opts,
      found
    });
  }

  // execute the provided method to find a potential satisfied value
  var result = method.apply(this, args);

  // if the result has not been previously found, add it to the found array and return the value as it's unique
  if (opts.compare(found, result) === -1 && opts.exclude.indexOf(result) === -1) {
    found[result] = result;
    opts.currentIterations = 0;
    return result;
  } else {
    // console.log('conflict', result);
    opts.currentIterations++;
    return unique.exec(method, args, opts);
  }
};

module.exports = unique;
