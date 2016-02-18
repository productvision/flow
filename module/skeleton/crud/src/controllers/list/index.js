angular
    .module('skeleton.crud')
    .controller('skeleton.crud.list.IndexController', [
        '$scope', '$state', 'entities', 'entityReflector',
        function ($scope, $state, entities, entityReflector) {
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

            var config = $state.current.data.config;
            var properties = entityReflector.mapProperties(function (property) {
                return {
                    key: property.key,
                    type: property.type,
                    label: property.hasOwnProperty('description') ? property.description : property.key
                };
            });
            if (keyExists(config, 'view.list.properties')) {
                properties = properties.filter(function (property) {

                    return this.properties.indexOf(property.key) > -1;
                }, config.view.list);
            }
            $scope.properties = properties;
            $scope.config = config;

            $scope.entityName = entityReflector.entitySchema.name;
            $scope.entities = entities;

        }
    ]);