(function(){

    'use strict';

    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject = ['userData'];
    function MyInfoController(userData){
        var $myInfoCtrl = this;
        $myInfoCtrl.user = userData;
        console.log($myInfoCtrl.user);

        $myInfoCtrl.isUserRegistered = function(){
            //return true if not empty
            return (!jQuery.isEmptyObject($myInfoCtrl.user)); // true
        }


    }

})();