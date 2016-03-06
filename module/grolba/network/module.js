angular
    .module('grolba.network', [
        'core.loader'
    ])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.network', {
                    url: '/network',
                    templateUrl: 'module/grolba/network/view/index.html'
                });
        }
    ])
    .controller('grolba.network.IndexController', [
        function () {

        }
    ]);