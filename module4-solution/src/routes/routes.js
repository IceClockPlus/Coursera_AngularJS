(function(){
    'use strict';
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');


        $stateProvider
        .state('home',{
            url: '/',
            templateUrl:'src/templates/home.template.html'
        })
        .state('categories',{
            url: '/categories',
            templateUrl : 'src/templates/categorylist.template.html',
            controller: 'CategoryListController as catList',
            resolve:{
                categoryList:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategory();
                }]
            }
        })
        .state('categories.items',{
            url: '/items/{catShortName}',
            templateUrl: 'itemlist.template.html',
            controller: 'ItemListController as ctrl',
            resolve: {
                items: ['$stateParams','MenuDataService',function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.catShortName);
                }]
            }
        });
    }
})();