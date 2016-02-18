angular
    .module('skeleton.crud', [])
    .provider('skeleton.crud.CrudModuleFactory', [
        '$stateProvider',
        function ($stateProvider) {
            this.create = function (config) {
                config.layout = config.hasOwnProperty('layout') ? config.layout : 'default';

                function ModelService(config) {
                    this.config = config;

                    this.getEntitiesResolver = function () {
                        return [
                            this.config.name,
                            function (Entity) {

                                return Entity.find({
                                    filter: {
                                        limit: 10
                                    }
                                }).$promise;
                            }
                        ];
                    };
                    this.getEntityResolver = function () {
                        return [
                            this.config.name, '$stateParams',
                            function (Entity, $stateParams) {

                                return Entity.findOne({
                                    filter: {
                                        include: 'pages',
                                        where: {
                                            id: $stateParams.id
                                        }
                                    }
                                }).$promise;
                            }
                        ];
                    };
                    this.getEntitySchemaResolver = function () {
                        return [
                            this.config.name,
                            function (Entity) {

                                return Entity.schema().$promise;
                            }
                        ];
                    };
                    this.getEntityReflectorResolver = function () {
                        return [
                            'EntityReflectorFactory', 'entitySchema',
                            function (EntityReflectorFactory, entitySchema) {

                                return EntityReflectorFactory.create(entitySchema.schema);
                            }
                        ];
                    };
                    this.getEntityFactoryResolver = function () {
                        return [
                            this.config.name,
                            function (Entity) {

                                return Entity.create;
                            }
                        ];
                    };
                }

                var model = new ModelService(config.model);

                $stateProvider
                    .state(config.name, {
                        abstract: true,
                        url: config.url,
                        templateUrl: 'module/skeleton/crud/view/layout/' + config.layout + '.html',
                        resolve: {
                            entitySchema: model.getEntitySchemaResolver(),
                            entityReflector: model.getEntityReflectorResolver()
                        }
                    })
                    .state(config.name + '.list', {
                        url: '/list',
                        templateUrl: 'module/skeleton/crud/view/list/index.html',
                        controller: 'skeleton.crud.list.IndexController',
                        resolve: {
                            createEntity: model.getEntityFactoryResolver(),
                            entities: model.getEntitiesResolver()
                        }
                    })
                    .state(config.name + '.list.chart', {
                        url: '/chart',
                        templateUrl: 'module/skeleton/crud/view/list/chart.html',
                        controller: 'skeleton.crud.list.ChartController'
                    })
                    .state(config.name + '.list.grid', {
                        url: '/grid',
                        templateUrl: 'module/skeleton/crud/view/list/grid.html',
                        controller: 'skeleton.crud.list.GridController'
                    })
                    .state(config.name + '.list.widget', {
                        url: '/widget',
                        templateUrl: 'module/skeleton/crud/view/list/widget.html',
                        controller: 'skeleton.crud.list.WidgetController'
                    })

                    .state(config.name + '.show', {
                        url: '/show/:id',
                        templateUrl: 'module/skeleton/crud/view/show/index.html',
                        controller: 'skeleton.crud.show.IndexController',
                        resolve: {
                            entity: model.getEntityResolver()
                        }
                    })
                    .state(config.name + '.show.timeline', {
                        url: '/timeline',
                        templateUrl: 'module/skeleton/crud/view/show/timeline.html',
                        controller: 'skeleton.crud.list.TimeLineController'
                    })

                    .state(config.name + '.create', {
                        url: '/create',
                        templateUrl: 'module/skeleton/crud/view/edit.html',
                        controller: 'skeleton.crud.CreateController',
                        resolve: {
                            createEntity: model.getEntityFactoryResolver()
                        }
                    })
                    .state(config.name + '.edit', {
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