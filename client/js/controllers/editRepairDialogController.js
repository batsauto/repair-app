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
        repairFactory.addPartsPerRepair($scope.selected, $scope.selected.newPartsPerRepair);
        $scope.selected.newPartsPerRepair = {};
        $scope.refreshRepairs();
    };

    $scope.removePartsPerRepair = function (partsPerRepair) {
        console.log($scope.selected, partsPerRepair);
        repairFactory.removePartsFromRepair($scope.selected, partsPerRepair);
        $scope.refreshRepairs();
    };

    $scope.noSundayPredicate = function(date) {
        var day = date.getDay();
        return day !== 0;
    };
}]);
