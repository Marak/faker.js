var faker = require('../index');
var Helpers = require('./helpers');
var definitions = require('../lib/definitions');

var lorem = {
    words: function (num) {
        if (typeof num == 'undefined') { num = 3; }
        return Helpers.shuffle(definitions.lorem).slice(0, num);
    },

    sentence: function (wordCount, range) {
        if (typeof wordCount == 'undefined') { wordCount = 3; }
        if (typeof range == 'undefined') { range = 7; }

        // strange issue with the node_min_test failing for captialize, please fix and add this back
        //return  this.words(wordCount + Helpers.randomNumber(range)).join(' ').capitalize();

        return  this.words(wordCount + faker.random.number(7)).join(' ');
    },

    sentences: function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 3; }
        var sentences = [];
        for (sentenceCount; sentenceCount > 0; sentenceCount--) {
            sentences.push(this.sentence());
        }
        return sentences.join("\n");
    },

    paragraph: function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 3; }
        return this.sentences(sentenceCount + faker.random.number(3));
    },

    paragraphs: function (paragraphCount) {
        if (typeof paragraphCount == 'undefined') { paragraphCount = 3; }
        var paragraphs = [];
        for (paragraphCount; paragraphCount > 0; paragraphCount--) {
            paragraphs.push(this.paragraph());
        }
        return paragraphs.join("\n \r\t");
    }
};

module.exports = lorem;
