var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter", "ngAnimate", "ngMdIcons", "ngAvatar"]);

// This config is so the datepicker directive can work with this version of anuglar-----Issue was resolved with angular material 1.1.3  no need for this block anymore.
// myAppModule.config(function($compileProvider) {
//     $compileProvider.preAssignBindingsEnabled(true);
//   });


myAppModule.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red')
    .warnPalette('deep-orange')
});
