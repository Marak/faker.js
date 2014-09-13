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

        // strange issue with the node_min_test failing for captialize, please fix and add faker.Lorem.back
        //return  faker.Lorem.words(wordCount + Helpers.randomNumber(range)).join(' ').capitalize();

        return  faker.Lorem.words(wordCount + faker.random.number(range)).join(' ');
    },

    sentences: function (sentenceCount, glue) {
        glue = glue ? glue : '. ';

        if (typeof sentenceCount == 'undefined') { sentenceCount = 3; }
        var sentences = [];
        for (sentenceCount; sentenceCount > 0; sentenceCount--) {
            sentences.push(faker.Lorem.sentence());
        }

        return sentences.join(glue);
    },

    paragraph: function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 3; }
        return faker.Lorem.sentences(sentenceCount + faker.random.number(3));
    },

    paragraphs: function (paragraphCount) {
        if (typeof paragraphCount == 'undefined') { paragraphCount = 3; }
        var paragraphs = [];
        for (paragraphCount; paragraphCount > 0; paragraphCount--) {
            paragraphs.push(faker.Lorem.paragraph());
        }
        return paragraphs.join("\n \r\t");
    }
};

module.exports = lorem;
