angular
    .module('grolba.goal')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.goal', {
                    url: '/goal',
                    templateUrl: 'module/grolba/goal/view/index.html',
                    controller: 'grolba.goal.IndexController'
                });
        }
    ]);