myAppModule.controller("addRepairDialogController", [ '$scope', '$mdDialog', 'repairFactory', function($scope, $mdDialog, repairFactory) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.addRepair = function() {
        repairFactory.addRepair($scope.newRepair).then(function(){
            $mdDialog.hide();
        },
        function(){
            //handle the error
        });
    };

    $scope.noSundayPredicate = function(date) {
        var day = date.getDay();
        return day !== 0;
    };
}]);