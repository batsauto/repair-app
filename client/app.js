var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter"]);

myAppModule.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    //.dark();
    .primaryPalette('blue')
    .accentPalette('teal')
    .warnPalette('red')
    .backgroundPalette('grey');
});
