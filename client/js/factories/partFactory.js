myAppModule.factory("partFactory", function() {
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

    var partsPerRepairs = [
      {
        quantity: "1",
        part: "Gel Cap"
      },
      {
        quantity: "3",
        part: "Shrub Adapter"
      }
    ];

    var factory = {};

    factory.getParts = function(callback) {
        callback(parts);
    };

    factory.getPartsPerRepair = function(callback) {
        callback(partsPerRepairs);
    };

    factory.addPartsPerRepair = function(newPartsPerRepair) {
        partsPerRepairs.push(newPartsPerRepair);
    };

    factory.removePartsPerRepair = function($index) {
        partsPerRepairs.splice($index, 1);
    };


    return factory;


});
