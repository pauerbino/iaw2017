'use strict';
angular.module('iaw2017App')
  .controller('NewContactCtrl', ['$location', '$routeParams', '$scope', 'ContactService', 'ListService',
    function ( $location, $routeParams, $scope, ContactService, ListService) {

    $scope.lists = [];
    $scope.searchSelectAllSettings = { enableSearch: true, showSelectAll: true, keyboardControls: true };
    $scope.searchSelectAllModel = [];

    function initialize() {
        ListService.getLists().then(function (lists){
            $scope.lists = lists;
        });
    }

    initialize();
$scope.example1model = []; $scope.example1data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"} ];
  }]);
