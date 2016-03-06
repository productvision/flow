angular
    .module('grolba.goal', [
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.grouping',
        'ui.grid.selection',

        'skeleton.crud'
    ])

    .config([
        '$stateProvider', 'skeleton.crud.CrudModuleFactoryProvider',
        function ($stateProvider, CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                name: 'app.goal',
                url: '/goal',
                model: {
                    name: 'Goal',
                    type: 'loopback'
                }
            });

            $stateProvider
                .state('app.goal.search', {
                    url: '/search',
                    templateUrl: 'module/grolba/goal/view/search.html',
                    controller: 'grolba.goal.SearchController'
                });
        }
    ])

    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.goal.view', {
                    url: '/goal/view/:view',
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