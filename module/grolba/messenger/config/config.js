angular
    .module('grolba.messenger')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.messenger', {
                    abstract: true,
                    url: '/messenger',
                    templateUrl: 'module/grolba/messenger/view/index.html',
                    controller: 'grolba.messenger.IndexController',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/messenger/src/controllers/index.js',
                        'moment'
                    ])
                })
                .state('app.messenger.list', {
                    url: '/inbox/{folder}',
                    templateUrl: 'module/grolba/messenger/view/list.html',
                    controller: 'grolba.messenger.ListController',
                    resolve: {
                        messages: [
                            'Message',
                            function (Message) {
                                return Message.query().$promise;
                            }
                        ]
                    }
                })
                .state('app.messenger.detail', {
                    url: '/{messageId:[0-9]{1,4}}',
                    templateUrl: 'module/grolba/messenger/view/detail.html',
                    controller: 'grolba.messenger.DetailController',
                    resolve: {
                        message: [
                            '$stateParams', 'Message',
                            function ($stateParams, Message) {
                                return Message.findById($stateParams.messageId).$promise;
                            }
                        ]
                    }
                })
                .state('app.messenger.create', {
                    url: '/create',
                    templateUrl: 'module/grolba/messenger/view/create.html',
                    controller: 'grolba.messenger.CreateController'
                });
        }
    ]);