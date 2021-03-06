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
      .when('/myContacts', {
        templateUrl: 'views/myContacts.html',
        controller: 'MyContactsCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/newCampaign', {
        templateUrl: 'views/newCampaign.html',
        controller: 'NewCampaignCtrl',
        controllerAs: 'vm'
      })
      .when('/myCampaigns', {
        templateUrl: 'views/myCampaigns.html',
        controller: 'MyCampaignsCtrl',
        controllerAs: 'vm'
      })
      .when('/registerMe', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
