// config

var app =
    angular
        .module('app')
        .constant('JQ_CONFIG', {
                easyPieChart: ['../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
                sparkline: ['../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
                plot: ['../libs/jquery/flot/jquery.flot.js',
                    '../libs/jquery/flot/jquery.flot.pie.js',
                    '../libs/jquery/flot/jquery.flot.resize.js',
                    '../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    '../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js',
                    '../libs/jquery/flot-spline/js/jquery.flot.spline.min.js'],
                moment: ['../libs/jquery/moment/moment.js'],
                screenfull: ['../libs/jquery/screenfull/dist/screenfull.min.js'],
                slimScroll: ['../libs/jquery/slimscroll/jquery.slimscroll.min.js'],
                sortable: ['../libs/jquery/html5sortable/jquery.sortable.js'],
                nestable: ['../libs/jquery/nestable/jquery.nestable.js',
                    '../libs/jquery/nestable/jquery.nestable.css'],
                filestyle: ['../libs/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js'],
                slider: ['../libs/jquery/bootstrap-slider/bootstrap-slider.js',
                    '../libs/jquery/bootstrap-slider/bootstrap-slider.css'],
                chosen: ['../libs/jquery/chosen/chosen.jquery.min.js',
                    '../libs/jquery/chosen/bootstrap-chosen.css'],
                TouchSpin: ['../libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                    '../libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
                wysiwyg: ['../libs/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                    '../libs/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
                dataTable: ['../libs/jquery/datatables/media/js/jquery.dataTables.min.js',
                    '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                    '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
                vectorMap: ['../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                    '../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                    '../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                    '../libs/jquery/bower-jvectormap/jquery-jvectormap.css'],
                footable: ['../libs/jquery/footable/v3/js/footable.min.js',
                    '../libs/jquery/footable/v3/css/footable.bootstrap.min.css'],
                fullcalendar: ['../libs/jquery/moment/moment.js',
                    '../libs/jquery/fullcalendar/dist/fullcalendar.min.js',
                    '../libs/jquery/fullcalendar/dist/fullcalendar.css',
                    '../libs/jquery/fullcalendar/dist/fullcalendar.theme.css'],
                daterangepicker: ['../libs/jquery/moment/moment.js',
                    '../libs/jquery/bootstrap-daterangepicker/daterangepicker.js',
                    '../libs/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
                tagsinput: ['../libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                    '../libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']

            }
        )
        .constant('MODULE_CONFIG', [
                {
                    name: 'ngGrid',
                    files: [
                        '../libs/angular/ng-grid/build/ng-grid.min.js',
                        '../libs/angular/ng-grid/ng-grid.min.css',
                        '../libs/angular/ng-grid/ng-grid.bootstrap.css'
                    ]
                },
                {
                    name: 'ui.grid',
                    files: [
                        '../libs/angular/angular-ui-grid/ui-grid.min.js',
                        '../libs/angular/angular-ui-grid/ui-grid.min.css',
                        '../libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
                    ]
                },
                {
                    name: 'ui.select',
                    files: [
                        '../libs/angular/angular-ui-select/dist/select.min.js',
                        '../libs/angular/angular-ui-select/dist/select.min.css'
                    ]
                },
                {
                    name: 'angularFileUpload',
                    files: [
                        '../libs/angular/angular-file-upload/angular-file-upload.js'
                    ]
                },
                {
                    name: 'ui.calendar',
                    files: ['../libs/angular/angular-ui-calendar/src/calendar.js']
                },
                {
                    name: 'ngImgCrop',
                    files: [
                        '../libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
                        '../libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
                    ]
                },
                {
                    name: 'angularBootstrapNavTree',
                    files: [
                        '../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                        '../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
                    ]
                },
                {
                    name: 'toaster',
                    files: [
                        '../libs/angular/angularjs-toaster/toaster.js',
                        '../libs/angular/angularjs-toaster/toaster.css'
                    ]
                },
                {
                    name: 'textAngular',
                    files: [
                        '../libs/angular/textAngular/dist/textAngular-sanitize.min.js',
                        '../libs/angular/textAngular/dist/textAngular.min.js'
                    ]
                },
                {
                    name: 'vr.directives.slider',
                    files: [
                        '../libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
                        '../libs/angular/venturocket-angular-slider/build/angular-slider.css'
                    ]
                },
                {
                    name: 'com.2fdevs.videogular',
                    files: [
                        '../libs/angular/videogular/videogular.min.js'
                    ]
                },
                {
                    name: 'com.2fdevs.videogular.plugins.controls',
                    files: [
                        '../libs/angular/videogular-controls/controls.min.js'
                    ]
                },
                {
                    name: 'com.2fdevs.videogular.plugins.buffering',
                    files: [
                        '../libs/angular/videogular-buffering/buffering.min.js'
                    ]
                },
                {
                    name: 'com.2fdevs.videogular.plugins.overlayplay',
                    files: [
                        '../libs/angular/videogular-overlay-play/overlay-play.min.js'
                    ]
                },
                {
                    name: 'com.2fdevs.videogular.plugins.poster',
                    files: [
                        '../libs/angular/videogular-poster/poster.min.js'
                    ]
                },
                {
                    name: 'com.2fdevs.videogular.plugins.imaads',
                    files: [
                        '../libs/angular/videogular-ima-ads/ima-ads.min.js'
                    ]
                },
                {
                    name: 'xeditable',
                    files: [
                        '../libs/angular/angular-xeditable/dist/js/xeditable.min.js',
                        '../libs/angular/angular-xeditable/dist/css/xeditable.css'
                    ]
                },
                {
                    name: 'smart-table',
                    files: [
                        '../libs/angular/angular-smart-table/dist/smart-table.min.js'
                    ]
                },
                {
                    name: 'angular-skycons',
                    files: [
                        '../libs/angular/angular-skycons/angular-skycons.js'
                    ]
                }
            ]
        )
        // oclazyload config
        .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function ($ocLazyLoadProvider, MODULE_CONFIG) {
            // We configure ocLazyLoad to use the lib script.js as the async loader
            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
                modules: MODULE_CONFIG
            });
        }])
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
            '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG',
            function ($stateProvider, $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {
                var layout = "tpl/app.html";
                if (window.location.href.indexOf("material") > 0) {
                    layout = "tpl/blocks/material.layout.html";
                    $urlRouterProvider
                        .otherwise('/app/dashboard-v3');
                } else {
                    $urlRouterProvider
                        .otherwise('/app/dashboard-v1');
                }

                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: layout
                    })
                    .state('app.dashboard-v1', {
                        url: '/dashboard-v1',
                        templateUrl: 'tpl/app_dashboard_v1.html',
                        resolve: load(['module/core/app/src/controllers/chart.js'])
                    })
                    .state('app.dashboard-v2', {
                        url: '/dashboard-v2',
                        templateUrl: 'tpl/app_dashboard_v2.html',
                        resolve: load(['module/core/app/src/controllers/chart.js'])
                    })
                    .state('app.dashboard-v3', {
                        url: '/dashboard-v3',
                        templateUrl: 'tpl/app_dashboard_v3.html',
                        resolve: load(['module/core/app/src/controllers/chart.js'])
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
                        resolve: load('module/core/app/src/controllers/scroll.js')
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
                        resolve: load(['angularBootstrapNavTree', 'module/core/app/src/controllers/tree.js'])
                    })
                    .state('app.ui.toaster', {
                        url: '/toaster',
                        templateUrl: 'tpl/ui_toaster.html',
                        resolve: load(['toaster', 'module/core/app/src/controllers/toaster.js'])
                    })
                    .state('app.ui.jvectormap', {
                        url: '/jvectormap',
                        templateUrl: 'tpl/ui_jvectormap.html',
                        resolve: load('module/core/app/src/controllers/vectormap.js')
                    })
                    .state('app.ui.googlemap', {
                        url: '/googlemap',
                        templateUrl: 'tpl/ui_googlemap.html',
                        resolve: load(['module/core/app/src/app/map/load-google-maps.js', 'module/core/app/src/app/map/ui-map.js', 'module/core/app/src/app/map/map.js'], function () {
                            return loadGoogleMaps();
                        })
                    })
                    .state('app.chart', {
                        url: '/chart',
                        templateUrl: 'tpl/ui_chart.html',
                        resolve: load('module/core/app/src/controllers/chart.js')
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
                        resolve: load(['ngGrid', 'module/core/app/src/controllers/grid.js'])
                    })
                    .state('app.table.uigrid', {
                        url: '/uigrid',
                        templateUrl: 'tpl/table_uigrid.html',
                        resolve: load(['ui.grid', 'module/core/app/src/controllers/uigrid.js'])
                    })
                    .state('app.table.editable', {
                        url: '/editable',
                        templateUrl: 'tpl/table_editable.html',
                        controller: 'XeditableCtrl',
                        resolve: load(['xeditable', 'module/core/app/src/controllers/xeditable.js'])
                    })
                    .state('app.table.smart', {
                        url: '/smart',
                        templateUrl: 'tpl/table_smart.html',
                        resolve: load(['smart-table', 'module/core/app/src/controllers/table.js'])
                    })
                    // form
                    .state('app.form', {
                        url: '/form',
                        template: '<div ui-view class="fade-in"></div>',
                        resolve: load('module/core/app/src/controllers/form.js')
                    })
                    .state('app.form.components', {
                        url: '/components',
                        templateUrl: 'tpl/form_components.html',
                        resolve: load(['ngBootstrap', 'daterangepicker', 'module/core/app/src/controllers/form.components.js'])
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
                        resolve: load(['angularFileUpload', 'module/core/app/src/controllers/file-upload.js'])
                    })
                    .state('app.form.imagecrop', {
                        url: '/imagecrop',
                        templateUrl: 'tpl/form_imagecrop.html',
                        resolve: load(['ngImgCrop', 'module/core/app/src/controllers/imgcrop.js'])
                    })
                    .state('app.form.select', {
                        url: '/select',
                        templateUrl: 'tpl/form_select.html',
                        controller: 'SelectCtrl',
                        resolve: load(['ui.select', 'module/core/app/src/controllers/select.js'])
                    })
                    .state('app.form.slider', {
                        url: '/slider',
                        templateUrl: 'tpl/form_slider.html',
                        controller: 'SliderCtrl',
                        resolve: load(['vr.directives.slider', 'module/core/app/src/controllers/slider.js'])
                    })
                    .state('app.form.editor', {
                        url: '/editor',
                        templateUrl: 'tpl/form_editor.html',
                        controller: 'EditorCtrl',
                        resolve: load(['textAngular', 'module/core/app/src/controllers/editor.js'])
                    })
                    .state('app.form.xeditable', {
                        url: '/xeditable',
                        templateUrl: 'tpl/form_xeditable.html',
                        controller: 'XeditableCtrl',
                        resolve: load(['xeditable', 'module/core/app/src/controllers/xeditable.js'])
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
                        resolve: load(['module/core/app/src/controllers/signin.js'])
                    })
                    .state('access.signup', {
                        url: '/signup',
                        templateUrl: 'tpl/page_signup.html',
                        resolve: load(['module/core/app/src/controllers/signup.js'])
                    })
                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'tpl/page_forgotpwd.html'
                    })
                    .state('access.404', {
                        url: '/404',
                        templateUrl: 'tpl/page_404.html'
                    })

                    // fullCalendar
                    .state('app.calendar', {
                        url: '/calendar',
                        templateUrl: 'tpl/app_calendar.html',
                        // use resolve to load other dependences
                        resolve: load(['moment', 'fullcalendar', 'ui.calendar', 'module/core/app/src/app/calendar/calendar.js'])
                    })

                    // mail


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
                        resolve: load(['module/core/app/src/controllers/vectormap.js'])
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
                        resolve: load(['module/core/app/src/controllers/tab.js'])
                    })
                    .state('apps', {
                        abstract: true,
                        url: '/apps',
                        templateUrl: 'tpl/layout.html'
                    })
                    .state('apps.note', {
                        url: '/note',
                        templateUrl: 'tpl/apps_note.html',
                        resolve: load(['module/core/app/src/app/note/note.js', 'moment'])
                    })
                    .state('apps.contact', {
                        url: '/contact',
                        templateUrl: 'tpl/apps_contact.html',
                        resolve: load(['module/core/app/src/app/contact/contact.js'])
                    })
                    .state('app.weather', {
                        url: '/weather',
                        templateUrl: 'tpl/apps_weather.html',
                        resolve: load(['module/core/app/src/app/weather/skycons.js', 'angular-skycons', 'module/core/app/src/app/weather/ctrl.js', 'moment'])
                    })
                    .state('app.todo', {
                        url: '/todo',
                        templateUrl: 'tpl/apps_todo.html',
                        resolve: load(['module/core/app/src/app/todo/todo.js', 'moment'])
                    })
                    .state('app.todo.list', {
                        url: '/{fold}'
                    })
                    .state('app.note', {
                        url: '/note',
                        templateUrl: 'tpl/apps_note_material.html',
                        resolve: load(['module/core/app/src/app/note/note.js', 'moment'])
                    })

                    .state('app.material', {
                        url: '/material',
                        template: '<div ui-view class="wrapper-md"></div>',
                        resolve: load(['module/core/app/src/controllers/material.js'])
                    })
                    .state('app.material.button', {
                        url: '/button',
                        templateUrl: 'tpl/material/button.html'
                    })
                    .state('app.material.color', {
                        url: '/color',
                        templateUrl: 'tpl/material/color.html'
                    })
                    .state('app.material.icon', {
                        url: '/icon',
                        templateUrl: 'tpl/material/icon.html'
                    })
                    .state('app.material.card', {
                        url: '/card',
                        templateUrl: 'tpl/material/card.html'
                    })
                    .state('app.material.form', {
                        url: '/form',
                        templateUrl: 'tpl/material/form.html'
                    })
                    .state('app.material.list', {
                        url: '/list',
                        templateUrl: 'tpl/material/list.html'
                    })
                    .state('app.material.ngmaterial', {
                        url: '/ngmaterial',
                        templateUrl: 'tpl/material/ngmaterial.html'
                    });

                function load(srcs, callback) {
                    return {
                        deps: [
                            '$ocLazyLoad', '$q',
                            function ($ocLazyLoad, $q) {
                                var deferred = $q.defer();
                                var promise = false;
                                srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                                if (!promise) {
                                    promise = deferred.promise;
                                }
                                angular.forEach(srcs, function (src) {
                                    promise = promise.then(function () {
                                        if (JQ_CONFIG[src]) {
                                            return $ocLazyLoad.load(JQ_CONFIG[src]);
                                        }
                                        angular.forEach(MODULE_CONFIG, function (module) {
                                            if (module.name == src) {
                                                name = module.name;
                                            } else {
                                                name = src;
                                            }
                                        });
                                        return $ocLazyLoad.load(name);
                                    });
                                });
                                deferred.resolve();
                                return callback ? promise.then(function () {
                                    return callback();
                                }) : promise;
                            }
                        ]
                    }
                }
            }
        ])
        .config([
            '$translateProvider',
            function ($translateProvider) {
                $translateProvider.useStaticFilesLoader({
                    prefix: './module/core/app/translations/',
                    suffix: '.json'
                });
                $translateProvider.preferredLanguage('en');
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