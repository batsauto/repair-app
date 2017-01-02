myAppModule.controller("repairsController", function($scope, repairFactory) {
    $scope.repairs = [];

    repairFactory.getRepairs(function(repairs) {
        $scope.players = players;
    });

    $scope.addRepair = function() {
        repairFactory.addplayer($scope.newRepair);
        $scope.newRepair = {};
    };

    $scope.removeRepair = function($index) {
        repairFactory.removeRepair($index);
    };
});
