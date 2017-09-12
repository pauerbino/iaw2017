'use strict';
angular.module('iaw2017App')
  .controller('ContactListCtrl', ['$location', '$routeParams', '$scope', 'ListService',
    function ( $location, $routeParams, $scope, ListService) {

    $scope.list = {};

    function initialize() {
        $scope.list = ListService.getList($routeParams.id);
    }

    initialize();

  }]);
