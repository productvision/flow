angular
    .module('grolba.issue')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            var entitiesResolver = [
                'Issue',
                function (Entity) {
                    return Entity.find().$promise;
                }
            ];
            var entityResolver = [
                'Issue', '$stateParams',
                function (Entity, $stateParams) {
                    return Entity.get({
                        id: $stateParams.id
                    }).$promise;
                }
            ];
            var entitySchemaResolver = [
                'Issue',
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

            $stateProvider
                .state('app.issue', {
                    url: '/issue',
                    templateUrl: 'module/grolba/issue/view/index.html',
                    controller: 'grolba.issue.IndexController'
                })
                .state('app.issue.list', {
                    url: '/list',
                    templateUrl: 'module/grolba/issue/view/list.html',
                    controller: 'grolba.issue.ListController',
                    resolve: {
                        entities: entitiesResolver,
                        entitySchema: entitySchemaResolver,
                        entityReflector: entityReflectorResolver
                    }
                })
                .state('app.issue.create', {
                    url: '/create',
                    templateUrl: 'module/grolba/issue/view/create.html',
                    controller: 'grolba.issue.CreateController',
                    resolve: {
                        entitySchema: entitySchemaResolver,
                        entityReflector: entityReflectorResolver
                    }
                })
                .state('app.issue.show', {
                    url: '/show/:id',
                    templateUrl: 'module/grolba/issue/view/show.html',
                    controller: 'grolba.issue.ShowController',
                    resolve: {
                        entity: entityResolver,
                        entitySchema: entitySchemaResolver,
                        entityReflector: entityReflectorResolver
                    }
                })
                .state('app.issue.edit', {
                    url: '/edit/:id',
                    templateUrl: 'module/grolba/issue/view/edit.html',
                    controller: 'grolba.issue.EditController',
                    resolve: {
                        entity: entityResolver,
                        entitySchema: entitySchemaResolver,
                        entityReflector: entityReflectorResolver
                    }
                });
        }
    ]);