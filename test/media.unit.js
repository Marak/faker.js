if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("media.js", function () {
  describe("video()", function () {
    it("returns a random url video", function () {
      sinon.stub(faker.media, 'video').returns('http://youtube.com/watch?v=gwi4qv2h8vy');
      const randomUrlVideo = faker.media.video();

      assert.equal(randomUrlVideo, 'http://youtube.com/watch?v=gwi4qv2h8vy');
      faker.media.video.restore();
    });
  });
});
