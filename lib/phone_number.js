/**
 *
 * @namespace faker.phone
 */
var Phone = function (faker) {
  var self = this;

  /**
   * phoneNumber
   *
   * @method faker.phone.phoneNumber
   * @param {string} format
   * @memberOf faker.phone
   */
  self.phoneNumber = function (format) {
      format = format || faker.phone.phoneFormats();
      return faker.helpers.replaceSymbolWithNumber(format);
  };

  /**
   * localPhoneNumber
   *
   * @method faker.phone.localPhoneNumber
   * @memberOf faker.phone
   */
  self.localPhoneNumber = function () {
    format = faker.phone.localPhoneFormats();
    return faker.helpers.replaceSymbolWithNumber(format);
  };

  /**
   * internationalPhoneNumber
   *
   * @method faker.phone.internationalPhoneNumber
   * @memberOf faker.phone
   */
  self.internationalPhoneNumber = function () {
    format = faker.phone.internationalPhoneFormats();
    return faker.helpers.replaceSymbolWithNumber(format);
  };

  // FIXME: this is strange passing in an array index.
  /**
   * phoneNumberFormat
   *
   * @method faker.phone.phoneFormatsArrayIndex
   * @param phoneFormatsArrayIndex
   * @memberOf faker.phone
   */
  self.phoneNumberFormat = function (phoneFormatsArrayIndex) {
      phoneFormatsArrayIndex = phoneFormatsArrayIndex || 0;
      return faker.helpers.replaceSymbolWithNumber(faker.definitions.phone_number.formats[phoneFormatsArrayIndex]);
  };

  /**
   * phoneFormats
   *
   * @method faker.phone.phoneFormats
   */
  self.phoneFormats = function () {
    return faker.random.arrayElement(faker.definitions.phone_number.formats);
  };

  /**
   * localPhoneFormats
   *
   * @method faker.phone.localPhoneFormats
   */
  self.localPhoneFormats = function () {
    return faker.random.arrayElement(faker.definitions.phone_number.local_international_formats.local);
  };

  /**
   * internationalPhoneFormats
   *
   * @method faker.phone.internationalPhoneFormats
   */
  self.internationalPhoneFormats = function () {
    return faker.random.arrayElement(faker.definitions.phone_number.local_international_formats.international);
  };
  
  return self;

};

module['exports'] = Phone;
