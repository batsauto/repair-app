myAppModule.controller("addRepairDialogController", function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.addRepair = function() {
        repairFactory.addRepair($scope.newRepair);
        // $scope.selectRepair($scope.newRepair);
        $scope.newRepair = {};
        $mdDialog.hide()
    };
});