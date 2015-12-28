angular
    .module('grolba.messenger')
    .controller('grolba.messenger.ListController', [
        '$scope', '$stateParams', 'messages',
        function ($scope, $stateParams, messages) {
            $scope.folder = $stateParams.folder;
            $scope.messages = messages;
        }]);