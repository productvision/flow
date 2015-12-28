angular
    .module('grolba.messenger')
    .controller('grolba.messenger.DetailController', [
        '$scope', 'message',
        function ($scope, message) {
            $scope.mail = message;
        }]);