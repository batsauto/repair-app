myAppModule.controller("fieldController", function($scope, repairFactory) {
    $scope.repairs = [];

    repairFactory.getRepairs(function(repairs) {
      $scope.repairs = repairs;
    })

    repairFactory.getParts(function(parts) {
      $scope.parts = parts;
    })

    $scope.editRepair= function() {
      repairFactory.editRepair();
    };

    $scope.removeRepair = function($index) {
      repairFactory.removeRepair($index);
    };
});
