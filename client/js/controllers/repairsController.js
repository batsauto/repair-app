myAppModule.controller("repairsController", function($scope, repairFactory) {
    $scope.repairs = [];
    $scope.newpartsPerRepair = {};
    

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

    $scope.addPartsPerRepair = function(index) {
        repairFactory.addPartsPerRepair($scope.newPartsPerRepair, index);
        $scope.newPartsPerRepair = {};
    };

    $scope.removePartsPerRepair = function($index) {
      repairFactory.removePartsPerRepair($index);
    };
});
