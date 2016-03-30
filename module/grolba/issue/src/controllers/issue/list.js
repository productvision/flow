angular
    .module('grolba.issue')
    .controller('grolba.issue.ListController', [
        '$scope', '$stateParams',
        function ($scope, $stateParams) {
            $scope.id = $stateParams.id;
        }
    ]);