(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('CategoryListController',CategoryListController);

    CategoryListController.$inject = ['MenuDataService','categoryList']
    function CategoryListController(MenuDataService,categoryList){
        var ctrl = this;
        ctrl.categories = categoryList;
        console.log('categories list in catlist:' + categoryList)
    }

})();