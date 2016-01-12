angular
    .module('grolba.website', [])
    .config([
        'CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                id: 'website',
                url: '/website',
                model: 'Page'
            });
            /*
            Blog
            Navigation
            Themes
             */
        }
    ]);