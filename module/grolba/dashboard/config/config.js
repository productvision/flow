angular
    .module('grolba.dashboard')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'module/grolba/dashboard/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/dashboard/src/controllers/index.js'
                    ])
                });
        }
    ]);