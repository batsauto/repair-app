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

    var parts = [
        "1804 Sprinkler",
        "1806 Sprinkler",
        "MP Rotator Nozzle",
        "Nozzle",
        "Tree Lodge Pole",
        "Tree Ties",
        "1 inch DVF Valve",
        "1 inch valve part kit",
        "2 inch DVF Valve",
        "Gel Cap",
        "Shrub Adapter",
        "3/4 inch Galvenized Pipe (ft)",
        "3/4 inch PVC Pipe Class (ft)",
        "3/4 inch PVC Pipe Sch 40 (ft)",
        "3/4 inch PVC Pipe Class (ft)",
        "1 inch PVC Pipe Class (ft)",
        "1 1/2 inch ball valve"
    ];


    var factory = {};

    factory.getRepairs = function(callback) {
        callback(repairs);
    };

    factory.getParts = function(callback) {
        callback(parts);
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
