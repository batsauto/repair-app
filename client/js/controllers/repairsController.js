myAppModule.controller("repairsController", function($scope, $mdSidenav, $mdDialog, $mdMedia, repairFactory, NgMap) {
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
        repairFactory.selectedRepair = $scope.selected;
        console.log(repairs);
    });

    $scope.addRepair = function($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show( {
            // scope: $scope,
            // preserveScope: true,
            templateUrl: './static/partials/newRepairDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: "addRepairDialogController",
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        }).then(function () {
            repairFactory.addRepair($scope.newRepair);
            $scope.selectRepair($scope.newRepair);
            $scope.newRepair = {};
        }, function() {
            console.log("You Cancelled the Dialog");
        });
    };

    $scope.editRepair = function($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show( {
            scope: $scope,
            preserveScope: true,
            templateUrl: './static/partials/editRepairDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: "editRepairDialogController",
            clickOutsideToClose: true,
            bindToController: true,
            fullscreen: useFullScreen
        }).then(function () {
            repairFactory.editRepair();
            $scope.selectRepair($scope.selected);
            $mdDialog.cancel();
        }, function() {
            console.log("You Cancelled the Dialog");
        });
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

    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
});
