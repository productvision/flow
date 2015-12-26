angular
    .module('grolba.todo')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.todo', {
                    url: '/todo',
                    templateUrl: 'module/grolba/todo/view/index.html',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/todo/src/controllers/index.js',
                        'moment'
                    ])
                })
                .state('app.todo.list', {
                    url: '/{fold}'
                });
        }
    ]);