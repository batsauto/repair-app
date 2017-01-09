myAppModule.controller("fieldController", function($scope, repairFactory) {
    $scope.repairs = [];

    repairFactory.getRepairs(function(repairs) {
      $scope.repairs = repairs;
    })

    // $scope.updateRepair = function($scope.newComment) {
    //   repairFactory.repair.comments = $scope.newComment;
    // }

    $scope.removeRepair = function($index) {
      repairFactory.removeRepair($index);
    }

});
