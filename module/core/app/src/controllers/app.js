'use strict';

/* Controllers */

angular
    .module('app')
    .controller('AppController', [
        '$localStorage', '$rootScope', '$scope', '$state', '$timeout', '$translate', '$uibModal', '$window', 'Config',
        function ($localStorage, $rootScope, $scope, $state, $timeout, $translate, $uibModal, $window, Config) {

            function applySettings() {
                if (angular.isDefined($localStorage.settings)) {
                    $scope.space.settings = $localStorage.settings;
                } else {
                    $localStorage.settings = $scope.space.settings;
                }
            }

            function applyBodyClasses() {
                var isIE = !!navigator.userAgent.match(/MSIE/i);
                isIE && angular.element($window.document.body).addClass('ie');
                isSmartDevice($window) && angular.element($window.document.body).addClass('smart');
            }

            Config.find({}, function (spaces) {
                $timeout(function () {
                    $scope.space = spaces[0];
                    $scope.spaces = spaces;

                    applyBodyClasses();
                    applySettings();

                    $scope.$watch('app.settings', function () {
                        if ($scope.space.settings.asideDock && $scope.space.settings.asideFixed) {
                            // aside dock and fixed must set the header fixed.
                            $scope.space.settings.headerFixed = true;
                        }
                        // for box layout, add background image
                        $scope.space.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
                        // save to local storage
                        $localStorage.settings = $scope.space.settings;
                    }, true);
                });
            }, function () {
                debugger;
            });

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
                $scope.space = $scope.spaces[spaceId];
                applySettings();
            };

        }]
    );
