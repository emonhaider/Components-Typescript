angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    }).state('users', {
      url: '/users',
      component: 'users'
    }).state('home', {
      url: '/home',
      component: 'home'
    });
}
