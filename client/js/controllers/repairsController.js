myAppModule.controller("repairsController", function($scope, $mdSidenav, $mdMedia, repairFactory) {
    $scope.repairs = [];
    $scope.newpartsPerRepair = {};
    $scope.selected = null;
    $scope.searchCustomer = "";
    $scope.tabIndex = 0;

    $scope.toggleSideNav = function() {
      $mdSidenav("left").toggle();
    };

    $scope.selectRepair = function (repair) {
        $scope.selected = repair;
        repairFactory.selectedRepair = repair;
        var sidenav = $mdSidenav('left');
        if (sidenav.isOpen()) {
            sidenav.close();
        }
        $scope.tabIndex = 0;
    };

    repairFactory.getRepairs(function(repairs) {
        $scope.repairs = repairs;
        $scope.selected = repairs[0];
        repairFactory.selectedUser = $scope.selected;
        console.log(repairs);
    });

    $scope.addRepair = function() {
        repairFactory.addRepair($scope.newRepair);
        $scope.newRepair = {};
    };

    $scope.editRepair = function() {
        repairFactory.editRepair();
    };

    $scope.removeRepair = function($index) {
        repairFactory.removeRepair($index);
    };

    $scope.addPartsPerRepair = function(index) {
        repairFactory.addPartsPerRepair($scope.newPartsPerRepair, index);
        $scope.newPartsPerRepair = {};
    };

    $scope.removePartsPerRepair = function($index) {
      repairFactory.removePartsPerRepair($index);
    };
});
