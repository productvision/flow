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
    ]);