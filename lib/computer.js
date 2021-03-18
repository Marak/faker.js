/**
 *
 * @namespace faker.computer
 */
var Computer = function (faker) {
    var self = this;
    var fake = faker.fake;
    
    /**
    * cooler
    *
    * @method faker.computer.cooler
    */
    self.cooler = function () {
        return fake('{{computer.cooler_type}} {{computer.cooler_brand}}');
    };

    self.cooler.schema = {
        "description": "Generates a random cooler",
        "sampleResults": ["Watercooling Corsair", "Aircooling Corsair", "Aircooling AMD"]
    };



    /**
    * cooler_brand
    *
    * @method faker.computer.cooler_brand
    */
    self.cooler_brand = function () {
        return faker.random.arrayElement(faker.definitions.computer.cooler_brand);
    };

    self.cooler_brand.schema = {
        "description": "Generates a random cooler brand",
        "sampleResults": ["AMD", "be quiet!", "NZXT"]
    };



    /**
    * cooler_type
    *
    * @method faker.computer.cooler_type
    */
    self.cooler_type = function () {
        return faker.random.arrayElement(faker.definitions.computer.cooler_type);
    };

    self.cooler_type.schema = {
        "description": "Generates a random cooler type",
        "sampleResults": ["Watercooling", "Aircooling"]
    };

  
    /**
    * cpu
    *
    * @method faker.computer.cpu
    */
    self.cpu = function () {
        return fake('{{computer.cpu_manufacturer}} {{computer.cpu_model}}');
    };

    self.cpu.schema = {
        "description": "Generates a random cpu.",
        "sampleResults": ["Intel i3 6100", "AMD Ryzen 5 3600", "Intel i9 10900k"]
    };



    /**
    * cpu_manufacturer
    *
    * @method faker.computer.cpu_manufacturer
    */
    self.cpu_manufacturer = function () {
        return faker.random.arrayElement(faker.definitions.computer.cpu_manufacturer);
    };

    self.cpu_manufacturer.schema = {
        "description": "Generates a cpu manufacturer name.",
        "sampleResults": ["Intel", "AMD"]
    };



    /**
    * cpu_model
    *
    * @method faker.computer.cpu_model
    */
    self.cpu_model = function () {
        return faker.random.arrayElement(faker.definitions.computer.cpu_model);
    };

    self.cpu_model.schema = {
        "description": "Generates a cpu model.",
        "sampleResults": ["i3 9100F", "Ryzen 7 2700X", "Pentium G4400"]
    };



    /**
    * disk
    *
    * @method faker.computer.disk
    */
    self.disk = function () {
        return fake('{{computer.disk_type}} {{computer.disk_brand}}');
    };

    self.disk.schema = {
        "description": "Generates a random disk",
        "sampleResults": ["SSD Samsung", "HDD Toshiba", "HDD ADATA"]
    };



    /**
    * disk_brand
    *
    * @method faker.computer.disk_brand
    */
    self.disk_brand = function () {
        return faker.random.arrayElement(faker.definitions.computer.disk_brand);
    };

    self.disk_brand.schema = {
        "description": "Generates a random disk brand",
        "sampleResults": ["Samsung", "Toshiba", "ADATA"]
    };



    /**
    * disk_type
    *
    * @method faker.computer.disk_type
    */
    self.disk_type = function () {
        return faker.random.arrayElement(faker.definitions.computer.disk_type);
    };

    self.disk_type.schema = {
        "description": "Generates a random disk type",
        "sampleResults": ["HDD", "SSD"]
    };



    /**
    * gpu
    *
    * @method faker.computer.gpu
    */
    self.gpu = function () {
        return fake('{{computer.gpu_manufacturer}} {{computer.gpu_brand}} {{computer.gpu_model}}');
    };

    self.gpu.schema = {
        "description": "Generates a random gpu.",
        "sampleResults": ["AMD Asus Radeon RX 590", "Nvidia PNY GeForce GTX 770", "Nvidia Zotac GeForce RTX 3090"]
    };



    /**
    * gpu_brand
    *
    * @method faker.computer.gpu_brand
    */
    self.gpu_brand = function () {
        return faker.random.arrayElement(faker.definitions.computer.gpu_brand);
    };

    self.gpu_brand.schema = {
        "description": "Generates a gpu brand name.",
        "sampleResults": ["Asus", "PNY", "Gainward"]
    };



    /**
    * gpu_manufacturer
    *
    * @method faker.computer.gpu_manufacturer
    */
    self.gpu_manufacturer = function () {
        return faker.random.arrayElement(faker.definitions.computer.gpu_manufacturer);
    };

    self.gpu_manufacturer.schema = {
        "description": "Generates a gpu manufacturer name.",
        "sampleResults": ["Nvidia", "AMD"]
    };



    /**
    * gpu_model
    *
    * @method faker.computer.gpu_model
    */
    self.gpu_model = function () {
        return faker.random.arrayElement(faker.definitions.computer.gpu_model);
    };

    self.gpu_model.schema = {
        "description": "Generates a gpu model.",
        "sampleResults": ["Radeon R9 270", "GeForce GT 610", "Nvidia TITAN RTX"]
    };
  


    /**
    * memory_size
    *
    * @method faker.computer.memory_size
    */
    self.memory_size = function () {
        return faker.random.arrayElement(faker.definitions.computer.memory_size);
    };
  
    self.memory_size.schema = {
        "description": "Generates a memory size in bytes",
        "sampleResults": ["2147483648", "34359738368", "274877906944"]
    };



    /**
    * memory_brand
    *
    * @method faker.computer.memory_brand
    */
    self.memory_brand = function () {
        return faker.random.arrayElement(faker.definitions.computer.memory_brand);
    };
  
    self.memory_brand.schema = {
        "description": "Generates a random memory brand",
        "sampleResults": ["Corsair", "G.Skill", "HyperX"]
    };



    /**
    * motherboard_brand
    *
    * @method faker.computer.motherboard_brand
    */
    self.motherboard_brand = function () {
        return faker.random.arrayElement(faker.definitions.computer.motherboard_brand);
    };
  
    self.motherboard_brand.schema = {
        "description": "Generates a random motherboard brand",
        "sampleResults": ["Asus", "MSI", "NZXT"]
    };



    /**
     * operating_system
     *
     * @method faker.computer.operating_system
     */
    self.operating_system = function () {
        return faker.random.arrayElement(faker.definitions.computer.operating_system);
    };
    
    self.operating_system.schema = {
        "description": "Generates an operating system name.",
        "sampleResults": ["Windows XP", "Ubuntu", "Mac OS 11"]
    };



    /**
    * psu_brand
    *
    * @method faker.computer.psu_brand
    */
    self.psu_brand = function () {
        return faker.random.arrayElement(faker.definitions.computer.psu_brand);
    };
  
    self.psu_brand.schema = {
        "description": "Generates a random power supply brand",
        "sampleResults": ["be quiet!", "Seasonic", "Zalman"]
    };

  };
  
  module["exports"] = Computer;
  