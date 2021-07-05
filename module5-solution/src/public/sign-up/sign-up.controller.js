(function(){

    'use strict';

    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['MenuService']
    function SignUpController(MenuService){
        var $signUpCtrl = this;

        $signUpCtrl.submit = function(){
            console.log($signUpCtrl.user.shortname);
            var promise = MenuService.getFavMenuItem($signUpCtrl.user.shortname);
            promise.then(function(response){
                console.log(response);
                $signUpCtrl.user.favMenuItem =response.data;
                $signUpCtrl.itemFound =true;
            }).catch(function(error){
                console.log(error);
                $signUpCtrl.itemFound =false;
            })
        }

    }

})();