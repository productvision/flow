angular
    .module('grolba.contact')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.contact', {
                    url: '/contact',
                    templateUrl: 'module/grolba/contact/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/contact/src/controllers/index.js'
                    ])
                })
        }
    ]);