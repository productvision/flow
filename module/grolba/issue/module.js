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
                model: {
                    type: 'loopback',
                    name: 'Issue'
                }
            });
        }
    ]);