(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject= ['$scope'];
    function LunchCheckController($scope){
        $scope.items = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function(){
            if(!$scope.items){
                $scope.message = "Please enter data first should show up. 'Empty'";
            }else if(getNumberItems($scope.items) <4){
                $scope.message = "Enjoy!";
            }else{
                $scope.message = "Too much!";
            }
            
            $scope.message = changeMessage($scope.numberItems);
        };
        
        function getNumberItems(items){
            var itemsArr = items.split(',');
            return itemsArr.length;
        }
       
        
    }
})
();