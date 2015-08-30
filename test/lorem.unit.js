if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("lorem.js", function() {
    describe("words()", function() {
        beforeEach(function() {
            sinon.spy(faker.helpers, 'shuffle');
        });

        afterEach(function() {
            faker.helpers.shuffle.restore();
        });

        context("when no 'num' param passed in", function() {
            it("returns three words", function() {
                var words = faker.lorem.words();

                assert.ok(Array.isArray(words));
                assert.equal(words.length, 3);
                assert.ok(faker.helpers.shuffle.called);
            });
        });

        context("when 'num' param passed in", function() {
            it("returns requested number of words", function() {
                var words = faker.lorem.words(7);

                assert.ok(Array.isArray(words));
                assert.equal(words.length, 7);
            });
        });
    });

    describe("word()", function() {
        it("returns a random word", function() {
            sinon.spy(faker.lorem, 'words');

            var word = faker.lorem.word();

            assert.ok(typeof word === 'string');
            assert.ok(faker.lorem.words.calledWith(1));

            faker.lorem.words.restore();
        });
    });

    describe("sentence()", function() {
        context("when no 'wordCount' or 'range' param passed in", function() {
            it("returns a string of at least three words", function() {
                sinon.spy(faker.lorem, 'words');
                sinon.stub(faker.random, 'number').returns(2);
                var sentence = faker.lorem.sentence();

                assert.ok(typeof sentence === 'string');
                var parts = sentence.split(' ');
                assert.equal(parts.length, 5); // default 3 plus stubbed 2.
                assert.ok(faker.lorem.words.calledWith(5));

                faker.lorem.words.restore();
                faker.random.number.restore();
            });
        });

        context("when 'wordCount' param passed in", function() {
            it("returns a string of at least the requested number of words", function() {
                sinon.spy(faker.lorem, 'words');
                sinon.stub(faker.random, 'number').withArgs(7).returns(2);
                var sentence = faker.lorem.sentence(10);

                assert.ok(typeof sentence === 'string');
                var parts = sentence.split(' ');
                assert.equal(parts.length, 12); // requested 10 plus stubbed 2.
                assert.ok(faker.lorem.words.calledWith(12));

                faker.lorem.words.restore();
                faker.random.number.restore();
            });
        });

        context("when 'wordCount' and 'range' params passed in", function() {
            it("returns a string of at least the requested number of words", function() {
                sinon.spy(faker.lorem, 'words');
                sinon.stub(faker.random, 'number').withArgs(4).returns(4);

                var sentence = faker.lorem.sentence(10, 4);

                assert.ok(typeof sentence === 'string');
                var parts = sentence.split(' ');
                assert.equal(parts.length, 14); // requested 10 plus stubbed 4.
                assert.ok(faker.random.number.calledWith(4)); // random.number should be called with the 'range' we passed. 
                assert.ok(faker.lorem.words.calledWith(14));

                faker.lorem.words.restore();
                faker.random.number.restore();
            });


        });
    });

    describe("sentences()", function() {
        context("when no 'sentenceCount' param passed in", function() {
            it("returns newline-separated string of three sentences", function() {
                sinon.spy(faker.lorem, 'sentence');
                var sentences = faker.lorem.sentences();

                assert.ok(typeof sentences === 'string');
                var parts = sentences.split('\n');
                assert.equal(parts.length, 3);
                assert.ok(faker.lorem.sentence.calledThrice);

                faker.lorem.sentence.restore();
            });
        });

        context("when 'sentenceCount' param passed in", function() {
            it("returns newline-separated string of requested number of sentences", function() {
                sinon.spy(faker.lorem, 'sentence');
                var sentences = faker.lorem.sentences(5);

                assert.ok(typeof sentences === 'string');
                var parts = sentences.split('\n');
                assert.equal(parts.length, 5);

                faker.lorem.sentence.restore();
            });
        });
    });

    describe("paragraph()", function() {
        context("when no 'wordCount' param passed in", function() {
            it("returns a string of at least three sentences", function() {
                sinon.spy(faker.lorem, 'sentences');
                sinon.stub(faker.random, 'number').returns(2);
                var paragraph = faker.lorem.paragraph();

                assert.ok(typeof paragraph === 'string');
                var parts = paragraph.split('\n');
                assert.equal(parts.length, 5); // default 3 plus stubbed 2.
                assert.ok(faker.lorem.sentences.calledWith(5));

                faker.lorem.sentences.restore();
                faker.random.number.restore();
            });
        });

        context("when 'wordCount' param passed in", function() {
            it("returns a string of at least the requested number of sentences", function() {
                sinon.spy(faker.lorem, 'sentences');
                sinon.stub(faker.random, 'number').returns(2);
                var paragraph = faker.lorem.paragraph(10);

                assert.ok(typeof paragraph === 'string');
                var parts = paragraph.split('\n');
                assert.equal(parts.length, 12); // requested 10 plus stubbed 2.
                assert.ok(faker.lorem.sentences.calledWith(12));

                faker.lorem.sentences.restore();
                faker.random.number.restore();
            });
        });
    });

    describe("paragraphs()", function() {
        context("when no 'paragraphCount' param passed in", function() {
            it("returns newline-separated string of three paragraphs", function() {
                sinon.spy(faker.lorem, 'paragraph');
                var paragraphs = faker.lorem.paragraphs();

                assert.ok(typeof paragraphs === 'string');
                var parts = paragraphs.split('\n \r');
                assert.equal(parts.length, 3);
                assert.ok(faker.lorem.paragraph.calledThrice);

                faker.lorem.paragraph.restore();
            });
        });

        context("when 'paragraphCount' param passed in", function() {
            it("returns newline-separated string of requested number of paragraphs", function() {
                sinon.spy(faker.lorem, 'paragraph');
                var paragraphs = faker.lorem.paragraphs(5);

                assert.ok(typeof paragraphs === 'string');
                var parts = paragraphs.split('\n \r');
                assert.equal(parts.length, 5);

                faker.lorem.paragraph.restore();
            });
        });
    });
});