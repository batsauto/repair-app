myAppModule.controller("editRepairDialogController", [ '$scope', '$mdDialog', 'repairFactory', function($scope, $mdDialog, repairFactory) {

    $scope.addPartsToRepair = addPartsToRepair;
    $scope.cancel = cancel;
    $scope.editRepair = editRepair;
    $scope.hide = hide;
    $scope.noSundayPredicate = noSundayPredicate;
    $scope.removePartsPerRepair = removePartsPerRepair;

    function addPartsToRepair() {
        repairFactory.addPartsPerRepair($scope.selected, $scope.selected.newPartsPerRepair);
        $scope.selected.newPartsPerRepair = {};
        $scope.refreshRepairs();
    }

    function cancel() {
        $mdDialog.cancel();
    }

    function editRepair () {
        repairFactory.updateRepair($scope.selected);
        $scope.selectRepair($scope.selected);
        $mdDialog.hide();
    }

    function hide () {
        $mdDialog.hide();
    }

    function noSundayPredicate (date) {
        var day = date.getDay();
        return day !== 0;
    }

    function removePartsPerRepair (partsPerRepair) {
        repairFactory.removePartsFromRepair(partsPerRepair);
        $scope.refreshRepairs();
    }

}]);
