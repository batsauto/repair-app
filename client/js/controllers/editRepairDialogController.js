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

    $scope.removePartsPerRepair = function (_id) {
        console.log(_id);
        repairFactory.removePartsFromRepair(_id);
        $scope.refreshRepairs();
    };

    $scope.noSundayPredicate = function(date) {
        var day = date.getDay();
        return day !== 0;
    };
}]);
