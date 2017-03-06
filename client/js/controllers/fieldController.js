myAppModule.controller("fieldController", ['$scope', 'repairFactory', 'partFactory', function($scope, repairFactory, partFactory) {
    $scope.repairs = [];
    // $scope.newpartsPerRepair = {};


    repairFactory.getRepairs().then(function(repairs) {
      $scope.repairs = repairs;
    });

    $scope.editRepair= function() {
      repairFactory.editRepair();
    };

    $scope.removeRepair = function($index) {
      repairFactory.removeRepair($index);
    };

    partFactory.getParts(function(parts) {
      $scope.parts = parts;
    });

    $scope.addPartsPerRepair = function($index) {
        repairFactory.addPartsPerRepair($scope.newPartsPerRepair, $index);
        $scope.newPartsPerRepair = {};
    };

    $scope.removePartsPerRepair = function($index) {
      repairFactory.removePartsPerRepair($index);
    };



}]);
