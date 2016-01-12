angular
    .module('skeleton.crud')
    .service('ModelService', [
        function (modelConfig) {
            this.config = modelConfig;

            this.getEntitiesResolver = function () {
                return [
                    this.config.name,
                    function (Entity) {
                        return Entity.find().$promise;
                    }
                ];
            };
            this.getEntityResolver = function () {
                return [
                    this.config.name, '$stateParams',
                    function (Entity, $stateParams) {
                        return Entity.get({
                            id: $stateParams.id
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
                    config.model.name,
                    function (Entity) {
                        return Entity.create;
                    }
                ];
            };
        }
    ]);