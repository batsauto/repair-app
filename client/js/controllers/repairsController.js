myAppModule.controller("repairsController", ['$scope', '$mdSidenav', '$mdDialog', '$mdMedia', 'repairFactory', 'partFactory', 'NgMap', function ($scope, $mdSidenav, $mdDialog, $mdMedia, repairFactory, partFactory, NgMap) {

    $scope.addRepair = addRepair;
    $scope.deleteRepairDialog = deleteRepairDialog;
    $scope.editRepair = editRepair;
    $scope.refreshRepairs = refreshRepairs;
    $scope.removeRepair = removeRepair;
    $scope.selected = null;
    $scope.selectRepair = selectRepair;
    $scope.searchCustomer = "";
    $scope.sendEmail = sendEmail;
    $scope.tabIndex = 0;
    $scope.toggleSideNav = toggleSideNav;

    fetchRepairs();
    fetchParts();
    NgMap.getMap().then(function (map) {
    });

    function addRepair($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show({
            templateUrl: './static/partials/addRepairDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: "addRepairDialogController",
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        }).then(function () {
            $scope.newRepair = {};
            fetchRepairs();
        }, function () {
            console.log("You Cancelled the Dialog");
        });
    }

    function deleteRepairDialog($event) {
        var confirm = $mdDialog.confirm()
            .title("Are you sure you want to delete " + $scope.selected.fullName)
            .textContent("This action can not be undone!")
            .ariaLabel("Confirm Delete Repair")
            .targetEvent($event)
            .ok("Yes")
            .cancel("No");

        $mdDialog.show(confirm).then(function () {
            removeRepair();
        }, function () {
            console.log("You cancelled the Delete Dialog");
        });
    }

    function editRepair($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show({
            scope: $scope.$new(),
            preserveScope: true,
            templateUrl: './static/partials/editRepairDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: 'editRepairDialogController',
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        }).then(function () {
            $scope.refreshRepairs();
        }, function () {
            $scope.refreshRepairs();
            console.log("You Cancelled the Dialog");
        });
    }

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

    function selectRepair(repair) {
        $scope.selected = repair;
        repairFactory.selectedRepair = repair;
        var sidenav = $mdSidenav('left');
        if (sidenav.isOpen()) {
            sidenav.close();
        }
        $scope.tabIndex = 0;
    }

    function refreshRepairs() {
        var SelectedId = $scope.selected._id;
        repairFactory.getRepairs().then(function (repairs) {
            $scope.repairs = repairs;
            for (var i = 0; i < repairs.length; i++) {
                if (repairs[i]._id === SelectedId) {
                    $scope.selected = repairs[i];
                }
            }
            repairFactory.selectedRepair = $scope.selected;
        });
    }

    function removeRepair() {
        repairFactory.deleteRepair($scope.selected)
            .then(function () {
                fetchRepairs();
            })
    }

    function sendEmail(email) {
        var link = "mailto:" + email
            + "?subject=%20Hello%20" + $scope.selected.fullName + "%20from%20Barrow%27s%20Landscaping";
        window.location.href = link;
    }

    function toggleSideNav() {
        $mdSidenav("left").toggle();
    }
}]);