/*

  gulpfile.js - gulp script for building Faker package for browser / stand-alone package
  run this file using the gulp command
  
  If this is your first time trying to build faker, you will need to install gulp:

    cd faker.js/
    [sudo] npm install
    [sudo] npm install gulp -g
    cd build/
    gulp

*/

var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ghPages = require('gulp-gh-pages');
var mustache = require('gulp-mustache');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var path = require('path');
var fs = require('fs');
var through = require('through2')

gulp.task('browser-package', function() {

  /* task for building browser bundles using browserify

     this task will generate the following files:

      ./build/faker.js
      ./build/faker.min.js
      ../examples/browser/js/faker.js
      ../examples/browser/js/faker.min.js

  */

  var browserified = transform(function(filename) { 
    // use browserify to create UMD stand-alone browser package
    var b = browserify(filename, {
      standalone: 'faker'
    });
    return b.bundle();
  });

  return gulp.src('../index.js')
    .pipe(browserified)
    .pipe(rename('faker.js'))
    .pipe(gulp.dest('build/'))
    .pipe(gulp.dest('../examples/browser/js'))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(uglify())
    .pipe(gulp.dest('build/'))
    .pipe(gulp.dest('../examples/browser/js'))
    .pipe(rename('../examples/browser/js/faker.min.js'));
});

// pushes jsdoc changes to gh-pages branch
gulp.task('gh-pages', function(cb) {
  return gulp.src('../doc/**/*')
     .pipe(ghPages());
});

gulp.task('jsdoc', function (cb) {
    var config = require('../conf.json');
    gulp.src(['../README.md', '../lib/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});

// builds Readme.md file from docs.md and exported faker methods
gulp.task('documentation', function(cb) {

  /* task for generating documentation

     this task will generate the following file:

      ../Readme.md

  */

  var API = '', LOCALES = '';
  var faker = require('../index');
  
  // generate locale list
  for (var locale in faker.locales) {
    LOCALES += ' * ' + locale + '\n';
  }

  var keys = Object.keys(faker);
  keys = keys.sort();

  // generate nice tree of api for docs
  keys.forEach(function(module){
    // ignore certain properties
    var ignore = ['locale', 'localeFallback', 'definitions', 'locales'];
    if (ignore.indexOf(module) !== -1) {
      return;
    }
    API += '* ' + module + '\n';
    for (var method in faker[module]) {
      API += '  * ' + method + '\n';
    }
  });

  return gulp.src('./src/docs.md')
    .pipe(mustache({
       'API': API,
       'LOCALES': LOCALES,
       'startYear': 2010,
       'currentYear': new Date().getFullYear()
     }))
    .pipe(rename("./Readme.md"))
    .pipe(gulp.dest('../'))

});

var tasks = ['documentation', 'jsdoc', 'nodeLocalRequires', 'browser-package' /*, 'gh-pages' */];

var locales = require('../lib/locales');
var localTasks = Object.keys(locales);

/* task for generating unique browser builds for every locale */
Object.keys(locales).forEach(function(locale, i) {
   if (i > 0) {
     // return;
   }
   tasks.push(locale + 'Task');
   gulp.task(locale + 'Task', function() {

    var browserified = transform(function(filename) {
      // use browserify to create UMD stand-alone browser package
      var b = browserify(filename, {
        standalone: 'faker'
      });
      return b.bundle();
    });
    process.chdir('../locale/');
    return gulp.src('./' + locale + '.js')
      .pipe(browserified)
      .pipe(rename('faker.' + locale + '.js'))
      .pipe(gulp.dest('../build/build/locales/' + locale))
      .pipe(gulp.dest('../examples/browser/locales/' + locale + "/"))
      .pipe(rename({ extname: ".min.js" }))
      .pipe(uglify())
      .pipe(gulp.dest('../build/build/locales/' + locale))
      .pipe(gulp.dest('../examples/browser/locales/' + locale + '/'))
      .pipe(rename('../examples/browser/locales/' + locale + '/' + 'faker.' + locale + 'min.js'));

   });
});

gulp.task('nodeLocalRequires', function (cb){
  var locales = require('../lib/locales');
  for (var locale in locales) {
    var localeFile = path.normalize(__dirname + "/../locale/" + locale + ".js");
    var localeRequire = '';
    localeRequire += "var Faker = require('../lib');\n";
    localeRequire += "var faker = new Faker({ locale: '" + locale + "', localeFallback: 'en' });\n";
    // TODO: better fallback support
    localeRequire += "faker.locales['" + locale + "'] = require('../lib/locales/" + locale + "');\n";
    localeRequire += "faker.locales['" + 'en' + "'] = require('../lib/locales/" + 'en' + "');\n";
    localeRequire += "module['exports'] = faker;\n";
    fs.writeFileSync(localeFile, localeRequire);
  }
  cb();
});


gulp.task('default', tasks);
