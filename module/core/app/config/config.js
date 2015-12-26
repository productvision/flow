// config

var app =
    angular
        .module('app')
        .config([
            '$httpProvider',
            function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;

                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ])
        .config([
            '$ocLazyLoadProvider', 'AutoloaderProvider', 'ConfigProvider', 'MenuProvider',
            function ($ocLazyLoadProvider, AutoloaderProvider, ConfigProvider, MenuProvider) {
                $ocLazyLoadProvider.config({
                    debug: false,
                    events: true,
                    modules: AutoloaderProvider.getModules()
                });

                var config = ConfigProvider.loadConfig('dictionary');

                MenuProvider.setMenu('navigation', config.getNavigation());
            }
        ])
        .config([
            '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;
            }
        ])
        .config([
            '$stateProvider', '$urlRouterProvider', 'AutoloaderProvider',
            function ($stateProvider, $urlRouterProvider, AutoloaderProvider) {
                $urlRouterProvider
                    .otherwise('/app/dashboard');

                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: "module/core/app/view/layout.html"
                    })
                    .state('app.ui', {
                        url: '/ui',
                        template: '<div ui-view class="fade-in-up"></div>'
                    })
                    .state('app.ui.buttons', {
                        url: '/buttons',
                        templateUrl: 'tpl/ui_buttons.html'
                    })
                    .state('app.ui.icons', {
                        url: '/icons',
                        templateUrl: 'tpl/ui_icons.html'
                    })
                    .state('app.ui.grid', {
                        url: '/grid',
                        templateUrl: 'tpl/ui_grid.html'
                    })
                    .state('app.ui.widgets', {
                        url: '/widgets',
                        templateUrl: 'tpl/ui_widgets.html'
                    })
                    .state('app.ui.bootstrap', {
                        url: '/bootstrap',
                        templateUrl: 'tpl/ui_bootstrap.html'
                    })
                    .state('app.ui.sortable', {
                        url: '/sortable',
                        templateUrl: 'tpl/ui_sortable.html'
                    })
                    .state('app.ui.scroll', {
                        url: '/scroll',
                        templateUrl: 'tpl/ui_scroll.html',
                        resolve: AutoloaderProvider.load('module/core/app/src/controllers/scroll.js')
                    })
                    .state('app.ui.portlet', {
                        url: '/portlet',
                        templateUrl: 'tpl/ui_portlet.html'
                    })
                    .state('app.ui.timeline', {
                        url: '/timeline',
                        templateUrl: 'tpl/ui_timeline.html'
                    })
                    .state('app.ui.tree', {
                        url: '/tree',
                        templateUrl: 'tpl/ui_tree.html',
                        resolve: AutoloaderProvider.load(['angularBootstrapNavTree', 'module/core/app/src/controllers/tree.js'])
                    })
                    .state('app.ui.toaster', {
                        url: '/toaster',
                        templateUrl: 'tpl/ui_toaster.html',
                        resolve: AutoloaderProvider.load(['toaster', 'module/core/app/src/controllers/toaster.js'])
                    })
                    .state('app.ui.jvectormap', {
                        url: '/jvectormap',
                        templateUrl: 'tpl/ui_jvectormap.html',
                        resolve: AutoloaderProvider.load('module/core/app/src/controllers/vectormap.js')
                    })
                    .state('app.ui.googlemap', {
                        url: '/googlemap',
                        templateUrl: 'tpl/ui_googlemap.html',
                        resolve: AutoloaderProvider.load(['module/core/app/src/app/map/load-google-maps.js', 'module/core/app/src/app/map/ui-map.js', 'module/core/app/src/app/map/map.js'], function () {
                            return loadGoogleMaps();
                        })
                    })
                    // table
                    .state('app.table', {
                        url: '/table',
                        template: '<div ui-view></div>'
                    })
                    .state('app.table.static', {
                        url: '/static',
                        templateUrl: 'tpl/table_static.html'
                    })
                    .state('app.table.datatable', {
                        url: '/datatable',
                        templateUrl: 'tpl/table_datatable.html'
                    })
                    .state('app.table.footable', {
                        url: '/footable',
                        templateUrl: 'tpl/table_footable.html'
                    })
                    .state('app.table.grid', {
                        url: '/grid',
                        templateUrl: 'tpl/table_grid.html',
                        resolve: AutoloaderProvider.load(['ngGrid', 'module/core/app/src/controllers/grid.js'])
                    })
                    .state('app.table.uigrid', {
                        url: '/uigrid',
                        templateUrl: 'tpl/table_uigrid.html',
                        resolve: AutoloaderProvider.load(['ui.grid', 'module/core/app/src/controllers/uigrid.js'])
                    })
                    .state('app.table.editable', {
                        url: '/editable',
                        templateUrl: 'tpl/table_editable.html',
                        controller: 'XeditableCtrl',
                        resolve: AutoloaderProvider.load(['xeditable', 'module/core/app/src/controllers/xeditable.js'])
                    })
                    .state('app.table.smart', {
                        url: '/smart',
                        templateUrl: 'tpl/table_smart.html',
                        resolve: AutoloaderProvider.load(['smart-table', 'module/core/app/src/controllers/table.js'])
                    })
                    // form
                    .state('app.form', {
                        url: '/form',
                        template: '<div ui-view class="fade-in"></div>',
                        resolve: AutoloaderProvider.load('module/core/app/src/controllers/form.js')
                    })
                    .state('app.form.components', {
                        url: '/components',
                        templateUrl: 'tpl/form_components.html',
                        resolve: AutoloaderProvider.load(['ngBootstrap', 'daterangepicker', 'module/core/app/src/controllers/form.components.js'])
                    })
                    .state('app.form.elements', {
                        url: '/elements',
                        templateUrl: 'tpl/form_elements.html'
                    })
                    .state('app.form.validation', {
                        url: '/validation',
                        templateUrl: 'tpl/form_validation.html'
                    })
                    .state('app.form.wizard', {
                        url: '/wizard',
                        templateUrl: 'tpl/form_wizard.html'
                    })
                    .state('app.form.fileupload', {
                        url: '/fileupload',
                        templateUrl: 'tpl/form_fileupload.html',
                        resolve: AutoloaderProvider.load(['angularFileUpload', 'module/core/app/src/controllers/file-upload.js'])
                    })
                    .state('app.form.imagecrop', {
                        url: '/imagecrop',
                        templateUrl: 'tpl/form_imagecrop.html',
                        resolve: AutoloaderProvider.load(['ngImgCrop', 'module/core/app/src/controllers/imgcrop.js'])
                    })
                    .state('app.form.select', {
                        url: '/select',
                        templateUrl: 'tpl/form_select.html',
                        controller: 'SelectCtrl',
                        resolve: AutoloaderProvider.load(['ui.select', 'module/core/app/src/controllers/select.js'])
                    })
                    .state('app.form.slider', {
                        url: '/slider',
                        templateUrl: 'tpl/form_slider.html',
                        controller: 'SliderCtrl',
                        resolve: AutoloaderProvider.load(['vr.directives.slider', 'module/core/app/src/controllers/slider.js'])
                    })
                    .state('app.form.editor', {
                        url: '/editor',
                        templateUrl: 'tpl/form_editor.html',
                        controller: 'EditorCtrl',
                        resolve: AutoloaderProvider.load(['textAngular', 'module/core/app/src/controllers/editor.js'])
                    })
                    .state('app.form.xeditable', {
                        url: '/xeditable',
                        templateUrl: 'tpl/form_xeditable.html',
                        controller: 'XeditableCtrl',
                        resolve: AutoloaderProvider.load(['xeditable', 'module/core/app/src/controllers/xeditable.js'])
                    })
                    // pages
                    .state('app.page', {
                        url: '/page',
                        template: '<div ui-view class="fade-in-down"></div>'
                    })
                    .state('app.page.profile', {
                        url: '/profile',
                        templateUrl: 'tpl/page_profile.html'
                    })
                    .state('app.page.post', {
                        url: '/post',
                        templateUrl: 'tpl/page_post.html'
                    })
                    .state('app.page.search', {
                        url: '/search',
                        templateUrl: 'tpl/page_search.html'
                    })
                    .state('app.page.invoice', {
                        url: '/invoice',
                        templateUrl: 'tpl/page_invoice.html'
                    })
                    .state('app.page.price', {
                        url: '/price',
                        templateUrl: 'tpl/page_price.html'
                    })
                    .state('app.docs', {
                        url: '/docs',
                        templateUrl: 'tpl/docs.html'
                    })
                    // others
                    .state('lockme', {
                        url: '/lockme',
                        templateUrl: 'tpl/page_lockme.html'
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class="fade-in-right-big smooth"></div>'
                    })
                    .state('access.signin', {
                        url: '/signin',
                        templateUrl: 'tpl/page_signin.html',
                        resolve: AutoloaderProvider.load(['module/core/app/src/controllers/signin.js'])
                    })
                    .state('access.signup', {
                        url: '/signup',
                        templateUrl: 'tpl/page_signup.html',
                        resolve: AutoloaderProvider.load(['module/core/app/src/controllers/signup.js'])
                    })
                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'tpl/page_forgotpwd.html'
                    })
                    .state('access.404', {
                        url: '/404',
                        templateUrl: 'tpl/page_404.html'
                    })

                    .state('layout', {
                        abstract: true,
                        url: '/layout',
                        templateUrl: 'tpl/layout.html'
                    })
                    .state('layout.fullwidth', {
                        url: '/fullwidth',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_fullwidth.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_fullwidth.html'
                            }
                        },
                        resolve: AutoloaderProvider.load(['module/core/app/src/controllers/vectormap.js'])
                    })
                    .state('layout.mobile', {
                        url: '/mobile',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_mobile.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_mobile.html'
                            }
                        }
                    })
                    .state('layout.app', {
                        url: '/app',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_app.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_fullwidth.html'
                            }
                        },
                        resolve: AutoloaderProvider.load(['module/core/app/src/controllers/tab.js'])
                    })
                    .state('apps', {
                        abstract: true,
                        url: '/apps',
                        templateUrl: 'tpl/layout.html'
                    })

                    .state('app.weather', {
                        url: '/weather',
                        templateUrl: 'tpl/apps_weather.html',
                        resolve: AutoloaderProvider.load(['module/core/app/src/app/weather/skycons.js', 'angular-skycons', 'module/core/app/src/app/weather/ctrl.js', 'moment'])
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
            '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]);