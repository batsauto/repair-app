myAppModule.factory("repairFactory", function($http) {

    const factory = {};

    var selectedRepair = null;

    factory.addPartsPerRepair = addPartsPerRepair;
    factory.addRepair = addRepair;
    factory.deleteRepair = deleteRepair;
    factory.getRepairs = getRepairs;
    factory.removePartsFromRepair = removePartsFromRepair;
    factory.updateRepair = updateRepair;

    return factory;

    function addPartsPerRepair (selected, newPartsPerRepair) {
        return $http.put('/repairs/addPartsPerRepair/' + selected._id, newPartsPerRepair).then(handleSuccess, handleError("Error updating parts in repair"))
    }

    function addRepair(newRepair){
        newRepair.avatarInitial = newRepair.firstName.charAt(0).toUpperCase() + newRepair.lastName.charAt(0).toUpperCase();
        newRepair.fullName = newRepair.firstName + " " + newRepair.lastName;
        return $http.post('/repairs', newRepair).then(handleSuccess, handleError("Error adding new repair"));
    }

    function deleteRepair(selected){
        return $http.delete('/repairs/'+ selected._id).then(handleSuccess, handleError("Error deleting repair"));
    }

    function getRepairs(){
        return $http.get('/repairs').then(
            function(res) {
                angular.forEach(res.data, function (repair) {
                    repair.date = new Date(repair.date);
                    repair.phoneCell = Number(repair.phoneCell);
                });
                return res.data;
            }, handleError("Error getting all repairs"));
    }

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    function removePartsFromRepair (partsPerRepair) {
        return $http.put('/repairs/removePartsPerRepair/' + partsPerRepair._id, partsPerRepair).then(handleSuccess, handleError("Error deleting parts in repair"))
    }

    function updateRepair(selected){
        selected.avatarInitial = selected.firstName.charAt(0).toUpperCase() + selected.lastName.charAt(0).toUpperCase();
        selected.fullName = selected.firstName + " " + selected.lastName;
        return $http.put('/repairs/' + selected._id, selected).then(handleSuccess, handleError("Error updating repair"));
    }

});
