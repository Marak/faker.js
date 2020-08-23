const { parallel } = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  console.log('please run gulp --tasks to see available tasks for faker.js')
  console.log('you can then try running a command like `gulp readme`')
  cb();
}

exports.browserLocales = require('./build/gulp-tasks/browser-locales');
exports.browser = require('./build/gulp-tasks/browser');
exports.jsdoc = require('./build/gulp-tasks/jsdoc');
exports.readme = require('./build/gulp-tasks/readme');

// exports.build = parallel(javascript, css);
exports.default = defaultTask