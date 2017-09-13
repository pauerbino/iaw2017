'use strict';
angular.module('iaw2017App')
    .service('ListService', function () {
        var lists = [
            {
                name: 'List1',
                id: 1,
                contacts: [
                    {
                        id: 1,
                        name: "John",
                        lastName: "Mayer",
                        email: "johnmayer@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 2,
                        name: "Boris",
                        lastName: "Grey",
                        email: "borisgrey@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 3,
                        name: "Emma",
                        lastName: "Black",
                        email: "emmablack@gmail.com",
                        phone: "4525792"
                    }
                ]
            },{
                name: 'List2',
                list: 2,
                contacts: [
                    {
                        id: 1,
                        name: "John",
                        lastName: "Mayer",
                        email: "johnmayer@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 2,
                        name: "Boris",
                        lastName: "Grey",
                        email: "borisgrey@gmail.com",
                        phone: "4525792"
                    },
                    {
                        id: 3,
                        name: "Emma",
                        lastName: "Black",
                        email: "emmablack@gmail.com",
                        phone: "4525792"
                    }
                ]
            }];

        this.getLists = function() {
            return lists;
        };

        this.getList = function(id) {
            return lists[0];
        };

        this.deleteList = function(id) {

        };

        this.deleteContactFromList = function(listId, contactId) {

        };

        this.saveList = function(list) {

        };

    });
