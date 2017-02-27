myAppModule.controller("editRepairDialogController", [ '$scope', '$mdDialog', 'repairFactory', function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.editRepair = function() {
        console.log($scope.selected);
        repairFactory.updateRepair($scope.selected);
        $scope.selectRepair($scope.selected);
        $mdDialog.hide();
        console.log("We are at the end of the edit function");
    };
}]);
