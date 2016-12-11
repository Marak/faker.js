/*
 * password-generator
 * Copyright(c) 2011-2013 Bermi Ferrer <bermi@bermilabs.com>
 * MIT Licensed
 */
(function (root) {

  var localName, consonant, letter, password, vowel;
  letter = /[a-zA-Z]$/;
  vowel = /[aeiouAEIOU]$/;
  consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/;


  // Defines the name of the local variable the passwordGenerator library will use
  // this is specially useful if window.passwordGenerator is already being used
  // by your application and you want a different name. For example:
  //    // Declare before including the passwordGenerator library
  //    var localPasswordGeneratorLibraryName = 'pass';
  localName = root && root.localPasswordGeneratorLibraryName || "generatePassword",

  password = function (length, memorable, pattern, prefix) {
    var char, n;
    if (length == null) {
      length = 10;
    }
    if (memorable == null) {
      memorable = true;
    }
    if (pattern == null) {
      pattern = /\w/;
    }
    if (prefix == null) {
      prefix = '';
    }
    if (prefix.length >= length) {
      return prefix;
    }
    if (memorable) {
      if (prefix.match(consonant)) {
        pattern = vowel;
      } else {
        pattern = consonant;
      }
    }
    n = Math.floor(Math.random() * 94) + 33;
    char = String.fromCharCode(n);
    if (memorable) {
      char = char.toLowerCase();
    }
    if (!char.match(pattern)) {
      return password(length, memorable, pattern, prefix);
    }
    return password(length, memorable, pattern, "" + prefix + char);
  };


  ((typeof exports !== 'undefined') ? exports : root)[localName] = password;
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = password;
    }
  }

  // Establish the root object, `window` in the browser, or `global` on the server.
}(this));