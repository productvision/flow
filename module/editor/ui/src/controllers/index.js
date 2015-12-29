angular
    .module('editor.ui')
    .controller('editor.ui.IndexController', [
        '$scope', '$state', '$stateParams', 'module', 'spaceModule',
        function ($scope, $state, $stateParams, module, spaceModule) {
            $scope.module = module;
            $scope.spaceModule = spaceModule;

            $scope.form = {
                model: {
                    name: spaceModule.name,
                    label: spaceModule.label,
                    slug: spaceModule.slug
                },
                options: {},
                fields: module.config,
                submit: function () {

                },
                cancel: function () {

                }
            };
        }
    ]);