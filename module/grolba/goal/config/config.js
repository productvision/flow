angular
    .module('grolba.goal')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.goal', {
                    url: '/goal/:view',
                    templateUrl: function ($stateParams) {
                        return 'module/grolba/goal/view/' + $stateParams.view + '.html';
                    },
                    controller: 'grolba.goal.IndexController',
                    resolve: {
                        goals: [
                            'Goal',
                            function (Goal) {
                                return Goal.find({
                                    filter: {
                                        include: 'keyResults'
                                    }
                                }).$promise;
                            }
                        ]
                    }
                });
        }
    ]);