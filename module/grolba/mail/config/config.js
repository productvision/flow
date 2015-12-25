angular
    .module('grolba.mail')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('app.mail', {
                    abstract: true,
                    url: '/mail',
                    templateUrl: 'module/grolba/mail/view/mail.html',
                    resolve: AutoloaderProvider.load([
                        'module/grolba/mail/src/controllers/index.js',
                        'module/grolba/mail/src/services/mail.js',
                        'moment'
                    ])
                })
                .state('app.mail.list', {
                    url: '/inbox/{fold}',
                    templateUrl: 'module/grolba/mail/view/mail.list.html'
                })
                .state('app.mail.detail', {
                    url: '/{mailId:[0-9]{1,4}}',
                    templateUrl: 'module/grolba/mail/view/mail.detail.html'
                })
                .state('app.mail.compose', {
                    url: '/compose',
                    templateUrl: 'module/grolba/mail/view/mail.new.html'
                });
        }
    ])
    .run();