angular
    .module('grolba.calendar')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            var resolve = AutoloaderProvider.load([
                'moment',
                'fullcalendar',
                'ui.calendar'
            ]);
            resolve.events = [
                'Event',
                function (Event) {
                    return Event.query().$promise;
                }
            ];

            $stateProvider
                .state('app.calendar', {
                    url: '/calendar',
                    controller: 'grolba.calendar.IndexController',
                    templateUrl: 'module/grolba/calendar/view/index.html',
                    resolve: resolve
                });
        }
    ]);