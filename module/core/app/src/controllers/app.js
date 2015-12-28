'use strict';

/* Controllers */

angular
    .module('app')
    .controller('AppController', [
        '$rootScope', '$scope', '$state', '$uibModal', 'LazyState', 'SpaceModule', 'modules', 'spaces', 'spaceModules',
        function ($rootScope, $scope, $state, $uibModal, LazyState, SpaceModule, modules, spaces, spaceModules) {

            function addState(spaceModule) {
                if (!spaceModule.addToMenu) {
                    return;
                }

                var module;
                for (var index in modules) {
                    if (modules.hasOwnProperty(index)) {
                        module = modules[index];
                        if (module.id === spaceModule.moduleId) {
                            break;
                        }
                    }
                }

                if (!module) {
                    return;
                }

                var stateConfig = {
                    url: '/' + spaceModule.slug,
                    templateUrl: module.templateUrl
                };
                if (module.controller) {
                    stateConfig.controller = module.controller;
                }

                LazyState.addState('module.' + spaceModule.slug, stateConfig);
            }

            jQuery.map(spaceModules, addState);


            $rootScope.space = spaces[0];
            $rootScope.spaces = spaces;

            $rootScope.openModuleModal = function () {
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl: 'module/core/app/view/module-modal.html',
                    controller: 'core.app.ModuleModalController',
                    resolve: {
                        modules: [
                            'Module',
                            function (Module) {
                                return Module.query().$promise;
                            }
                        ]
                    }
                });
                modal.result.then(function (item) {
                    item.spaceId = $rootScope.space.id;

                    var spaceModule = new SpaceModule(item);
                    spaceModule.$save();

                    if (item.hasOwnProperty('addToMenu') && item.addToMenu) {
                        $rootScope.space.menu.push({
                            label: spaceModule.name,
                            sref: 'module.' + spaceModule.slug
                        });
                        $rootScope.space.$save();

                        addState(spaceModule);
                    }
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };

            $scope.editor = {
                model: {},
                fields: [
                    {
                        key: 'model',
                        type: 'select',
                        templateOptions: {
                            label: 'Datenquelle',
                            options: [
                                {
                                    name: 'Interne Datenbank',
                                    value: 'memory'
                                },
                                {
                                    name: 'Rest API',
                                    value: 'rest'
                                }
                            ]
                        }
                    }
                ],
                options: {}
            };

            $scope.updateView = function () {
                $state.transitionTo('app.dynamic', {
                    templateUrl: $scope.editor.model.view
                }, {
                    reload: true, inherit: false, notify: true
                });
            };

            $scope.openSpace = function (spaceId) {
                $rootScope.space = $rootScope.spaces[spaceId];
            };

        }]
    );