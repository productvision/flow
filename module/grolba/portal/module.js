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
                url: '/portals',
                model: {
                    type: 'loopback',
                    name: 'Portal',
                    relations: {
                        name: 'Page',
                        plural: 'pages'
                    }
                }
            });
        }
    ]);