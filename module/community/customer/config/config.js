angular
    .module('community.customer')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('community', {
                    abstract: true,
                    url: '/community',
                    templateUrl: "module/community/core/view/layout.html",
                    controller: 'community.core.IndexController',
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
                })
                .state('community.customer', {
                    url: '/customer',
                    template: '<div data-ui-view></div>'
                });
        }
    ])
    .config([
        'skeleton.crud.CrudModuleFactoryProvider', 'skeleton.dashboard.DashboardModuleFactoryProvider',
        function (CrudModuleFactoryProvider, DashboardModuleFactoryProvider) {
            DashboardModuleFactoryProvider.create({
                name: 'community.customer.dashboard',
                url: '/dashboard'
            });

            CrudModuleFactoryProvider.create({
                name: 'community.customer.pages',
                url: '/pages',
                model: {
                    name: 'Page',
                    type: 'loopback',
                    properties: {
                        content: 'ckeditor'
                    }
                },
                view: {
                    list: {
                        properties: ['title', 'author', 'date']
                    },
                    show: {
                        templateUrl: 'module/community/customer/view/show.html'
                    },
                    edit: {
                        properties: ['title', 'author', 'content', 'slug', 'status', 'visibility']
                    }
                }
            });
            CrudModuleFactoryProvider.create({
                name: 'community.customer.users',
                url: '/users',
                model: {
                    name: 'User',
                    type: 'loopback'
                },
                view: {
                    list: {
                        columns: ['username', 'email']
                    }
                }
            });
        }
    ]);