myAppModule.controller("repairsController", ['$scope', '$mdSidenav', '$mdDialog', '$mdMedia', 'repairFactory', 'NgMap', function($scope, $mdSidenav, $mdDialog, $mdMedia, repairFactory, NgMap) {

    // $scope.repairs = [];

    fetchRepairs();

    // $scope.newpartsPerRepair = {};
    $scope.selected = null;
    $scope.searchCustomer = "";
    $scope.tabIndex = 0;

    function fetchRepairs() {
        repairFactory.getRepairs().then(function (repairs) {
            $scope.repairs = repairs;
            for (i = 0; i < $scope.repairs.length; i++) {
                $scope.repairs[i].date = new Date($scope.repairs[i].date);
            }
            $scope.selected = repairs[0];
            repairFactory.selectedRepair = $scope.selected;
            console.log(repairs);
        });

    };

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

    $scope.addRepair = function($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show( {
            templateUrl: './static/partials/newRepairDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: "addRepairDialogController",
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        }).then(function () {
            $scope.selectRepair($scope.newRepair);
            $scope.newRepair = {};
            fetchRepairs();
        }, function() {
            console.log("You Cancelled the Dialog");
        });
    };

    $scope.editRepair = function($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show( {
            scope: $scope.$new(),
            preserveScope: true,
            templateUrl: './static/partials/editRepairDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: 'editRepairDialogController',
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        }).then(function () {
            fetchRepairs();
        }, function() {
            fetchRepairs();
            console.log("You Cancelled the Dialog");
        });
    };

    $scope.removeRepair = function() {
        repairFactory.deleteRepair($scope.selected)
        .then(function () {
            fetchRepairs();
            // $scope.selected = repair[0];
        })
    };

    $scope.addPartsPerRepair = function(index) {
        repairFactory.addPartsPerRepair($scope.newPartsPerRepair, index);
        $scope.newPartsPerRepair = {};
    };

    $scope.removePartsPerRepair = function($index) {
      repairFactory.removePartsPerRepair($index);
    };

    NgMap.getMap().then(function(map) {
    });
}]);
