(function(){
    'use strict';
    angular.module('ShopApp',[])
    .controller('ShoppingAddController',ShoppingAddController)
    .controller('ShoppingShowController',ShoppingShowController)
    .service('ShoppingService',ShoppingService);

    ShoppingAddController.$inject =['ShoppingService']
    function ShoppingAddController(ShoppingService){
        var itemAdder = this;
        itemAdder.shoppingList = shoppingList;
        itemAdder.shoppingCart = ShoppingService.getItems();

        itemAdder.selectedProduct =itemAdder.selectedProduct ;


        itemAdder.AddToCart= function(itemSelected){
            var itemCart =
            {
                name : itemSelected.name,
                price : itemSelected.price,
                quantity : itemAdder.quantity
            };
            console.log(itemCart);
            ShoppingService.AddItem(itemCart);
        }

        itemAdder.RemoveFromCart = function(index){
            itemAdder.shoppingCart.splice(index,1);
        }
    }

    function ShoppingShowController(){
        var showList = this;
    } 

    function ShoppingService(){
        var service = this;
        
        var items =[];

        service.AddItem = function(itemAdded){
            items.push(itemAdded);
        }

        service.getItems = function(){
            return items;
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

