/*

   this task will generate the jsdoc based HTML documentation found in the /doc/ folder

*/

const { src, dest } = require('gulp');
const mustache = require('gulp-mustache');
const rename = require('gulp-rename');
const jsdoc = require('gulp-jsdoc3');

const config = require('../../conf.json');

module.exports = function jdsoc (cb) {
  src(['./README.md', './lib/*.js'], { read: false })
    .pipe(jsdoc(config, cb));
};