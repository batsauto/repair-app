var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter"]);

// This config is so the datepicker directive can work in the app
myAppModule.config(function($compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
  });

// myAppModule.config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('default')
//     //.dark();
//     .primaryPalette('blue')
//     .accentPalette('teal')
//     .warnPalette('red')
//     .backgroundPalette('grey');
// });
