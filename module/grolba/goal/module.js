angular
    .module('grolba.goal', [
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.grouping',
        'ui.grid.selection',

        'skeleton.crud'
    ])

    .config([
        'CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                id: 'goal',
                url: '/goal',
                model: 'Goal'
            });
        }
    ]);