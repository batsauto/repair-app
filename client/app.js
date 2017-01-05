var myAppModule = angular.module("myApp", ["ngRoute", "vsGoogleAutocomplete", "ngMaterial", "angular.filter", "md.data.table", "ngAnimate"]);

// This config is so the datepicker directive can work with this version of anuglar
myAppModule.config(function($compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
  });


// myAppModule.config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('default')
//     .primaryPalette('blue')
//     .accentPalette('teal')
//     .warnPalette('red')
//     .backgroundPalette('grey');
// });
