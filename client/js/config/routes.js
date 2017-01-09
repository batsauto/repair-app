myAppModule.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/repairs", {
            templateUrl: "./static/partials/repairsPartial.html",
            controller: "repairsController"
        })
        .when("/field", {
            templateUrl: "./static/partials/fieldPartial.html",
            controller: "fieldController"
        });
        $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
}]);
