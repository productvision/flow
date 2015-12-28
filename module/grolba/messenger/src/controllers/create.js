angular
    .module('grolba.messenger')
    .controller('grolba.messenger.CreateController', [
        '$scope',
        function ($scope) {
            $scope.mail = {
                to: '',
                subject: '',
                content: ''
            };
            $scope.tolist = [
                {name: 'James', email: 'james@gmail.com'},
                {name: 'Luoris Kiso', email: 'luoris.kiso@hotmail.com'},
                {name: 'Lucy Yokes', email: 'lucy.yokes@gmail.com'}
            ];
        }]);