angular
    .module('grolba.calendar')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.calendar', {
                    url: '/calendar',
                    templateUrl: 'module/grolba/calendar/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'moment',
                        'fullcalendar',
                        'ui.calendar',
                        'module/grolba/calendar/src/controllers/index.js'
                    ])
                });
        }
    ]);