var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter", "ngAnimate", "ngMdIcons", "ngAvatar", "ngMap"]);

myAppModule.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('red')
    .warnPalette('deep-orange')
});
