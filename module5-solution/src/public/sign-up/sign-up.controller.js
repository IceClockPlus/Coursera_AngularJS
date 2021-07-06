(function(){

    'use strict';

    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject = ['MenuService']
    function SignUpController(MenuService){
        var $signUpCtrl = this;

        $signUpCtrl.submit = function(){

            var promise = MenuService.getFavMenuItem($signUpCtrl.user.shortname);
            promise.then(function(response){
                //Store the favorite menu item in user.favMenuItem
                $signUpCtrl.user.favMenuItem = response;
                //Save the user data in the MenuService
                console.log($signUpCtrl.user);
                MenuService.setUser($signUpCtrl.user);
                //Show the success message
                showSuccessMessage();
            }).catch(function(error){
                console.log(error);
                showErrorMessage();
            })
        }

        function showSuccessMessage() {
            $signUpCtrl.success =true;
            $signUpCtrl.error = false;
        }
        
        function showErrorMessage(){
            $signUpCtrl.success = false;
            $signUpCtrl.error = true;
        }
    }

})();