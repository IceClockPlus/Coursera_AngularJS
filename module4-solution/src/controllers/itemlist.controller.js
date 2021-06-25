(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('ItemListController',ItemListController);

    ItemListController.$inject =['items'];
    function ItemListController(items){
        console.log(items);
        var ctrl = this;
        ctrl.items = items;
    }

})();