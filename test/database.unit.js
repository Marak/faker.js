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
      var expected = 'title';

      assert.strictEqual(column, expected, "The column name should be equals " + expected + ". Current is " + column);
      faker.database.column.restore();
    });
  });

  describe("collation()", function () {
    it("returns a collation", function () {
      sinon.stub(faker.database, 'collation').returns('utf8_bin');
      var collation = faker.database.collation();
      var expected = 'utf8_bin';

      assert.strictEqual(collation, expected, "The collation should be equals " + expected + ". Current is " + collation);
      faker.database.collation.restore();
    });
  });

  describe("engine()", function () {
    it("returns an engine", function () {
      sinon.stub(faker.database, 'engine').returns('InnoDB');
      var engine = faker.database.engine();
      var expected = 'InnoDB';

      assert.strictEqual(engine, expected, "The db engine should be equals " + expected + ". Current is " + engine);
      faker.database.engine.restore();
    });
  });

  describe("type()", function () {
    it("returns a column type", function () {
      sinon.stub(faker.database, 'type').returns('int');
      var type = faker.database.type();
      var expected = 'int';

      assert.strictEqual(type, expected, "The column type should be equals " + expected + ". Current is " + type);
      faker.database.type.restore();
    });
  });
});
