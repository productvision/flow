angular
    .module('grolba.issue')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.issue', {
                    url: '/issue',
                    templateUrl: 'module/grolba/issue/view/index.html',
                    controller: 'grolba.issue.IndexController'
                });
        }
    ]);