'use strict';
angular.module('iaw2017App')
    .service('ContactService', function () {

        this.findContactByUserName = function(userName) {
            return { name: "Gina", lastName:"Turner"};
        };

    });
