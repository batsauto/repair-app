var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter", "ngAnimate", "ngMdIcons", "ngAvatar"]);

// This config is so the datepicker directive can work with this version of anuglar
myAppModule.config(function($compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
  });


myAppModule.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red')
    .warnPalette('deep-orange')
});
