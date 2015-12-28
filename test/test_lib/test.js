var TestModule = function (faker) {
  var self = this;
  
  self.meaning_of_life = function () {
    return 42;
  };

  return self;
};

module['exports'] = TestModule;