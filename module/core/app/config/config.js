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
                .otherwise('/app/dictionary');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: "module/core/app/view/layout.html"
                })
                .state('app.ui', {
                    url: '/ui',
                    template: '<div ui-view class="__fade-in-up"></div>'
                })
                .state('app.ui.buttons', {
                    url: '/buttons',
                    templateUrl: 'view/ui_buttons.html'
                })
                .state('app.ui.icons', {
                    url: '/icons',
                    templateUrl: 'view/ui_icons.html'
                })
                .state('app.ui.grid', {
                    url: '/grid',
                    templateUrl: 'view/ui_grid.html'
                })
                .state('app.ui.widgets', {
                    url: '/widgets',
                    templateUrl: 'view/ui_widgets.html'
                })
                .state('app.ui.bootstrap', {
                    url: '/bootstrap',
                    templateUrl: 'view/ui_bootstrap.html'
                })
                .state('app.ui.sortable', {
                    url: '/sortable',
                    templateUrl: 'view/ui_sortable.html'
                })
                .state('app.ui.scroll', {
                    url: '/scroll',
                    templateUrl: 'view/ui_scroll.html',
                    resolve: AutoloaderProvider.load('module/core/app/src/controllers/scroll.js')
                })
                .state('app.ui.portlet', {
                    url: '/portlet',
                    templateUrl: 'view/ui_portlet.html'
                })
                .state('app.ui.timeline', {
                    url: '/timeline',
                    templateUrl: 'view/ui_timeline.html'
                })
                .state('app.ui.tree', {
                    url: '/tree',
                    templateUrl: 'view/ui_tree.html',
                    resolve: AutoloaderProvider.load(['angularBootstrapNavTree', 'module/core/app/src/controllers/tree.js'])
                })
                .state('app.ui.toaster', {
                    url: '/toaster',
                    templateUrl: 'view/ui_toaster.html',
                    resolve: AutoloaderProvider.load(['toaster', 'module/core/app/src/controllers/toaster.js'])
                })
                .state('app.ui.jvectormap', {
                    url: '/jvectormap',
                    templateUrl: 'view/ui_jvectormap.html',
                    resolve: AutoloaderProvider.load('module/core/app/src/controllers/vectormap.js')
                })
                .state('app.ui.googlemap', {
                    url: '/googlemap',
                    templateUrl: 'view/ui_googlemap.html',
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
                    templateUrl: 'view/table_static.html'
                })
                .state('app.table.datatable', {
                    url: '/datatable',
                    templateUrl: 'view/table_datatable.html'
                })
                .state('app.table.footable', {
                    url: '/footable',
                    templateUrl: 'view/table_footable.html'
                })
                .state('app.table.grid', {
                    url: '/grid',
                    templateUrl: 'view/table_grid.html',
                    resolve: AutoloaderProvider.load(['ngGrid', 'module/core/app/src/controllers/grid.js'])
                })
                .state('app.table.uigrid', {
                    url: '/uigrid',
                    templateUrl: 'view/table_uigrid.html',
                    resolve: AutoloaderProvider.load(['ui.grid', 'module/core/app/src/controllers/uigrid.js'])
                })
                .state('app.table.editable', {
                    url: '/editable',
                    templateUrl: 'view/table_editable.html',
                    controller: 'XeditableCtrl',
                    resolve: AutoloaderProvider.load(['xeditable', 'module/core/app/src/controllers/xeditable.js'])
                })
                .state('app.table.smart', {
                    url: '/smart',
                    templateUrl: 'view/table_smart.html',
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
                    templateUrl: 'view/form_components.html',
                    resolve: AutoloaderProvider.load(['ngBootstrap', 'daterangepicker', 'module/core/app/src/controllers/form.components.js'])
                })
                .state('app.form.elements', {
                    url: '/elements',
                    templateUrl: 'view/form_elements.html'
                })
                .state('app.form.validation', {
                    url: '/validation',
                    templateUrl: 'view/form_validation.html'
                })
                .state('app.form.wizard', {
                    url: '/wizard',
                    templateUrl: 'view/form_wizard.html'
                })
                .state('app.form.imagecrop', {
                    url: '/imagecrop',
                    templateUrl: 'view/form_imagecrop.html',
                    resolve: AutoloaderProvider.load(['ngImgCrop', 'module/core/app/src/controllers/imgcrop.js'])
                })
                .state('app.form.select', {
                    url: '/select',
                    templateUrl: 'view/form_select.html',
                    controller: 'SelectCtrl',
                    resolve: AutoloaderProvider.load(['ui.select', 'module/core/app/src/controllers/select.js'])
                })
                .state('app.form.slider', {
                    url: '/slider',
                    templateUrl: 'view/form_slider.html',
                    controller: 'SliderCtrl',
                    resolve: AutoloaderProvider.load(['vr.directives.slider', 'module/core/app/src/controllers/slider.js'])
                })
                .state('app.form.editor', {
                    url: '/editor',
                    templateUrl: 'view/form_editor.html',
                    controller: 'EditorCtrl',
                    resolve: AutoloaderProvider.load(['textAngular', 'module/core/app/src/controllers/editor.js'])
                })
                .state('app.form.xeditable', {
                    url: '/xeditable',
                    templateUrl: 'view/form_xeditable.html',
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
                    templateUrl: 'view/page_profile.html'
                })
                .state('app.page.post', {
                    url: '/post',
                    templateUrl: 'view/page_post.html'
                })
                .state('app.page.search', {
                    url: '/search',
                    templateUrl: 'view/page_search.html'
                })
                .state('app.page.invoice', {
                    url: '/invoice',
                    templateUrl: 'view/page_invoice.html'
                })
                .state('app.page.price', {
                    url: '/price',
                    templateUrl: 'view/page_price.html'
                })
                .state('app.docs', {
                    url: '/docs',
                    templateUrl: 'view/docs.html'
                })
                // others
                .state('lockme', {
                    url: '/lockme',
                    templateUrl: 'view/page_lockme.html'
                })
                .state('access', {
                    url: '/access',
                    template: '<div ui-view class="fade-in-right-big smooth"></div>'
                })
                .state('access.signin', {
                    url: '/signin',
                    templateUrl: 'view/page_signin.html',
                    resolve: AutoloaderProvider.load(['module/core/app/src/controllers/signin.js'])
                })
                .state('access.signup', {
                    url: '/signup',
                    templateUrl: 'view/page_signup.html',
                    resolve: AutoloaderProvider.load(['module/core/app/src/controllers/signup.js'])
                })
                .state('access.forgotpwd', {
                    url: '/forgotpwd',
                    templateUrl: 'view/page_forgotpwd.html'
                })
                .state('access.404', {
                    url: '/404',
                    templateUrl: 'view/page_404.html'
                })

                .state('layout', {
                    abstract: true,
                    url: '/layout',
                    templateUrl: 'view/layout.html'
                })
                .state('layout.fullwidth', {
                    url: '/fullwidth',
                    views: {
                        '': {
                            templateUrl: 'view/layout_fullwidth.html'
                        },
                        'footer': {
                            templateUrl: 'view/layout_footer_fullwidth.html'
                        }
                    },
                    resolve: AutoloaderProvider.load(['module/core/app/src/controllers/vectormap.js'])
                })
                .state('layout.mobile', {
                    url: '/mobile',
                    views: {
                        '': {
                            templateUrl: 'view/layout_mobile.html'
                        },
                        'footer': {
                            templateUrl: 'view/layout_footer_mobile.html'
                        }
                    }
                })
                .state('layout.app', {
                    url: '/app',
                    views: {
                        '': {
                            templateUrl: 'view/layout_app.html'
                        },
                        'footer': {
                            templateUrl: 'view/layout_footer_fullwidth.html'
                        }
                    },
                    resolve: AutoloaderProvider.load(['module/core/app/src/controllers/tab.js'])
                })
                .state('apps', {
                    abstract: true,
                    url: '/apps',
                    templateUrl: 'view/layout.html'
                })

                .state('app.weather', {
                    url: '/weather',
                    templateUrl: 'view/apps_weather.html',
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
        '$rootScope', '$state', '$stateParams', 'Config',
        function ($rootScope, $state, $stateParams, Config) {
            //$rootScope.config = Config.find({
            //        filter: {
            //            where: {
            //                slug: 'dictionary'
            //            }
            //        }
            //    },
            //    function (list) {
            //        debugger;
            //    },
            //    function (errorResponse) {
            //        debugger;
            //    }
            //);
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);