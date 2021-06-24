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
                var categories = response.data;
                return categories;
            });
        }

        serv.getItemsForCategory = function(categoryShortName){
            
        }
    }

})();