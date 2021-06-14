(function(){
    'use strict';
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',FoundItems)
    .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/")

    /**DIRECTIVES */
    function FoundItems(){
        var ddo ={
            templateUrl : 'foundItems.html',
            scope :{
                items : '<'
            },
            controller : 
        }
    }

    /**CONTROLLERS */
    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService){
        var narrowCtrl = this;

        narrowCtrl.getMatchedMenuItems = function(searchTerm){
            //Check if the string contains a value
            if(searchTerm){
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                promise.then(function(response){
                    narrowCtrl.found = response.data;

                })
                .catch(function(error){
                    console.log(error);
                })
            }else{
                narrowCtrl.found = [];
            }
        }
    }

    


    /**SERVICES**/
    MenuSearchService.$inject = ['$http','ApiBasePath'];
    function MenuSearchService($http,ApiBasePath){
        var service = this;

        this.getMatchedMenuItems = function(searchTerm){
            return $http({
                method : "GET",
                url : (ApiBasePath + "/menu_items.json")
            }).then(function(response){

                var foundItems = [];
                console.log(response.data.menu_items);
                console.log(response.data.menu_items.length);

                var menulength = response.data.menu_items.length;
                for(var i = 1; i < menulength ; i++ ){
                    //Get the item from the response
                    var item = response.data.menu_items[i];
                    //Check if the description matches with string given
                    if(item.description.indexOf(searchTerm.toLowerCase()) !== -1 ){
                        foundItems.push(item);
                    }
                }
                console.log(foundItems);
                return foundItems;
            });
        }
    }

})();