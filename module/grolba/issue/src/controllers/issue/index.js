angular
    .module('grolba.issue')
    .controller('grolba.issue.IndexController', [
        '$scope', '$stateParams',
        function ($scope, $stateParams) {
            $scope.id = $stateParams.id;
        }
    ]);