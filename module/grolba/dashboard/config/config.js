angular
    .module('grolba.dashboard')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'module/grolba/dashboard/view/index.html',
                    controller: 'grolba.dashboard.IndexController'
                });
        }
    ]);