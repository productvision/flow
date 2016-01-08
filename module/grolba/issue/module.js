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
                model: 'Issue'
            });
        }
    ]);