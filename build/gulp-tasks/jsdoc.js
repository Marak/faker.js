/*

   this task will generate the jsdoc based HTML documentation found in the /doc/ folder

*/

const { src, dest } = require('gulp');
const jsdoc = require('gulp-jsdoc3');

const config = require('../../conf.json');

module.exports = function jdsoc(cb) {
  src(['./README.md', './lib/**/*.js', '!./lib/locales/**/*.js'], {
    read: false,
  }).pipe(jsdoc(config, cb));
};
