angular
    .module('editor.ui')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.editor', {
                    url: '/editor/:name',
                    controller: 'editor.ui.IndexController',
                    templateUrl: 'module/editor/ui/view/index.html',
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
                        ]
                    }
                });
        }
    ]);