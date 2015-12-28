angular
    .module('grolba.note')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.note', {
                    url: '/note',
                    templateUrl: 'module/grolba/note/view/index.html',
                    controller: 'grolba.note.IndexController',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/note/src/controllers/index.js',
                        'moment'
                    ])
                });
        }
    ]);