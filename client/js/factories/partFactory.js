myAppModule.factory("partFactory", function($http) {
    const factory = {};

    factory.getParts = getParts;

    return factory;

    function getParts(){
        return $http.get('/parts').then(handleSuccess, handleError("Error getting all parts"));
    }

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }

});
