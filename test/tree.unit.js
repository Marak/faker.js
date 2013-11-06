if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var Faker = require('../index');
}

describe("tree.js", function () {
    describe("createTree()", function () {

        var proto = {
            "firstname": "Faker.random.first_name()",
            "children": "__RECURSE__"
        };

        it("requires the width to be at least one", function () {
            sinon.spy(Faker.Tree, 'createTree');

            try {
                Faker.Tree.createTree(0, 0, {});
            }
            catch (e) {
            }

            assert.ok(Faker.Tree.createTree.threw);

            Faker.Tree.createTree.restore();
        });

        it("requires that the object passed in should not be null", function () {
            sinon.spy(Faker.Tree, 'createTree');

            try {
                Faker.Tree.createTree(1, 1, null);
            }
            catch (e) {
            }

            assert.ok(Faker.Tree.createTree.threw);

            Faker.Tree.createTree.restore();

        });

        it("can create a trivial tree with one node", function () {
            sinon.spy(Faker.random, 'first_name');

            var tree = Faker.Tree.createTree(0, 1, proto);

            assert.ok(Faker.random.first_name.calledOnce);

            assert.ok(tree.children == null);

            Faker.random.first_name.restore();
        });

        it("can create a deep tree with one node at each level", function () {
            sinon.spy(Faker.random, 'first_name');
            var tree = Faker.Tree.createTree(2, 1, proto);

            assert.ok(Faker.random.first_name.calledThrice);

            assert.ok(tree.firstname);
            assert.ok(tree.children[0].firstname);
            assert.ok(tree.children[0].children[0].firstname);

            Faker.random.first_name.restore();
        });

        it("can create a basic N-tree", function () {
            var n = 3;
            sinon.spy(Faker.random, 'first_name');
            var tree = Faker.Tree.createTree(1, n, proto);

            assert.ok(Faker.random.first_name.callCount == 4);

            assert.ok(tree.firstname);
            assert.ok(tree.children[0].firstname);
            assert.ok(tree.children[1].firstname);
            assert.ok(tree.children[2].firstname);

            Faker.random.first_name.restore();
        });

        it("can create a full N-tree", function () {
            var n = 3;
            sinon.spy(Faker.random, 'first_name');
            var tree = Faker.Tree.createTree(2, n, proto);

            assert.ok(Faker.random.first_name.callCount == 13);

            Faker.random.first_name.restore();
        });

        it("can accept a function for the width", function () {
            var widthFuncCalled = 0;
            var widthFunc = function () {
                widthFuncCalled = widthFuncCalled + 1;
                return 2;
            };

            var tree = Faker.Tree.createTree(2, widthFunc, proto);
            assert.equal(widthFuncCalled, 3);


        });

    });
});
