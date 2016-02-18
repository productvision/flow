angular
    .module('skeleton.crud')
    .controller('skeleton.crud.list.IndexController', [
        '$scope', 'entities', 'entityReflector',
        function ($scope, entities, entityReflector) {
            $scope.entityName = entityReflector.entitySchema.name;

            $scope.entities = entities;
            $scope.properties = entityReflector.mapProperties(function (property) {
                return {
                    key: property.key,
                    type: property.type,
                    label: property.hasOwnProperty('description') ? property.description : property.key
                };
            });
        }
    ]);