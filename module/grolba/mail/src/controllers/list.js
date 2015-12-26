angular
    .module('grolba.mail')
    .controller('grolba.mail.ListController', [
        '$scope', 'mails', '$stateParams',
        function ($scope, mails, $stateParams) {
            $scope.fold = $stateParams.fold;
            mails.all().then(function (mails) {
                $scope.mails = mails;
            });
        }]);