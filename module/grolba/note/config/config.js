angular
    .module('grolba.note')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('apps.note', {
                    url: '/note',
                    templateUrl: 'module/grolba/note/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/note/src/controllers/index.js',
                        'moment'
                    ])
                });
        }
    ]);