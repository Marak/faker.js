if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("database.js", function () {
    describe("column()", function () {
        it("returns a column name", function () {
            sinon.stub(faker.database, 'column').returns('title');
            var column = faker.database.column();

            assert.equal(column, 'title');
            faker.database.column.restore();
        });
    });

    describe("collation()", function () {
        it("returns a collation", function () {
            sinon.stub(faker.database, 'collation').returns('utf8_bin');
            var collation = faker.database.collation();

            assert.equal(collation, 'utf8_bin');
            faker.database.collation.restore();
        });
    });

    describe("engine()", function () {
        it("returns an engine", function () {
            sinon.stub(faker.database, 'engine').returns('InnoDB');
            var engine = faker.database.engine();

            assert.equal(engine, 'InnoDB');
            faker.database.engine.restore();
        });
    });

    describe("type()", function () {
        it("returns a column type", function () {
            sinon.stub(faker.database, 'type').returns('int');
            var type = faker.database.type();

            assert.equal(type, 'int');
            faker.database.type.restore();
        });
    });
});
