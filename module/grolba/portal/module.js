angular
    .module('grolba.portal', [
        'ui.tinymce',
        'skeleton.crud'
    ])
    .config([
        'CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                id: 'portal',
                url: '/portal',
                model: {
                    type: 'loopback',
                    name: 'Portal'
                }
            });
        }
    ]);