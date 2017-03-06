myAppModule.controller("repairsController", ['$scope', '$mdSidenav', '$mdDialog', '$mdMedia', 'repairFactory', 'partFactory', 'NgMap', function($scope, $mdSidenav, $mdDialog, $mdMedia, repairFactory, partFactory, NgMap) {

    // $scope.repairs = [];
    $scope.selected = null;
    $scope.searchCustomer = "";
    $scope.tabIndex = 0;

    fetchRepairs();
    fetchParts();

    // $scope.newpartsPerRepair = {};


    function fetchRepairs() {
        repairFactory.getRepairs().then(function (repairs) {
            $scope.repairs = repairs;
            $scope.selected = repairs[0];
            repairFactory.selectedRepair = $scope.selected;
            console.log(repairs);
        });

    }

    function fetchParts() {
        partFactory.getParts().then(function (parts) {
            $scope.parts = parts;
            console.log(parts);
        });
    }

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

    $scope.deleteRepairDialog = function($event) {
        var confirm = $mdDialog.confirm()
            .title("Are you sure you want to delete " + $scope.selected.fullName)
            .textContent("This action can not be undone!")
            .ariaLabel("Confirm Delete Repair")
            .targetEvent($event)
            .ok("Delete Repair")
            .cancel("Cancel");

        $mdDialog.show(confirm).then(function () {
            $scope.removeRepair();
        }, function () {
            console.log("You cancelled the Delete Dialog");
        });
    };

    $scope.sendEmail = function(email){
        var link = "mailto:"+ email
                    + "?subject=%20Hello%20" + $scope.selected.fullName + "%20from%20Barrow%27s%20Landscaping";
        window.location.href = link;
    };


    $scope.removePartsPerRepair = function($index) {
      repairFactory.removePartsPerRepair($index);
    };

    NgMap.getMap().then(function(map) {
    });
}]);
