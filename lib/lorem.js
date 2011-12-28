var Helpers = require('./helpers');
var definitions = require('../lib/definitions');

exports.words = function(num){
  if( typeof num == 'undefined'){ var num = 3;}
  return Helpers.shuffle(definitions.lorem()).slice(0, num);
  //Words.shuffle[0, num]
};

exports.sentence = function(wordCount){
  if( typeof wordCount == 'undefined'){ var wordCount = 3;}

  // strange issue with the node_min_test failing for captialize, please fix and add this back
  //return  this.words(wordCount + Helpers.randomNumber(7)).join(' ').capitalize();

  return  this.words(wordCount + Helpers.randomNumber(7)).join(' ');
};

exports.sentences = function(sentenceCount){
  if( typeof sentenceCount == 'undefined'){ var sentenceCount = 3;}
  var sentences = [];
  for(sentenceCount; sentenceCount >= 0; sentenceCount--){
    sentences.push(this.sentence());
  }
  return sentences.join("\n");
};

exports.paragraph = function(sentenceCount){
  if( typeof sentenceCount == 'undefined'){ var sentenceCount = 3;}
  return this.sentences(sentenceCount + Helpers.randomNumber(3));
};

exports.paragraphs = function(paragraphCount){
  if( typeof paragraphCount == 'undefined'){ var paragraphCount = 3;}
  var paragraphs = [];
  for(paragraphCount; paragraphCount >= 0; paragraphCount--){
    paragraphs.push(this.paragraph());
  }
  return paragraphs.join("\n \r\t");
};
