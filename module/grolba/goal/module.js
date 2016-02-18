angular
    .module('grolba.goal', [
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.grouping',
        'ui.grid.selection',

        'skeleton.crud'
    ])

    .config([
        'skeleton.crud.CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                name: 'app.goal',
                url: '/goal',
                model: {
                    name: 'Goal',
                    type: 'loopback'
                }
            });
        }
    ]);