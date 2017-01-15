myAppModule.controller("fieldController", function($scope, repairFactory, partFactory) {
    $scope.repairs = [];

    repairFactory.getRepairs(function(repairs) {
      $scope.repairs = repairs;
    })

    $scope.editRepair= function() {
      repairFactory.editRepair();
    };

    $scope.removeRepair = function($index) {
      repairFactory.removeRepair($index);
    };

    partFactory.getParts(function(parts) {
      $scope.parts = parts;
    });

    partFactory.getPartsPerRepair(function(partsPerRepairs) {
      $scope.partsPerRepairs = partsPerRepairs;
    });

    $scope.addPartsPerRepair = function() {
        partFactory.addPartsPerRepair($scope.newPartsPerRepair);
        $scope.newPartsPerRepair = {};
    };

    $scope.removePartsPerRepair = function($index) {
      partFactory.removePartsPerRepair($index);
    };



})
