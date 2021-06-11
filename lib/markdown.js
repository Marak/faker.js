
/**
 *
 * @namespace faker.markdown
 */
var Markdown = function (faker) {
  var self = this;
  var Helpers = faker.helpers;

  /**
   * header
   *
   * @method faker.markdown.header
   * @param {number} num number of '#', defaults to 1
   */
  self.header = function (num) {
    if (typeof num == 'undefined') { num = 1; }
    var head = new Array(num + 1).join("#")
    return [head, faker.lorem.word()].join(' ')
  }

  /**
   * emphasis
   *
   * @method faker.markdown.emphasis
   * @param {string} type emphasis
   */
  self.emphasis = function (type) {
    var types = [
      '_',
      '~',
      '*',
      '**'
    ];
    var words = faker.lorem.words(3).split(' ')
    var position = faker.random.number(words.length);
    if (typeof type == 'undefined') { type = types[faker.random.number(types.length - 1)] }
    words[position] = type + words[position] + type;
    return words.join(' ')
  }

  /**
   * table
   *
   * @method faker.markdown.table
   * @param {number} num tabl rows
   */
  self.table = function (num) {
    if (typeof num == 'undefined') { num = 3 }
    var table = [
      "| head1 | head2 | head3 |",
      "|:-----:|:-----:|:-----:|"
    ];
    for (var i=0; num > i; i++) {
      var line = ["|", faker.lorem.words(3).split(' ').join("|"), "|"].join("");
      table.push(line);
    }
    return table.join("\n");
  }

  /**
   * orderedList
   *
   * @method faker.markdown.orderdList
   * @param {number} num of list
   */
  self.orderedList = function (num) {
    if (typeof num == 'undefined') { num = 3 }
    var words = faker.lorem.words(num).split(' ');
    var list = [];
    words.forEach(function (word, index) {
      list.push([index+1, ". ", word].join(''))
    })
    return list.join('\n')
  }

  /**
   * unorderedList
   *
   * @method faker.markdown.unorderdList
   * @param {number} num of list
   */
  self.unorderedList = function (num) {
    if (typeof num == 'undefined') { num = 3 }
    var words = faker.lorem.words(num).split(' ');
    var list = [];
    words.forEach(function (word, index) {
      list.push(`* ${word}`)
    })
    return list.join('\n')
  }

  /**
   * inlineCode
   *
   * @method faker.markdown.inlineCode
   */
  self.inlineCode = function () {
    return ['`', faker.lorem.word(), '`'].join('')
  }

  /**
   * blockCode
   *
   * @method faker.markdown.blockCode
   */
  self.blockCode = function () {
    return ['```javascript\n', faker.lorem.word(), '\n```'].join('')
  }

  return self;
}

module["exports"] = Markdown;
