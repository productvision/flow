'use strict';

angular
    .module('core.loader')
    .provider('Autoloader', [
        function () {
            var assets = {
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

            };
            this.getAssets = function () {
                return assets;
            };

            var modules = [
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
            ];
            this.getModules = function () {
                return modules;
            };


            this.load = function (sources, callback) {
                return {
                    deps: [
                        '$ocLazyLoad', '$q',
                        function ($ocLazyLoad, $q) {
                            var deferred = $q.defer();
                            var promise = false;
                            sources = angular.isArray(sources) ? sources : sources.split(/\s+/);
                            if (!promise) {
                                promise = deferred.promise;
                            }
                            angular.forEach(sources, function (src) {
                                promise = promise.then(function () {
                                    if (assets[src]) {
                                        return $ocLazyLoad.load(assets[src]);
                                    }
                                    var name = [];
                                    angular.forEach(modules, function (module) {
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
            };

            this.$get = function () {
                return {
                    getAssets: function () {
                        return assets;
                    },
                    getModules: function () {
                        return modules;
                    }
                };
            };
        }
    ]);
