myAppModule.factory("repairFactory", function($http) {

    const factory = {};

    var selectedRepair = null;

    factory.getRepairs = getRepairs;
    factory.addRepair = addRepair;
    factory.deleteRepair = deleteRepair;
    factory.updateRepair = updateRepair;

    return factory;

    function getRepairs(){
        return $http.get('/repairs').then(handleSuccess, handleError("Error getting all repairs"));
    }
    function addRepair(newRepair){
        newRepair.avatarInitial = newRepair.firstName.charAt(0).toUpperCase() + newRepair.lastName.charAt(0).toUpperCase();
        newRepair.fullName = newRepair.firstName + " " + newRepair.lastName;
        return $http.post('/repairs', newRepair).then(handleSuccess, handleError("Error adding new repair"));
    }
    function deleteRepair(id){
        return $http.delete('/repairs/'+ id).then(handleSuccess, handleError("Error deleting repair"));
    }
    function updateRepair(selected){
        return $http.put('/repairs/'+ selected._id).then(handleSuccess, handleError("Error updating repair"));
    }
    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
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
    // factory.addPartsPerRepair = function(newPartsPerRepair, index) {
    //     repairs[index].partsPerRepair.push(newPartsPerRepair);
    // };
    //
    // factory.removePartsPerRepair = function($index) {
    //     repairs[$index].partsPerRepairs.splice($index, 1);
    // };
});
