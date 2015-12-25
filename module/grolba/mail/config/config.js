angular
    .module('grolba.mail')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            function load(sources, callback) {
                return {
                    deps: [
                        '$ocLazyLoad', '$q',
                        function ($ocLazyLoad, $q) {
                            var deferred = $q.defer();
                            var promise = false;
                            sources = angular.isArray(sources) ? sources : sources.split(/\s+/);
                            if (!promise) {
                                promise = deferred.promise;
                            }
                            angular.forEach(sources, function (src) {
                                promise = promise.then(function () {
                                    if (JQ_CONFIG[src]) {
                                        return $ocLazyLoad.load(JQ_CONFIG[src]);
                                    }
                                    angular.forEach(MODULE_CONFIG, function (module) {
                                        if (module.name == src) {
                                            name = module.name;
                                        } else {
                                            name = src;
                                        }
                                    });
                                    return $ocLazyLoad.load(name);
                                });
                            });
                            deferred.resolve();
                            return callback ? promise.then(function () {
                                return callback();
                            }) : promise;
                        }
                    ]
                }
            }

            $stateProvider
                .state('app.mail', {
                    abstract: true,
                    url: '/mail',
                    templateUrl: 'module/grolba/mail/view/mail.html',
                    resolve: Autoloader.load([
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