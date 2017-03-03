myAppModule.controller("editRepairDialogController", [ '$scope', '$mdDialog', 'repairFactory', function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.editRepair = function() {
        repairFactory.updateRepair($scope.selected);
        $scope.selectRepair($scope.selected);
        $mdDialog.hide();
    };

    $scope.addPartsToRepair = function() {
        console.log("selected" + $scope.selected);
        console.log("newParts" + $scope.selected.newPartsPerRepair);
        repairFactory.addPartsPerRepair($scope.selected, $scope.selected.newPartsPerRepair);
        $scope.selected.newPartsPerRepair = {};
    };
}]);
