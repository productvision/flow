angular
    .module('skeleton.crud', [])
    .provider('CrudModuleFactory', [
        '$stateProvider',
        function ($stateProvider) {
            this.create = function (config) {
                var entitiesResolver = [
                    config.entityName,
                    function (Entity) {
                        return Entity.find().$promise;
                    }
                ];
                var entityResolver = [
                    config.entityName, '$stateParams',
                    function (Entity, $stateParams) {
                        return Entity.get({
                            id: $stateParams.id
                        }).$promise;
                    }
                ];
                var entitySchemaResolver = [
                    config.entityName,
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
                    config.entityName,
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
                        templateUrl: 'module/skeleton/crud/view/list.html',
                        controller: 'skeleton.crud.ListController',
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
                    .state('app.' + config.id + '.show', {
                        url: '/show/:id',
                        templateUrl: 'module/skeleton/crud/view/show.html',
                        controller: 'skeleton.crud.ShowController',
                        resolve: {
                            entity: entityResolver
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