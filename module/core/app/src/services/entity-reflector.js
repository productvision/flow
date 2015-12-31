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