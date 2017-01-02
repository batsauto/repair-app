myAppModule.factory("repairFactory", function() {
    var repairs = [];

    var factory = {};

    factory.getRepairs = function (callback) {
        callback(repairs);
    };

    factory.addRepair = function (newRepair) {
        repairs.push(newRepair);
    };

    factory.removeRepair = function ($index) {
        repairs.splice($index, 1);
    };

    return factory;
});
