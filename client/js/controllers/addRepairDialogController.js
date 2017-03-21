myAppModule.controller("addRepairDialogController", [ '$scope', '$mdDialog', 'repairFactory', function($scope, $mdDialog, repairFactory) {

    $scope.addRepair = addRepair;
    $scope.cancel = cancel;
    $scope.hide = hide;
    $scope.noSundayPredicate = noSundayPredicate;

    function addRepair () {
        repairFactory.addRepair($scope.newRepair).then(function(){
                $mdDialog.hide();
            },
            function(){
                //handle the error
            });
    }

    function cancel () {
        $mdDialog.cancel();
    }

    function hide () {
        $mdDialog.hide();
    }

    function noSundayPredicate (date) {
        var day = date.getDay();
        return day !== 0;
    }
}]);