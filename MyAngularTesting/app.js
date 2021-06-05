(function(){
    'use strict';
    angular.module('ShopApp',[])
    .controller('ShopAppController',ShopAppController);

    ShopAppController.$inject =['$scope'];
    function ShopAppController($scope){
        $scope.shoppingList = shoppingList;
        $scope.shoppingCart = [];

        $scope.selectedProduct =$scope.selectedProduct ;

        $scope.SelectProduct = function(item){
            $scope.selectedProduct =item;
        }

        $scope.AddToCart= function(){
            var itemCart =
            {
                name : $scope.selectedProduct.name,
                price : $scope.selectedProduct.price,
                quantity : $scope.quantity
            };
            console.log(itemCart);
            $scope.shoppingCart.push(itemCart);
        }

        $scope.RemoveFromCart = function(index){
            $scope.shoppingCart.splice(index,1);
        }
    }

})();


var shoppingList = [
    {
        name : "Ketchup",
        price : 120
    },
    {
        name : "Brownie",
        price : 100
    },
    {
        name : "Sausage",
        price : 256
    },
    {
        name : "Avocado",
        price : 102
    },
    {
        name : "Tomato",
        price : 320
    },
    {
        name : "Bread",
        price : 290
    }
]

