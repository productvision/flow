angular
    .module('skeleton.crud', [])
    .provider('CrudModuleFactory', [
        '$stateProvider', 'ModelService',
        function ($stateProvider, ModelService) {
            this.create = function (config) {
                config.layout = config.hasOwnProperty('layout') ? config.layout : 'default';

                var model = new ModelService(config.model);

                $stateProvider
                    .state('app.' + config.id, {
                        abstract: true,
                        url: config.url,
                        templateUrl: 'module/skeleton/crud/view/layout/' + config.layout + '.html',
                        resolve: {
                            entitySchema: model.getEntitySchemaResolver(),
                            entityReflector: model.getEntityReflectorResolver()
                        }
                    })
                    .state('app.' + config.id + '.list', {
                        url: '/list',
                        templateUrl: 'module/skeleton/crud/view/list/index.html',
                        controller: 'skeleton.crud.list.IndexController',
                        resolve: {
                            createEntity: model.getEntityFactoryResolver(),
                            entities: model.getEntitiesResolver()
                        }
                    })
                    .state('app.' + config.id + '.list.chart', {
                        url: '/chart',
                        templateUrl: 'module/skeleton/crud/view/list/chart.html',
                        controller: 'skeleton.crud.list.ChartController'
                    })
                    .state('app.' + config.id + '.list.grid', {
                        url: '/grid',
                        templateUrl: 'module/skeleton/crud/view/list/grid.html',
                        controller: 'skeleton.crud.list.GridController'
                    })
                    .state('app.' + config.id + '.list.widget', {
                        url: '/widget',
                        templateUrl: 'module/skeleton/crud/view/list/widget.html',
                        controller: 'skeleton.crud.list.WidgetController'
                    })

                    .state('app.' + config.id + '.show', {
                        url: '/show/:id',
                        templateUrl: 'module/skeleton/crud/view/show/index.html',
                        controller: 'skeleton.crud.show.IndexController',
                        resolve: {
                            entity: model.getEntityResolver()
                        }
                    })
                    .state('app.' + config.id + '.show.timeline', {
                        url: '/timeline',
                        templateUrl: 'module/skeleton/crud/view/show/timeline.html',
                        controller: 'skeleton.crud.list.TimeLineController'
                    })

                    .state('app.' + config.id + '.create', {
                        url: '/create',
                        templateUrl: 'module/skeleton/crud/view/edit.html',
                        controller: 'skeleton.crud.CreateController',
                        resolve: {
                            createEntity: model.getEntityFactoryResolver()
                        }
                    })
                    .state('app.' + config.id + '.edit', {
                        url: '/edit/:id',
                        templateUrl: 'module/skeleton/crud/view/edit.html',
                        controller: 'skeleton.crud.EditController',
                        resolve: {
                            entity: model.getEntityResolver()
                        }
                    });
            };

            this.$get = [
                function () {
                    return this;
                }
            ];
        }
    ]);