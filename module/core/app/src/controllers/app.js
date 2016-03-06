'use strict';

/* Controllers */

angular
    .module('app')
    .controller('AppController', [
        '$rootScope', '$state', '$uibModal', 'LazyState', 'SpaceModule', 'modules', 'spaces', 'spaceModules',
        'skeleton.crud.CrudModuleFactory',
        function ($rootScope, $state, $uibModal, LazyState, SpaceModule, modules, spaces, spaceModules, CrudModuleFactory) {
            modules.map(function (module) {
                switch (module.type) {
                    case 'skeleton.crud.CrudModuleFactoryProvider':
                        CrudModuleFactory.create(module);
                        break;
                }
            });

            $rootScope.currentStateName = $state.current.name;
            $rootScope.$on("$stateChangeStart", function (event, toState) {
                $rootScope.currentStateName = toState.name;
            });

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
                    templateUrl: module.view
                };
                if (module.controller) {
                    stateConfig.controller = module.controller;
                }

                LazyState.addState('module.' + spaceModule.slug, stateConfig);
            }

            jQuery.map(spaceModules, addState);


            $rootScope.space = spaces[0];
            $rootScope.spaces = spaces;

            $rootScope.openSpace = function (spaceId) {
                var space = $rootScope.spaces[spaceId];
                var state;
                if (space.hasOwnProperty('sref')) {
                    state = space.sref;
                }
                if (space.hasOwnProperty('menu') && space.menu.length > 0) {
                    var menuItem = space.menu[0];

                    if (menuItem.hasOwnProperty('sref')) {
                        state = menuItem.sref;
                    }
                }

                $rootScope.space = $rootScope.spaces[spaceId];

                if (state) {
                    $state.go(state);
                }
            };

        }]
    );