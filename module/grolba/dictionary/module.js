angular
    .module('grolba.dictionary', [
        'core.loader',
        'skeleton.crud'
    ])
    .config([
        '$stateProvider', 'skeleton.crud.CrudModuleFactoryProvider',
        function ($stateProvider, CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                name: 'app.dictionary',
                url: '/dictionary',
                model: {
                    name: 'Word',
                    type: 'loopback'
                }
            });

            $stateProvider
                .state('app.dictionary.search', {
                    url: '/search',
                    templateUrl: 'module/grolba/dictionary/view/index.html'
                });
        }
    ]);