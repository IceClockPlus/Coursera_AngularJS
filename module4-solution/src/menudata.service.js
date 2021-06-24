(function(){
    'use strict';
    angular.module('data')
    .service('MenuDataService',MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        var serv = this;

        serv.getAllCategory = function(){

        }

        serv.getItemsForCategory = function(categoryShortName){
            
        }
    }

})();