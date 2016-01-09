angular
    .module('skeleton.crud', [])
    .provider('CrudModuleFactory', [
        '$stateProvider',
        function ($stateProvider) {
            this.create = function (config) {
                var entitiesResolver = [
                    config.model,
                    function (Entity) {
                        return Entity.find().$promise;
                    }
                ];
                var entityResolver = [
                    config.model, '$stateParams',
                    function (Entity, $stateParams) {
                        return Entity.get({
                            id: $stateParams.id
                        }).$promise;
                    }
                ];
                var entitySchemaResolver = [
                    config.model,
                    function (Entity) {
                        return Entity.schema().$promise;
                    }
                ];
                var entityReflectorResolver = [
                    'EntityReflectorFactory', 'entitySchema',
                    function (EntityReflectorFactory, entitySchema) {
                        return EntityReflectorFactory.create(entitySchema.schema);
                    }
                ];
                var entityFactoryResolver = [
                    config.model,
                    function (Entity) {
                        return Entity.create;
                    }
                ];

                $stateProvider
                    .state('app.' + config.id, {
                        abstract: true,
                        url: config.url,
                        template: '<div data-ui-view></div>',
                        resolve: {
                            entitySchema: entitySchemaResolver,
                            entityReflector: entityReflectorResolver
                        }
                    })
                    .state('app.' + config.id + '.list', {
                        url: '/list',
                        templateUrl: 'module/skeleton/crud/view/list/index.html',
                        controller: 'skeleton.crud.list.IndexController',
                        resolve: {
                            createEntity: entityFactoryResolver,
                            entities: entitiesResolver
                        }
                    })
                    .state('app.' + config.id + '.list.chart', {
                        url: '/chart',
                        templateUrl: 'module/skeleton/crud/view/list/chart.html',
                        controller: 'skeleton.crud.list.ChartController',
                        resolve: {
                            createEntity: entityFactoryResolver,
                            entities: entitiesResolver
                        }
                    })
                    .state('app.' + config.id + '.list.grid', {
                        url: '/grid',
                        templateUrl: 'module/skeleton/crud/view/list/grid.html',
                        controller: 'skeleton.crud.list.GridController',
                        resolve: {
                            createEntity: entityFactoryResolver,
                            entities: entitiesResolver
                        }
                    })
                    .state('app.' + config.id + '.list.widget', {
                        url: '/widget',
                        templateUrl: 'module/skeleton/crud/view/list/widget.html',
                        controller: 'skeleton.crud.list.WidgetController',
                        resolve: {
                            createEntity: entityFactoryResolver,
                            entities: entitiesResolver
                        }
                    })

                    .state('app.' + config.id + '.show', {
                        url: '/show/:id',
                        templateUrl: 'module/skeleton/crud/view/show/index.html',
                        controller: 'skeleton.crud.show.IndexController',
                        resolve: {
                            entity: entityResolver
                        }
                    })
                    .state('app.' + config.id + '.show.timeline', {
                        url: '/timeline',
                        templateUrl: 'module/skeleton/crud/view/show/timeline.html',
                        controller: 'skeleton.crud.list.TimeLineController',
                        resolve: {
                            createEntity: entityFactoryResolver,
                            entities: entitiesResolver
                        }
                    })

                    .state('app.' + config.id + '.create', {
                        url: '/create',
                        templateUrl: 'module/skeleton/crud/view/edit.html',
                        controller: 'skeleton.crud.CreateController',
                        resolve: {
                            createEntity: entityFactoryResolver
                        }
                    })
                    .state('app.' + config.id + '.edit', {
                        url: '/edit/:id',
                        templateUrl: 'module/skeleton/crud/view/edit.html',
                        controller: 'skeleton.crud.EditController',
                        resolve: {
                            entity: entityResolver
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