(function(){
    'use strict';
    angular.module('data')
    .service('MenuDataService',MenuDataService)
    .constant('ApiBasePath','https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http','ApiBasePath'];
    function MenuDataService($http,ApiBasePath){
        var serv = this;

        serv.getAllCategory = function(){
            return $http({
                method: "GET",
                url: (ApiBasePath + 'categories.json')
            }).then(function(response){
                console.log(response);
                return response.data;
            });
        }

        serv.getItemsForCategory = function(categoryShortName){
            return $http({
                method: 'GET',
                url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
            }).then(function(response){
                console.log('Response getItemsForCategory:'+response);
                return response.data;
            });
        }
    }

})();