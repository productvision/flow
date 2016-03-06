angular
    .module('grolba.portal', [
        'ui.tinymce',
        'skeleton.crud'
    ])
    .config([
        'skeleton.crud.CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            //CrudModuleFactoryProvider.create({
            //    name: 'app.portal',
            //    url: '/portals',
            //    model: {
            //        type: 'loopback',
            //        name: 'Portal',
            //        relations: {
            //            name: 'Page',
            //            plural: 'pages'
            //        }
            //    }
            //});
        }
    ]);