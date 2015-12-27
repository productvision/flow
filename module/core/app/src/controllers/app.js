'use strict';

/* Controllers */

angular
    .module('app')
    .controller('AppController', [
        '$localStorage', '$rootScope', '$scope', '$state', '$translate', '$uibModal', '$window', 'SpaceManager',
        function ($localStorage, $rootScope, $scope, $state, $translate, $uibModal, $window, SpaceManager) {

            function applySettings() {
                if (angular.isDefined($localStorage.settings)) {
                    $scope.app.settings = $localStorage.settings;
                } else {
                    $localStorage.settings = $scope.app.settings;
                }
            }

            function applyBodyClasses() {
                var isIE = !!navigator.userAgent.match(/MSIE/i);
                isIE && angular.element($window.document.body).addClass('ie');
                isSmartDevice($window) && angular.element($window.document.body).addClass('smart');
            }

            function updateView() {
                $scope.app = SpaceManager.getCurrent().getConfig();
                $scope.currentSpace = SpaceManager.getCurrent();
                $scope.currentSpaceId = SpaceManager.getCurrent().getId();
                $scope.spaces = SpaceManager.getConfig();
            }

            updateView();
            applyBodyClasses();
            applySettings();


            $scope.openModuleModal = function () {
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl: 'module/core/app/view/module-modal.html',
                    controller: 'core.app.ModuleModalController'
                });
                modal.result.then(function (item) {
                    // write somewhere
                    // inject to $stateProvider with id, url, tpl and ctrl
                    // add to navigation
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };

            $scope.$watch('app.settings', function () {
                if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
                    // aside dock and fixed must set the header fixed.
                    $scope.app.settings.headerFixed = true;
                }
                // for box layout, add background image
                $scope.app.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
                // save to local storage
                $localStorage.settings = $scope.app.settings;
            }, true);

            // angular translate
            $scope.lang = {
                isopen: false
            };
            $scope.langs = {
                en: 'English',
                de_DE: 'German',
                it_IT: 'Italian'
            };
            $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
            $scope.setLang = function (langKey) {
                $scope.selectLang = $scope.langs[langKey];
                $translate.use(langKey);
                $scope.lang.isopen = !$scope.lang.isopen;
            };

            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }


            $scope.editor = {
                model: {},
                fields: [
                    {
                        key: 'view',
                        type: 'select',
                        templateOptions: {
                            label: 'Ansicht',
                            placeholder: 'Ansicht',
                            options: [
                                {
                                    name: 'Standard',
                                    value: 'module/core/skeleton/view/default.html'
                                },
                                {
                                    name: 'Statische Seite',
                                    value: 'module/core/skeleton/view/static-page.html'
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
                SpaceManager.load(spaceId);
                updateView();
                applySettings();
            };

        }]
    );
