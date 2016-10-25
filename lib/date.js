var moment = require('moment')
var timestamp = require('internet-timestamp');

/**
 *
 * @namespace faker.date
 */
var _Date = function (faker) {
  var self = this;

  function formatDate(date, options) {
    // console.log('formatDate', date)
    if (options && options.format) {
      var format = options.format;

      if (format === 'ISO') {
        return date.toISOString();
      }

      if (format === 'string') {
        return date.toString();
      }

      if (format === 'unix') {
        return moment(date).unix()
      }

      if (format === 'internet' || format === 'rfc3339') {
        return timestamp(date)
      }

      moment().format(format);
      return moment(date).toString();
    }
    return date
  }

  /**
   * past
   *
   * @method faker.date.past
   * @param {number} years
   * @param {date} refDate
   * @param {options} format: YYMMDD etc. or any of: string,ISO,internet,rfc3339,unix
   */
  self.past = function (years, refDate, options) {
      var date = (refDate) ? new Date(Date.parse(refDate)) : new Date();
      var range = {
        min: 1000,
        max: (years || 1) * 365 * 24 * 3600 * 1000
      };

      var past = date.getTime();
      past -= faker.random.number(range); // some time from now to N years ago, in milliseconds
      date.setTime(past);
      date = formatDate(date, options)

      return date;
  };

  /**
   * future
   *
   * @method faker.date.future
   * @param {number} years
   * @param {date} refDate
   * @param {options} format: YYMMDD etc. or any of: string,ISO,internet,rfc3339,unix
   */
  self.future = function (years, refDate, options) {
      var date = (refDate) ? new Date(Date.parse(refDate)) : new Date();
      var range = {
        min: 1000,
        max: (years || 1) * 365 * 24 * 3600 * 1000
      };

      var future = date.getTime();
      future += faker.random.number(range); // some time from now to N years later, in milliseconds
      date.setTime(future);
      date = formatDate(date, options)
      return date;
  };

  /**
   * between
   *
   * @method faker.date.between
   * @param {date} from
   * @param {date} to
   * @param {options} format: YYMMDD etc. or any of: string,ISO,internet,rfc3339,unix
   */
  self.between = function (from, to, options) {
      var fromMilli = Date.parse(from);
      var dateOffset = faker.random.number(Date.parse(to) - fromMilli);

      var date = new Date(fromMilli + dateOffset);
      date = formatDate(date, options)
      return date;
  };

  /**
   * recent
   *
   * @method faker.date.recent
   * @param {number} days
   * @param {options} format: YYMMDD etc. or any of: string,ISO,internet,rfc3339,unix
   */
  self.recent = function (days, options) {
      var date = new Date();
      var range = {
        min: 1000,
        max: (days || 1) * 24 * 3600 * 1000
      };

      var future = date.getTime();
      future -= faker.random.number(range); // some time from now to N days ago, in milliseconds
      date.setTime(future);
      date = formatDate(date, options)

      return date;
  };

  /**
   * month
   *
   * @method faker.date.month
   * @param {object} options
   */
  self.month = function (options) {
      options = options || {};

      var type = 'wide';
      if (options.abbr) {
          type = 'abbr';
      }
      if (options.context && typeof faker.definitions.date.month[type + '_context'] !== 'undefined') {
          type += '_context';
      }

      var source = faker.definitions.date.month[type];

      return faker.random.arrayElement(source);
  };

  /**
   * weekday
   *
   * @param {object} options
   * @method faker.date.weekday
   */
  self.weekday = function (options) {
      options = options || {};

      var type = 'wide';
      if (options.abbr) {
          type = 'abbr';
      }
      if (options.context && typeof faker.definitions.date.weekday[type + '_context'] !== 'undefined') {
          type += '_context';
      }

      var source = faker.definitions.date.weekday[type];

      return faker.random.arrayElement(source);
  };

  return self;

};

module['exports'] = _Date;