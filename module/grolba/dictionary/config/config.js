angular
    .module('grolba.dictionary')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.dictionary', {
                    url: '/dictionary',
                    templateUrl: 'module/grolba/dictionary/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'moment',
                        'fullcalendar',
                        'ui.calendar',
                        'module/grolba/dictionary/src/controllers/index.js'
                    ])
                });
        }
    ]);