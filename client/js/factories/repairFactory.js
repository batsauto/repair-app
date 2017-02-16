myAppModule.factory("repairFactory", function() {
    var repairs = [{
            firstName: "John",
            lastName: "Doe",
            fullName: "John Doe",
            company: "Do it right Painting",
            address: "530 Bouge Road, Yuba City, CA 95991, USA",
            phoneCell: "5302220033",
            email: "sample1@sample.com",
            date: new Date(),
            description: "Broken sprinkler in front yard.",
            comments: "Fixed Broken Sprinkler in Front Yard. There was a root that pinched the Pipe",
            avatarInital: "JD",
            numWorkers: 2,
            numHours: 1,
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
            fullName: "Jane Doe",
            address: "123 Main St, Yuba City, CA 95991, USA",
            phoneCell: "5303330033",
            email: "sample2@sample.com",
            date: new Date(),
            description: "Needs new irrigation clock.",
            comments: "Replaced Clock with new ESP-LXME",
            avatarInital: "JD",
            numWorkers: 2,
            numHours: 3,
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

    var selectedRepair = null;

    factory.getRepairs = function(callback) {
        callback(repairs);
    };

    factory.addRepair = function(newRepair) {
        newRepair.avatarInital = newRepair.firstName.charAt(0).toUpperCase() + newRepair.lastName.charAt(0).toUpperCase();
        newRepair.fullName = newRepair.firstName + " " + newRepair.lastName;
        repairs.push(newRepair);
    };

    factory.removeRepair = function($index) {
        repairs.splice($index, 1);
    };

    factory.editRepair = function(repair) {
        selectedRepair = repair;
    };

    factory.addPartsPerRepair = function(newPartsPerRepair, index) {
        repairs[index].partsPerRepair.push(newPartsPerRepair);
    };

    factory.removePartsPerRepair = function($index) {
        repairs[$index].partsPerRepairs.splice($index, 1);
    };

    return factory;
});
