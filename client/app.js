var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial"]);

myAppModule.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    //.dark();
    .primaryPalette('blue')
    .accentPalette('teal')
    .warnPalette('red')
    .backgroundPalette('grey');
});
