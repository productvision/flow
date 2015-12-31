angular
    .module('grolba.issue', [
        'skeleton.crud'
    ])
    .config([
        'CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                id: 'issue',
                url: '/issue',
                entityName: 'Issue',
                type: 'skeleton.crud'
            });
        }
    ]);