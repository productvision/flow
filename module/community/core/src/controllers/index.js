'use strict';

angular
    .module('community.core')
    .controller('community.core.IndexController', [
        '$scope', 'spaces',
        function ($scope, spaces) {
            $scope.space = spaces[0];
            $scope.spaces = spaces;
        }
    ]);
