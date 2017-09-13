'use strict';
angular.module('iaw2017App')
  .controller('NewListCtrl', ['$location', '$routeParams', '$scope', 'ContactService', 'ListService',
    function ( $location, $routeParams, $scope, ContactService, ListService) {

    $scope.list = {
        name: 'dass',
        contacts: []
    };

    $scope.newContact = '';

    $scope.saveList = function() {
        ListService.saveList($scope.list);
        $location.path('/contacts');
    };

    $scope.goBack = function() {
        $location.path('/contacts');
    };

    $scope.addContact = function() {
        $scope.alert = false;
        var contact = ContactService.findContactByUserName($scope.newContact);
        if (contact) {
            $scope.list.contacts.push(contact);
        } else {
            $scope.alert = true;
        }
        $scope.newContact = '';
    };

    $scope.removeContact = function(id) {

    };

  }]);
