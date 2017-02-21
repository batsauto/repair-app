myAppModule.controller("editRepairDialogController", [ '$scope', '$mdDialog', 'repairFactory', function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.editRepair = function(repair) {
        repairFactory.updateRepair(repair);
        $scope.selectRepair($scope.selected);
        $mdDialog.hide()
    };
}]);
