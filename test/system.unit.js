if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("system.js", function () {
  describe("directoryPath()", function () {
    it("returns unix fs directory full path", function () {
      sinon.stub(faker.random, 'words').returns('24/7');
      var directoryPath = faker.system.directoryPath();
      assert.strictEqual(directoryPath.indexOf('/'), 0, 'generated directoryPath should start with /');
    
      faker.random.words.restore();
    });
  });

  describe("filePath()", function () {
    it("returns unix fs file full path", function () {
      sinon.stub(faker.random, 'words').returns('24/7');
      var filePath = faker.system.filePath();
      assert.strictEqual(filePath.indexOf('/'), 0, 'generated filePath should start with /');

      faker.random.words.restore();
    });

    it("checks if file full path has extension", function () {
      sinon.stub(faker.random, 'words').returns('24/7');
      var filePath = faker.system.filePath();
      var re = /\.[0-9a-z]{1,5}$/i;
      assert.match(filePath, re, 'generated filePath should have file extension');

      faker.random.words.restore();
    });
  });
    
  describe("fileName()", function () {
    it("returns filenames without system path seperators", function () {
      sinon.stub(faker.random, 'words').returns('24/7');
      var fileName = faker.system.fileName();
      assert.strictEqual(fileName.indexOf('/'), -1, 'generated fileNames should not have path seperators');

      faker.random.words.restore();
    });

    it("checks if filename has extension", function () {
      sinon.stub(faker.random, 'words').returns('24/7');
      var fileName = faker.system.fileName();
      var re = /\.[0-9a-z]{1,5}$/i;
      assert.match(fileName, re, 'generated fileName should have file extension');

      faker.random.words.restore();
    });
  });

  describe("commonFileName()", function () {
    it("returns filenames without system path seperators", function () {
      sinon.stub(faker.random, 'words').returns('24/7');
      var fileName = faker.system.commonFileName();
      assert.strictEqual(fileName.indexOf('/'), -1, 'generated commonFileNames should not have path seperators');

      faker.random.words.restore();
    });
  });
});
