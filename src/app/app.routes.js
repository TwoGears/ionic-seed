(function() {
    'use strict';

    angular.module('APPNAME')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('intro', {
            url: '/',
            templateUrl: 'intro/intro.tmpl.html'
        })

        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });
}());
