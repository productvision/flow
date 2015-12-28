angular
    .module('grolba.network')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.network', {
                    url: '/network',
                    templateUrl: 'module/grolba/network/view/index.html'
                });
        }
    ]);