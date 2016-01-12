angular
    .module('grolba.dictionary', [
        'core.loader',
        'skeleton.crud'
    ])
    .config([
        '$stateProvider', 'AutoloaderProvider', 'CrudModuleFactoryProvider',
        function ($stateProvider, AutoloaderProvider, CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                id: 'dictionary',
                url: '/dictionary',
                model: {
                    type: 'loopback',
                    name: 'Word'
                }
            });

            $stateProvider
                //.state('app.dictionary', {
                //    abstract: true,
                //    url: '/dictionary',
                //    template: '<div data-ui-view></div>'
                //})
                .state('app.dictionary.search', {
                    url: '/search',
                    templateUrl: 'module/grolba/dictionary/view/index.html'
                });
        }
    ]);