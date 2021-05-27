(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject= ['$scope'];
    function LunchCheckController($scope){
        $scope.items = "";
        $scope.numberItems =0;
        $scope.message = "";
        
        $scope.checkList = function(){
            if($scope.items  !== ""){
                var list = $scope.items.split(',');
            $scope.numberItems = list.length;
            }else{
                $scope.numberItems =0;
            }
            
            $scope.message = changeMessage($scope.numberItems);
        };
        
        function changeMessage(numberItems){
            if (numberItems == 0){
                return "Please enter data first should show up. 'Empty";
            }
            else if (numberItems > 0 && numberItems <= 3){
                return "Enjoy!";
            }else{
                return "Too much!";
            }
        }
       
        
    }
})
();