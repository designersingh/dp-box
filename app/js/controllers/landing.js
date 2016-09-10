'use strict';

hwApp.controller('LandingController',
    ['$routeParams','$scope','$rootScope','$http','$location','ngDialog',
    function($routeParams,$scope,$rootScope,$http,$location,ngDialog){

    $scope.welcome = "Welcome to Landing Page.";

    $scope.initLanding = function(){

        $(window).scroll(function(){
            var wScroll = $(this).scrollTop();

            $('.intro-all-princesses').css({
                'transform':'translate(0px,'+ wScroll/3+'%)'
            });

            $('.intro-hero-logo').css({
                'transform':'translate(0px,'+ wScroll*3/6+'%)'
            });

            $('.intro-hero-image').css({
                'background-position':'0% '+ wScroll/10+'%'
            });


        });
    }

}]);
