myAppModule.controller("addUserDialogController", function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.addRepair = function() {
        repairFactory.addRepair($scope.newRepair);
        $scope.newRepair = {};
        $mdDialog.hide()
    };
});