myAppModule.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/repairs", {
            templateUrl: "static/partials/repairs.html",
            controller: "repairsController"
        })
        .when("/field", {
            templateUrl: "static/partials/field.html",
            controller: "fieldController"
        })
}]);
