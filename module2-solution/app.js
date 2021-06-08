(function(){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buyCtrl = this;
        buyCtrl.buyList = ShoppingListCheckOffService.getToBuyList();
    }

    AlreadyBoughtController.$inject  = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtCtrl = this;
        boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService(){
        var service = this;

        var toBuyList = [
            {
                name : "Cookies",
                quantity : 20   
            },
            {
                name : "Sausage",
                quantity : 15
            },
            {
                name : "Apple",
                quantity:9
            },
            {
                name : "Brownies",
                quantity : 11
            },
            {
                name : "Chips",
                quantity : 8
            }
        ]

        var boughtList = [];

        service.getToBuyList = function(){
            return toBuyList;
        }

        service.getBoughtList = function(){
            return boughtList;
        }

    }

})();

