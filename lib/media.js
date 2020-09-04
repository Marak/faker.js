/**
 *
 * @namespace faker.media
 */
var Media = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * video url
   *
   * @method faker.media.video
   */
  self.video = function () {
    const options = [
      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      0,1,2,3,4,5,6,7,8,9,
      '-','_'
    ];

    const emptyArray = ['','','','','','','','','','',''];
    const arrayRandomUrl = Array.apply(emptyArray).map(function(element) {
      const randomIndex = Math.floor(Math.random()*options.length);
      return options[randomIndex];
    });
    return 'https://www.youtube.com/watch?v=' + arrayRandomUrl.join('');
  };

  self.video.schema = {
    "description": "Generates a random URL video.",
    "sampleResults": [
      "https://www.youtube.com/watch?v=IqAluZyYCOA", 
      "https://www.youtube.com/watch?v=3jSnVDcf0s8", 
      "https://www.youtube.com/watch?v=9MkKK8oGo3I"
    ]
  };
};

module["exports"] = Media;
