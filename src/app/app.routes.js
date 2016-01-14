(function() {
    'use strict';

    angular.module('APPNAME')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('stateName', {
            url: '/',
            templateUrl: 'templateUrl'
        })

        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });
}());
