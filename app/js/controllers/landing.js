'use strict';

hwApp.controller('LandingController',
    ['$routeParams','$scope','$rootScope','$http','$location','ngDialog',
    function($routeParams,$scope,$rootScope,$http,$location,ngDialog){

    $scope.signupConfirmed = false;

    $scope.initLanding = function(){
        $(window).scroll(function(){
            $('.intro-all-princesses, .intro-hero-logo').removeClass('animated');
            var wScroll = $(this).scrollTop();
            console.log(wScroll);

            $('.intro-all-princesses').css({
                'transform':'translate(0px,'+ wScroll/3+'%)'
            });

            $('.intro-hero-logo').css({
                'transform':'translate(0px,'+ wScroll*3/6+'%)'
            });

            $('.intro-hero-image').css({
                'background-position':'100% '+ wScroll/10+'%'
            });
        });
    }

    $scope.submitSignup = function(){
        $scope.signupConfirmed = true;
    }

}]);
