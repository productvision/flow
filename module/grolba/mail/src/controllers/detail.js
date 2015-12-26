angular
    .module('grolba.mail')
    .controller('grolba.mail.DetailController', [
        '$scope', 'mails', '$stateParams',
        function ($scope, mails, $stateParams) {
            mails.get($stateParams.mailId).then(function (mail) {
                $scope.mail = mail;
            })
        }]);