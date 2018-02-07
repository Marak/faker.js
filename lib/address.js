/**
 *
 * @namespace faker.address
 */
function Address (faker) {
  var f = faker.fake,
      Helpers = faker.helpers;

  /**
   * Generates random zipcode from format. If format is not specified, the
   * locale's zip format is used.
   *
   * @method faker.address.zipCode
   * @param {String} format
   */
  this.zipCode = function(format) {
    // if zip format is not specified, use the zip format defined for the locale
    if (typeof format === 'undefined') {
      var localeFormat = faker.definitions.address.postcode;
      if (typeof localeFormat === 'string') {
        format = localeFormat;
      } else {
        format = faker.random.arrayElement(localeFormat);
      }
    }
    return Helpers.replaceSymbols(format);
  }

  /**
   * Generates a random localized city name. The format string can contain any
   * method provided by faker wrapped in `{{}}`, e.g. `{{name.firstName}}` in
   * order to build the city name.
   *
   * If no format string is provided one of the following is randomly used:
   *
   * * `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
   * * `{{address.cityPrefix}} {{name.firstName}}`
   * * `{{name.firstName}}{{address.citySuffix}}`
   * * `{{name.lastName}}{{address.citySuffix}}`
   *
   * @method faker.address.city
   * @param {String} format
   */
  this.city = function (format) {
    var formats = [
      '{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}',
      '{{address.cityPrefix}} {{name.firstName}}',
      '{{name.firstName}}{{address.citySuffix}}',
      '{{name.lastName}}{{address.citySuffix}}'
    ];

    if (typeof format !== "number") {
      format = faker.random.number(formats.length - 1);
    }

    return f(formats[format]);

  }

  /**
   * Return a random localized city prefix
   * @method faker.address.cityPrefix
   */
  this.cityPrefix = function () {
    return faker.random.arrayElement(faker.definitions.address.city_prefix);
  }

  /**
   * Return a random localized city suffix
   *
   * @method faker.address.citySuffix
   */
  this.citySuffix = function () {
    return faker.random.arrayElement(faker.definitions.address.city_suffix);
  }

  /**
   * Returns a random localized street name
   *
   * @method faker.address.streetName
   */
  this.streetName = function () {
      var result;
      var suffix = faker.address.streetSuffix();
      if (suffix !== "") {
          suffix = " " + suffix
      }

      switch (faker.random.number(1)) {
      case 0:
          result = faker.name.lastName() + suffix;
          break;
      case 1:
          result = faker.name.firstName() + suffix;
          break;
      }
      return result;
  }

  //
  // TODO: change all these methods that accept a boolean to instead accept an options hash.
  //
  /**
   * Returns a random localized street address
   *
   * @method faker.address.streetAddress
   * @param {Boolean} useFullAddress
   */
  this.streetAddress = function (useFullAddress) {
      if (useFullAddress === undefined) { useFullAddress = false; }
      var address = "";
      switch (faker.random.number(2)) {
      case 0:
          address = Helpers.replaceSymbolWithNumber("#####") + " " + faker.address.streetName();
          break;
      case 1:
          address = Helpers.replaceSymbolWithNumber("####") +  " " + faker.address.streetName();
          break;
      case 2:
          address = Helpers.replaceSymbolWithNumber("###") + " " + faker.address.streetName();
          break;
      }
      return useFullAddress ? (address + " " + faker.address.secondaryAddress()) : address;
  }

  /**
   * streetSuffix
   *
   * @method faker.address.streetSuffix
   */
  this.streetSuffix = function () {
      return faker.random.arrayElement(faker.definitions.address.street_suffix);
  }

  /**
   * streetPrefix
   *
   * @method faker.address.streetPrefix
   */
  this.streetPrefix = function () {
      return faker.random.arrayElement(faker.definitions.address.street_prefix);
  }

  /**
   * secondaryAddress
   *
   * @method faker.address.secondaryAddress
   */
  this.secondaryAddress = function () {
      return Helpers.replaceSymbolWithNumber(faker.random.arrayElement(
          [
              'Apt. ###',
              'Suite ###'
          ]
      ));
  }

  /**
   * county
   *
   * @method faker.address.county
   */
  this.county = function () {
    return faker.random.arrayElement(faker.definitions.address.county);
  }

  /**
   * country
   *
   * @method faker.address.country
   */
  this.country = function () {
    return faker.random.arrayElement(faker.definitions.address.country);
  }

  /**
   * countryCode
   *
   * @method faker.address.countryCode
   */
  this.countryCode = function () {
    return faker.random.arrayElement(faker.definitions.address.country_code);
  }

  /**
   * state
   *
   * @method faker.address.state
   * @param {Boolean} useAbbr
   */
  this.state = function (useAbbr) {
      return faker.random.arrayElement(faker.definitions.address.state);
  }

  /**
   * stateAbbr
   *
   * @method faker.address.stateAbbr
   */
  this.stateAbbr = function () {
      return faker.random.arrayElement(faker.definitions.address.state_abbr);
  }

  /**
   * latitude
   *
   * @method faker.address.latitude
   * @param {Double} max default is 90
   * @param {Double} min default is -90
   */
  this.latitude = function (max, min) {
      max = max || 90
      min = min || -90
      return faker.random.number({max: max, min:min, precision:0.0001}).toFixed(4);
  }

  /**
   * longitude
   *
   * @method faker.address.longitude
   * @param {Double} max default is 180
   * @param {Double} min default is -180
   */
  this.longitude = function (max, min) {
      max = max || 180
      min = min || -180
      return faker.random.number({max: max, min:min, precision:0.0001}).toFixed(4);
  }

  /**
   *  direction
   *
   * @method faker.address.direction
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */
  this.direction = function (useAbbr) {
    if (typeof useAbbr === 'undefined' || useAbbr === false) {
      return faker.random.arrayElement(faker.definitions.address.direction);
    }
    return faker.random.arrayElement(faker.definitions.address.direction_abbr);
  }

  this.direction.schema = {
    "description": "Generates a direction. Use optional useAbbr bool to return abbrevation",
    "sampleResults": ["Northwest", "South", "SW", "E"]
  };

  /**
   * cardinal direction
   *
   * @method faker.address.cardinalDirection
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */
  this.cardinalDirection = function (useAbbr) {
    if (typeof useAbbr === 'undefined' || useAbbr === false) {
      return (
        faker.random.arrayElement(faker.definitions.address.direction.slice(0, 4))
      );
    }
    return (
      faker.random.arrayElement(faker.definitions.address.direction_abbr.slice(0, 4))
    );
  }

  this.cardinalDirection.schema = {
    "description": "Generates a cardinal direction. Use optional useAbbr boolean to return abbrevation",
    "sampleResults": ["North", "South", "E", "W"]
  };

  /**
   * ordinal direction
   *
   * @method faker.address.ordinalDirection
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */
  this.ordinalDirection = function (useAbbr) {
    if (typeof useAbbr === 'undefined' || useAbbr === false) {
      return (
        faker.random.arrayElement(faker.definitions.address.direction.slice(4, 8))
      );
    }
    return (
      faker.random.arrayElement(faker.definitions.address.direction_abbr.slice(4, 8))
    );
  }

  this.ordinalDirection.schema = {
    "description": "Generates an ordinal direction. Use optional useAbbr boolean to return abbrevation",
    "sampleResults": ["Northwest", "Southeast", "SW", "NE"]
  };

  return this;
}

module.exports = Address;
