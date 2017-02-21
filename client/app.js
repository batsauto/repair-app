var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter", "ngAnimate", "ngMdIcons", "ngAvatar", "ngMap"]);

// myAppModule.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);


myAppModule.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('red')
        .warnPalette('deep-orange')
});

myAppModule.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/repairs", {
            templateUrl: "./static/partials/repairsPartial.html",
            controller: "repairsController"
        })
        .when("/field", {
            templateUrl: "./static/partials/fieldPartial.html",
            controller: "fieldController"
        })
    ;
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);