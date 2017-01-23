myAppModule.factory("repairFactory", function() {
    var repairs = [{
            firstName: "John",
            lastName: "Doe",
            company: "Do it right Painting",
            address: "561 Mississippi Ave, Yuba City, CA 95991, USA",
            date: new Date(),
            description: "Broken sprinkler in front yard.",
            partsPerRepair: [{
              quantity: "1",
              part: "Gel Cap"
            }, {
               quantity: "3",
               part: "Shrub Adapter"
            }]
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            address: "123 Main St, Yuba City, CA 95991, USA",
            date: new Date(),
            description: "Needs new irrigation clock.",
            partsPerRepair: [{
              quantity: "2",
              part: "Head Light Fluid"
            }, {
               quantity: "5",
               part: "Elbow Grease"
            }]
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

    factory.addPartsPerRepair = function(newPartsPerRepair, index) {
        repairs[index].partsPerRepair.push(newPartsPerRepair);
    };

    factory.removePartsPerRepair = function($index) {
        repairs[$index].partsPerRepairs.splice($index, 1);
    };

    return factory;
});
