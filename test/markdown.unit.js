if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}


describe("markdown.js", function () {
    describe("header()", function () {
        context("when no 'num' param passed in", function () {
            it("returns text beginning with '#'", function () {
                var header = faker.markdown.header();
                assert.equal(0, header.indexOf("#"));
            });
        });

        context("when 'num' param passd in", function () {
            it("returns text beginning with '#' * num", function () {
                var header = faker.markdown.header(5);
                assert.equal(0, header.indexOf("#####"));
            });
        });
    });

    describe("emphasis()", function () {
        context("when no 'type' param passed in", function () {
            it("returns emphasis text", function () {
                var text = faker.markdown.emphasis();
                var regexp = /\*|\_|\~/gi;
                assert(text.match(regexp).length >= 2);
                // assert.ok(faker.helpers.shuffle.called);
            });
        });
        
        context("when 'type' param passed in", function () {
            it("returns striped text", function () {
                var text = faker.markdown.emphasis("~");
                var regexp = /\~/gi;
                assert(text.match(regexp).length >= 2);
                // assert.ok(faker.helpers.shuffle.called);
            });
        });
    });
    
    describe("table()", function () {
        context("when no 'num' param passed in", function () {
            it("returns number of rows is 5 (head + hyphens + num)", function () {
                var table = faker.markdown.table().split("\n");
                assert.equal(table.length, 5)
            });
        });
        
        context("when 'num' param passed in", function () {
            it("returns number of rows is 'num'", function () {
                var table = faker.markdown.table(5).split("\n");
                assert.equal(table.length, 7)
            });
        });
    });

    describe("orderdList()", function () {
        context("when no 'num' param passed in", function () {
            it("returns 3 ordered list", function () {
                var list = faker.markdown.orderedList().split("\n");
                assert.equal(list.length, 3);
                assert.equal(list[0].substr(0, 1), '1');
            });
        });

        context("when 'num' param passed in", function () {
            it("returns 5 ordered list", function () {
                var list = faker.markdown.orderedList(5).split("\n");
                assert.equal(list.length, 5);
                assert.equal(list[0].substr(0, 1), '1');
            });
        });
    });
    
    describe("unorderdList()", function () {
        context("when no 'num' param passed in", function () {
            it("returns 3 unordered list", function () {
                var list = faker.markdown.unorderedList().split("\n");
                assert.equal(list.length, 3);
                assert.equal(list[0].substr(0, 1), '*');
            });
        });

        context("when 'num' param passed in", function () {
            it("returns 5 unordered list", function () {
                var list = faker.markdown.unorderedList(5).split("\n");
                assert.equal(list.length, 5);
                assert.equal(list[0].substr(0, 1), '*');
            });
        });
    });

    describe("inlineCode()", function () {
        it("return inline code text", function () {
            var text = faker.markdown.inlineCode();
            assert.equal(text.substr(0, 1), '`');
            assert.equal(text.substr(text.length - 1), '`');
        });
    });

    describe("bockCode()", function () {
        it("returns block code text", function () {
            var text = faker.markdown.blockCode();
            assert.equal(text.substr(0, 3), '```');
            assert.equal(text.substr(text.length - 3), '```');
        });
    });
});
