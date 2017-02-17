myAppModule.controller("editRepairDialogController", function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.editRepair = function() {
        repairFactory.editRepair();
        $scope.selectRepair($scope.selected);
        $mdDialog.hide()
    };
});
