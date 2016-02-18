'use strict';


angular
    .module('community.core')
    .run([
        '$rootScope',
        function ($rootScope) {
            $rootScope.bodyClass = 'with-sidebar';
        }
    ]);