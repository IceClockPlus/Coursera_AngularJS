(function(){

    'use strict';

    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['MenuService']
    function SignUpController(MenuService){
        var $signUpCtrl = this;

        $signUpCtrl.submit = function(){
            console.log($signUpCtrl.user);
            
        }

    }

})();