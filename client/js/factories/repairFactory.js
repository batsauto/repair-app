myAppModule.factory("repairFactory", function() {
    var repairs = [{
            firstName: "John",
            lastName: "Doe",
            company: "Do it right Painting",
            address: "561 Mississippi Ave, Yuba City, CA 95991, USA",
            date: new Date(),
            description: "Broken sprinkler in front yard."
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            address: "123 Main St, Yuba City, CA 95991, USA",
            date: new Date(),
            description: "Needs new irrigation clock."
        }
    ];


    var factory = {};

    factory.getRepairs = function(callback) {
        callback(repairs);
    };

    factory.addRepair = function(newRepair) {
        repairs.push(newRepair);
    };

    factory.removeRepair = function($index) {
        repairs.splice($index, 1);
    };

    factory.editRepair = function(repair) {
        var selectedRepair = repair;
    };

    return factory;
});
