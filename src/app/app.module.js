(function() {
    'use strict';

    angular.module('APPNAME', [
        'ionic',
        'APPNAME.templates',
        'APPNAME.utils',
        'APPNAME.services',
        'APPNAME.directives',
        'APPNAME.controllers'
    ]);
    angular.module('APPNAME.config', []);
    angular.module('APPNAME.templates', []);
    angular.module('APPNAME.utils', ['APPNAME.config']);
    angular.module('APPNAME.models', ['APPNAME.utils']);
    angular.module('APPNAME.services', ['APPNAME.utils', 'APPNAME.models']);
    angular.module('APPNAME.directives', []);
    angular.module('APPNAME.controllers', ['APPNAME.services']);
}());
