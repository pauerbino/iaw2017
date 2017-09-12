'use strict';
angular.module('iaw2017App')
    .service('ListService', function () {
        var lists = [{name: 'List1', id: 1},{name: 'List2', list: 2}];

        this.getLists = function() {
            return lists;
        };
    });
