'use strict';
angular.module('iaw2017App')
    .service('ListService', ["$q", "$timeout", function ($q, $timeout) {
        var lists = [
            {
                name: 'List1',
                id: 1,
                contacts: [
                    {
                        id: 1,
                        name: "John",
                        lastName: "Mayer",
                        username: "john.mayer",
                        email: "johnmayer@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 2,
                        name: "Boris",
                        lastName: "Grey",
                        username: "boris.grey",
                        email: "borisgrey@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 3,
                        name: "Emma",
                        lastName: "Black",
                        username: "emma.black",
                        email: "emmablack@gmail.com",
                        phone: "4525792"
                    }
                ]
            },{
                name: 'List2',
                id: 2,
                contacts: [
                    {
                        id: 1,
                        name: "John",
                        lastName: "Mayer",
                        username: "john.mayer",
                        email: "johnmayer@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 2,
                        name: "Boris",
                        lastName: "Grey",
                        username: "boris.grey",
                        email: "borisgrey@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 3,
                        name: "Emma",
                        lastName: "Black",
                        username: "emma.black",
                        email: "emmablack@gmail.com",
                        phone: "4525792"
                    }
                ]
            }];

        this.getLists = function() {
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(lists);
            }, 500);

            return deferred.promise;
            //return lists;
        };

        this.getList = function(idList) {
            var deferred = $q.defer();
            var result = lists.filter(function (list) {
                return (list.id == idList)
            });
            
            $timeout(function() {
                deferred.resolve(result[0]);
            }, 500);

            return deferred.promise;

          //  return lists.filter(function (list) {
            //    return (list.id == id)
            //});
            //return lists[0];
        };

        this.deleteList = function(id) {

        };

        this.deleteContactFromList = function(listId, contactId) {

        };

        this.saveList = function(list) {
            var deferred = $q.defer();

            $timeout(function() {
                var result = lists.push(list);
                deferred.resolve(result);
            }, 500);

            return deferred.promise;
        };

    }]);
