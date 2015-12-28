angular
    .module('editor.ui')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.editor', {
                    url: '/editor',
                    controller: 'editor.ui.IndexController',
                    templateUrl: 'module/editor/ui/view/index.html',
                    resolve: {
                        spaces: [
                            '$stateParams', 'Space',
                            function ($stateParams, Space) {
                                return Space.find({}).$promise;
                            }
                        ],
                        modules: [
                            '$stateParams', 'Module',
                            function ($stateParams, Module) {
                                return Module.find({}).$promise;
                            }
                        ],
                        spaceModules: [
                            '$stateParams', 'SpaceModule',
                            function ($stateParams, SpaceModule) {
                                return SpaceModule.find({
                                    name: $stateParams.name
                                }).$promise;
                            }
                        ]
                    }
                })
                .state('app.editor.detail', {
                    url: '/:name',
                    controller: 'editor.ui.DetailController',
                    templateUrl: 'module/editor/ui/view/detail.html',
                    resolve: {
                        spaceModule: [
                            '$stateParams', 'SpaceModule',
                            function ($stateParams, SpaceModule) {
                                return SpaceModule.findOne({
                                    name: $stateParams.name
                                }).$promise;
                            }
                        ],
                        module: [
                            '$stateParams', 'Module', 'spaceModule',
                            function ($stateParams, Module, spaceModule) {
                                return Module.findOne(spaceModule.id).$promise;
                            }
                        ],
                    }
                });
        }
    ]);