myAppModule.factory("repairFactory", function($http) {

    const factory = {};

    var selectedRepair = null;

    factory.getRepairs = getRepairs;
    factory.addRepair = addRepair;
    factory.deleteRepair = deleteRepair;
    factory.updateRepair = updateRepair;
    factory.addPartsPerRepair = addPartsPerRepair;
    factory.removePartsFromRepair = removePartsFromRepair;

    return factory;

    function getRepairs(){
        return $http.get('/repairs').then(
            function(res) {
                angular.forEach(res.data, function (repair) {
                    repair.date = new Date(repair.date);
                });
                return res.data;
            }, handleError("Error getting all repairs"));
    }
    function addRepair(newRepair){
        newRepair.avatarInitial = newRepair.firstName.charAt(0).toUpperCase() + newRepair.lastName.charAt(0).toUpperCase();
        newRepair.fullName = newRepair.firstName + " " + newRepair.lastName;
        return $http.post('/repairs', newRepair).then(handleSuccess, handleError("Error adding new repair"));
    }
    function deleteRepair(selected){
        return $http.delete('/repairs/'+ selected._id).then(handleSuccess, handleError("Error deleting repair"));
    }
    function updateRepair(selected){
        selected.avatarInitial = selected.firstName.charAt(0).toUpperCase() + selected.lastName.charAt(0).toUpperCase();
        selected.fullName = selected.firstName + " " + selected.lastName;
        return $http.put('/repairs/' + selected._id, selected).then(handleSuccess, handleError("Error updating repair"));
    }
    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

    function addPartsPerRepair (selected, newPartsPerRepair) {
        return $http.put('/repairs/partsPerRepair/' + selected._id, newPartsPerRepair).then(handleSuccess, handleError("Error updating parts in repair"))
    }

    function removePartsFromRepair (_id) {
        return $http.delete('/repairs/partsPerRepair/' + _id, _id).then(handleSuccess, handleError("Error deleting parts in repair"))
    }

    // factory.getRepairs = function(callback) {
    //     callback(repairs);
    // };
    //
    // factory.addRepair = function(newRepair) {
    //     newRepair.avatarInital = newRepair.firstName.charAt(0).toUpperCase() + newRepair.lastName.charAt(0).toUpperCase();
    //     newRepair.fullName = newRepair.firstName + " " + newRepair.lastName;
    //     repairs.push(newRepair);
    // };
    //
    // factory.removeRepair = function($index) {
    //     repairs.splice($index, 1);
    // };
    //
    // factory.editRepair = function(repair) {
    //     selectedRepair = repair;
    // };
    //

});
