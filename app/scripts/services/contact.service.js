'use strict';
angular.module('iaw2017App')
    .service('ContactService', ["$q", "$timeout", function ($q, $timeout) {

    	var contacts = [
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
            },
            {
                    id: 4,
                    name: "Juan",
                    lastName: "Perez",
                    email: "juanperez@hotmail.com",
                    phone: "45745792"
            },
            {
                    id: 5,
                    name: "Kate",
                    lastName: "Harrington",
                    email: "kateharringtom@live.com.ar",
                    phone: "11882772"
            }];

        //this.findContactByUserName = function(userName) {
         //   return { name: "Gina", lastName:"Turner"};
        //};

        this.getContacts = function() {
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(contacts);
            }, 500);

            //return contacts;
            return deferred.promise;
        };

    }]);
