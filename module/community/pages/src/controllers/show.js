'use strict';

angular
    .module('community.pages')
    .controller('community.pages.ShowController', [
        '$scope', 'page',
        function ($scope, page) {
            $scope.page = page;
        }
    ]);
