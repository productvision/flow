angular
    .module('skeleton.crud')
    .controller('skeleton.crud.EditController', [
        '$scope', '$state', 'entity', 'entityReflector',
        function ($scope, $state, entity, entityReflector) {
            function keyExists(element, keys) {
                if (typeof keys === 'string') {
                    keys = keys.split('.');
                }

                for (var i = 0; i < keys.length; i++) {
                    if (!element || !element.hasOwnProperty(keys[i])) {
                        return false;
                    }
                    element = element[keys[i]];
                }
                return true;
            }

            var fields = [];
            var config = $state.current.data.config;

            var properties = entityReflector.mapProperties(function (property, config) {
                var type;

                if (keyExists(config, 'model.properties.' + property.key)) {
                    type = config.model.properties[property.key];
                } else {
                    type = this.guessFormType(property.type || 'string');
                }

                return {
                    key: property.key,
                    type: type,
                    id: 'field-' + property.key,
                    templateOptions: {
                        label: property.hasOwnProperty('description') ? property.description : property.key
                    }
                };
            }, config);

            var relations = entityReflector.mapRelations(function (relation) {
                return this.createComponent(relation);
            });

            angular.extend(fields, properties, relations);

            if (keyExists(config, 'view.edit.properties')) {
                fields = fields.filter(function (field) {

                    return this.properties.indexOf(field.key) > -1;
                }, config.view.edit);
            }

            $scope.form = {
                model: entity,
                fields: fields,
                submit: function () {
                    $scope.form.model.$save(function (entity) {
                        $state.go('^.show', {
                            id: entity.id
                        });
                    });
                }
            };
        }
    ]);