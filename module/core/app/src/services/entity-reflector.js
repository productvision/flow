angular
    .module('app')
    .factory('EntityReflectorFactory', [
        function () {
            function EntityReflector(entitySchema, entity) {
                this.entitySchema = entitySchema;
                this.entity = entity;
            }

            EntityReflector.prototype.mapProperties = function (cb) {
                var entityReflector = this;

                var properties = this.entitySchema.properties;
                var propertyKeys = Object.keys(properties);

                return propertyKeys
                    .filter(function (propertyKey) {
                        return ['id'].indexOf(propertyKey) === -1;
                    })
                    .map(function (propertyKey) {
                        var property = properties[propertyKey];
                        property.key = propertyKey;

                        return cb.apply(entityReflector, [property]);
                    });
            };
            EntityReflector.prototype.mapRelations = function (cb) {
                var entityReflector = this;

                var relations = this.entitySchema.relations;
                var relationKeys = Object.keys(relations);

                return relationKeys
                    .filter(function (relationKey) {
                        return ['id'].indexOf(relationKey) === -1;
                    })
                    .map(function (relationKey) {
                        var relation = relations[relationKey];
                        relation.key = relationKey;

                        return cb.apply(entityReflector, [relation]);
                    });
            };

            EntityReflector.prototype.guessDirective = function(entityRelationType) {
                var entityRelationTypeToDirectiveMap = {
                    belongsTo: 'select',
                    hasMany: 'select',
                    hasOne: 'select'
                };

                if (!entityRelationTypeToDirectiveMap.hasOwnProperty(entityRelationType)) {
                    return entityRelationType;
                }

                return entityRelationTypeToDirectiveMap[entityRelationType];
            };
            EntityReflector.prototype.guessFormType = function(entityPropertyType) {
                var entityPropertyTypeToFormTypeMap = {
                    string: 'input',
                    number: 'input',
                    boolean: 'checkbox',
                    object: 'textarea',
                    array: 'textarea',
                    date: 'input',
                    buffer: 'input',
                    geopoint: 'input'
                };

                if (!entityPropertyTypeToFormTypeMap.hasOwnProperty(entityPropertyType)) {
                    return entityPropertyType;
                }

                return entityPropertyTypeToFormTypeMap[entityPropertyType];
            };

            return {
                create: function (entitySchema) {
                    return new EntityReflector(entitySchema);
                }
            };
        }
    ]);