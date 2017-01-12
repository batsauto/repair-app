myAppModule.factory("repairFactory", function() {
    var repairs = [{
            firstName: "Gene",
            lastName: "Barrow",
            company: "Barrows Landscpaing",
            address: "764 Winship Rd, Yuba City, CA 95991, USA",
            date: new Date(),
            description: "Broken sprinkler in front yard."
        },
        {
            firstName: "Christian",
            lastName: "Barrow",
            address: "508 Crestmont Ave, Yuba City, CA 95991, USA",
            date: new Date(),
            description: "Needs new irrigation clock."
        }
    ];

    var factory = {};

    factory.getRepairs = function(callback) {
        callback(repairs);
    };

    factory.addRepair = function(newRepair) {
        //newRepair.date = newRepair.date.toLocaleDateString();
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
