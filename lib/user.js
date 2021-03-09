/**
 *
 * @namespace faker.user
 */
var User = function (faker) {
    var self = this;
    /**
     * role
     *
     * @method faker.user.role
     */
    self.role = function () {
        return faker.random.arrayElement(faker.definitions.user.role);
    };

    self.role.schema = {
        "description": "Generates a user role.",
        "sampleResults": ["Admin", "Guest", "SuperUser"]
    };
};

module["exports"] = User;
