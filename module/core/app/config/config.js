angular
    .module('app')
    .config([
        '$ocLazyLoadProvider', 'AutoloaderProvider',
        function ($ocLazyLoadProvider, AutoloaderProvider) {
            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
                modules: AutoloaderProvider.getModules()
            });
        }
    ])
    .config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/app/dashboard');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    controller: 'AppController',
                    templateUrl: "module/core/app/view/layout.html",
                    resolve: {
                        user: [
                            'User',
                            function (User) {
                                return User.find(1).$promise;
                            }
                        ],
                        spaceConfig: [
                            'SpaceConfig', 'user',
                            function (SpaceConfig, user) {
                                return SpaceConfig.find({
                                    userId: user.id
                                }).$promise;
                            }
                        ],
                        space: [
                            'Space', 'spaceConfig',
                            function (Space, spaceConfig) {
                                return Space.find(spaceConfig.spaceId).$promise;
                            }
                        ],

                        spaces: [
                            'Space',
                            function (Space) {
                                return Space.find({}).$promise;
                            }
                        ],
                        modules: [
                            'Module',
                            function (Module) {
                                return Module.find({}).$promise;
                            }
                        ],
                        spaceModules: [
                            'SpaceModule',
                            function (SpaceModule) {
                                return SpaceModule.find({}).$promise;
                            }
                        ]
                    }
                });
        }
    ])
    .config([
        '$translateProvider',
        function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: './module/core/app/translations/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('de');
            $translateProvider.useLocalStorage();
        }
    ])
    .run([
        '$rootScope', 'formlyConfig',
        function ($rootScope, formlyConfig) {
            $rootScope.showNotice = function (message) {
                angular.element('#notices .text').text(message);
            };

            formlyConfig.extras.removeChromeAutoComplete = true;
            formlyConfig.setType({
                name: 'ui-select2',
                extends: 'select',
                templateUrl: 'module/core/app/view/form/type/select2.html'
            });
            formlyConfig.setType({
                name: 'ckeditor',
                templateUrl: 'module/core/app/view/form/type/ckeditor.html'
            });
        }
    ]);