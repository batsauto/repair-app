myAppModule.controller("repairsController", function($scope, repairFactory) {
    $scope.repairs = [];

    repairFactory.getRepairs(function(repairs) {
        $scope.repairs = repairs;
    });

    $scope.addRepair = function() {
        repairFactory.addRepair($scope.newRepair);
        $scope.newRepair = {};
    };

    $scope.editRepair = function() {
        repairFactory.editRepair();
    };

    $scope.removeRepair = function($index) {
        repairFactory.removeRepair($index);
    };
});
