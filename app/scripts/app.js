'use strict';

/**
 * @ngdoc overview
 * @name iaw2017App
 * @description
 * # iaw2017App
 *
 * Main module of the application.
 */
angular
  .module('iaw2017App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'vm'
      })
      .when('/newList', {
        templateUrl: 'views/newList.html',
        controller: 'NewListCtrl',
        controllerAs: 'vm'
      })
      .when('/newContact', {
        templateUrl: 'views/newContact.html',
        controller: 'NewContactCtrl',
        controllerAs: 'vm'
      })
      .when('/contactList/:id', {
        templateUrl: 'views/contactList.html',
        controller: 'ContactListCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/contacts'
      });
  });
