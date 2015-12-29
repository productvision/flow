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
                    //controller: function ($stateParams) {
                    //    debugger;
                    //    var controller = 'grolba.goal.IndexController';
                    //    var availableControllers = ['charts'];
                    //    if (availableControllers.indexOf($stateParams.view) > -1) {
                    //        controller = 'grolba.goal.ChartController';
                    //    }
                    //    return controller;
                    //},
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