if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("lorem.js", function () {
    describe("words()", function () {
        beforeEach(function () {
            sinon.spy(Faker.Helpers, 'shuffle');
        });

        afterEach(function () {
            Faker.Helpers.shuffle.restore();
        });

        context("when no 'num' param passed in", function () {
            it("returns three words", function () {
                var words = Faker.Lorem.words();

                assert.ok(Array.isArray(words));
                assert.equal(words.length, 3);
                assert.ok(Faker.Helpers.shuffle.called);
            });
        });

        context("when 'num' param passed in", function () {
            it("returns requested number of words", function () {
                var words = Faker.Lorem.words(7);

                assert.ok(Array.isArray(words));
                assert.equal(words.length, 7);
            });
        });
    });

    describe("sentence()", function () {
        context("when no 'wordCount' or 'range' param passed in", function () {
            it("returns a string of at least three words", function () {
                sinon.spy(Faker.Lorem, 'words');
                sinon.stub(Faker.random, 'number').returns(2);
                var sentence = Faker.Lorem.sentence();

                assert.ok(typeof sentence === 'string');
                var parts = sentence.split(' ');
                assert.equal(parts.length, 5); // default 3 plus stubbed 2.
                assert.ok(Faker.Lorem.words.calledWith(5));

                Faker.Lorem.words.restore();
                Faker.random.number.restore();
            });
        });

        context("when 'wordCount' param passed in", function () {
            it("returns a string of at least the requested number of words", function () {
                sinon.spy(Faker.Lorem, 'words');
                sinon.stub(Faker.random, 'number').returns(2);
                var sentence = Faker.Lorem.sentence(10);

                assert.ok(typeof sentence === 'string');
                var parts = sentence.split(' ');
                assert.equal(parts.length, 12); // requested 10 plus stubbed 2.
                assert.ok(Faker.Lorem.words.calledWith(12));

                Faker.Lorem.words.restore();
                Faker.random.number.restore();
            });
        });

        context("when 'wordCount' and 'range' params passed in", function () {
            it("returns a string of at least the requested number of words", function () {
                sinon.spy(Faker.Lorem, 'words');
                sinon.stub(Faker.random, 'number').returns(4);
                var sentence = Faker.Lorem.sentence(10, 4);

                assert.ok(typeof sentence === 'string');
                var parts = sentence.split(' ');
                assert.equal(parts.length, 14); // requested 10 plus stubbed 4.
                assert.ok(Faker.Lorem.words.calledWith(14));

                Faker.Lorem.words.restore();
                Faker.random.number.restore();
            });
        });
    });

    describe("sentences()", function () {
        context("when no 'sentenceCount' param passed in", function () {
            it("returns newline-separated string of three sentences", function () {
                sinon.spy(Faker.Lorem, 'sentence');
                var sentences = Faker.Lorem.sentences();

                assert.ok(typeof sentences === 'string');
                var parts = sentences.split('\n');
                assert.equal(parts.length, 3);
                assert.ok(Faker.Lorem.sentence.calledThrice);

                Faker.Lorem.sentence.restore();
            });
        });

        context("when 'sentenceCount' param passed in", function () {
            it("returns newline-separated string of requested number of sentences", function () {
                sinon.spy(Faker.Lorem, 'sentence');
                var sentences = Faker.Lorem.sentences(5);

                assert.ok(typeof sentences === 'string');
                var parts = sentences.split('\n');
                assert.equal(parts.length, 5);

                Faker.Lorem.sentence.restore();
            });
        });
    });

    describe("paragraph()", function () {
        context("when no 'wordCount' param passed in", function () {
            it("returns a string of at least three sentences", function () {
                sinon.spy(Faker.Lorem, 'sentences');
                sinon.stub(Faker.random, 'number').returns(2);
                var paragraph = Faker.Lorem.paragraph();

                assert.ok(typeof paragraph === 'string');
                var parts = paragraph.split('\n');
                assert.equal(parts.length, 5); // default 3 plus stubbed 2.
                assert.ok(Faker.Lorem.sentences.calledWith(5));

                Faker.Lorem.sentences.restore();
                Faker.random.number.restore();
            });
        });

        context("when 'wordCount' param passed in", function () {
            it("returns a string of at least the requested number of sentences", function () {
                sinon.spy(Faker.Lorem, 'sentences');
                sinon.stub(Faker.random, 'number').returns(2);
                var paragraph = Faker.Lorem.paragraph(10);

                assert.ok(typeof paragraph === 'string');
                var parts = paragraph.split('\n');
                assert.equal(parts.length, 12); // requested 10 plus stubbed 2.
                assert.ok(Faker.Lorem.sentences.calledWith(12));

                Faker.Lorem.sentences.restore();
                Faker.random.number.restore();
            });
        });
    });

    describe("paragraphs()", function () {
        context("when no 'paragraphCount' param passed in", function () {
            it("returns newline-separated string of three paragraphs", function () {
                sinon.spy(Faker.Lorem, 'paragraph');
                var paragraphs = Faker.Lorem.paragraphs();

                assert.ok(typeof paragraphs === 'string');
                var parts = paragraphs.split('\n \r\t');
                assert.equal(parts.length, 3);
                assert.ok(Faker.Lorem.paragraph.calledThrice);

                Faker.Lorem.paragraph.restore();
            });
        });

        context("when 'paragraphCount' param passed in", function () {
            it("returns newline-separated string of requested number of paragraphs", function () {
                sinon.spy(Faker.Lorem, 'paragraph');
                var paragraphs = Faker.Lorem.paragraphs(5);

                assert.ok(typeof paragraphs === 'string');
                var parts = paragraphs.split('\n \r\t');
                assert.equal(parts.length, 5);

                Faker.Lorem.paragraph.restore();
            });
        });
    });
});
