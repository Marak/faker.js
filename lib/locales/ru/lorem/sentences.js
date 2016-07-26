var data = require('./sentences-data');

var sentences = {};
data.forEach(function (sentence) {
    var normalized = sentence
        .replace(/^[а-яА-Я]/, ' ')
        .replace(/\s+/, ' ')
        .trim()
        .split(/\s+/);
    var count = 0;
    normalized.forEach(function (word) {
        if (word.length > 3) {
            count++;
        }
    });
    if (!sentences[count]) {
        sentences[count] = [];
    }
    sentences[count].push(sentence);
});

module["exports"] = sentences;
