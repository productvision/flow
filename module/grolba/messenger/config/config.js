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
                    resolve: AutoloaderProvider.load([
                        'module/grolba/messenger/src/controllers/index.js',
                        'module/grolba/messenger/src/services/messenger.js',
                        'moment'
                    ])
                })
                .state('app.messenger.list', {
                    url: '/inbox/{folder}',
                    templateUrl: 'module/grolba/messenger/view/list.html',
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
                    templateUrl: 'module/grolba/messenger/view/create.html'
                });
        }
    ]);