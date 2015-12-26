angular
    .module('simplicity.dictionary')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.dictionary', {
                    url: '/dictionary',
                    templateUrl: 'module/simplicity/dictionary/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'moment',
                        'fullcalendar',
                        'ui.calendar',
                        'module/simplicity/dictionary/src/controllers/index.js'
                    ])
                });
        }
    ]);