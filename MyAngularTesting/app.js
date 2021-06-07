(function(){
    'use strict';
    angular.module('ShopApp',[])
    .controller('ShoppingAddController',ShoppingAddController)
    .service('ShoppingService',ShoppingService);

    function ShoppingAddController(){
        var itemAdder = this;
        itemAdder.shoppingList = shoppingList;
        itemAdder.shoppingCart = [];

        itemAdder.selectedProduct =itemAdder.selectedProduct ;

        itemAdder.SelectProduct = function(item){
            itemAdder.selectedProduct =item;
        }

        itemAdder.AddToCart= function(){
            var itemCart =
            {
                name : itemAdder.selectedProduct.name,
                price : itemAdder.selectedProduct.price,
                quantity : itemAdder.quantity
            };
            console.log(itemCart);
            itemAdder.shoppingCart.push(itemCart);
        }

        itemAdder.RemoveFromCart = function(index){
            itemAdder.shoppingCart.splice(index,1);
        }
    }


    function ShoppingService(){
        var service = this;
        
        var items =[];
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

