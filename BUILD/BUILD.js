var sys = require('sys')
   , fs = require('fs')
   , M = require('./Mustache');




var code = '';
var docs = {};

docs.main = '';
docs.API = '';

// read in the the main.js file as our main boilerplate code
code += fs.readFileSync('./main.js', encoding='utf8');
code = M.Mustache.to_html(code, {"today":new Date().getTime()});

docs.main += fs.readFileSync('./docs.js', encoding='utf8');

// parse entire lib directory and concat it into one file for the browser
var lib = paths('./lib');


var Faker= require('../index');

// generate bundle for code on the browser
for(var module in Faker){
  code += ( '\n' + 'Faker.' + module + ' = {};');
  for(var method in Faker[module]){
    code += ( '\n' + 'Faker.' + module);
    code += ( '.' + method + ' = ');
    code += (Faker[module][method].toString() + ';\n');
  }
}

// generate nice tree of api for docs
docs.API += '<ul>';
for(var module in Faker){
  docs.API += '<li>' + module;
    docs.API += '<ul>'
    for(var method in Faker[module]){
      docs.API += '<li>' + method + '</li>';
    }
    docs.API += '</ul>';
  docs.API += '</li>';
}
docs.API += '</ul>';

// definitions hack
code += 'var definitions = Faker.definitions; \n';
code += 'var Helpers = Faker.Helpers; \n';

// exports hack for dual sided stuff
// if we are running in a CommonJS env, export everything out
code += 'if(typeof exports != "undefined"){for(var prop in Faker){exports[prop] = Faker[prop];}}';

// generate core library
fs.writeFile('../Faker.js', code, function() {
  sys.puts("Faker.js generated successfully!");
});

// generate example js file as well
fs.writeFile('../examples/js/Faker.js', code, function() {
  sys.puts("Faker.js generated successfully!");
});


var docOutput = M.Mustache.to_html(docs.main, {"API":docs.API});

// generate some samples sets (move this code to another section)
fs.writeFile('../Readme.md', docOutput, function() {
  sys.puts("Docs generated successfully!");
});

/*********************** BUILD HELPER METHODS *********************/

  // Recursively traverse a hierarchy, returning a list of all relevant .js files.
  function paths(dir) {
      var paths = [];

      try { fs.statSync(dir) }
      catch (e) { return e }

      (function traverse(dir, stack) {
          stack.push(dir);
          fs.readdirSync(stack.join('/')).forEach(function (file) {
              var path = stack.concat([file]).join('/'),
                  stat = fs.statSync(path);

              if (file[0] == '.' || file === 'vendor') {
                  return;
              } else if (stat.isFile() && /\.js$/.test(file)) {
                  paths.push(path);
              } else if (stat.isDirectory()) {
                  paths.push(path);
                  traverse(file, stack);
              }
          });
          stack.pop();
      })(dir || '.', []);

      return paths;
  }

