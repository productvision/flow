angular
    .module('skeleton.crud')
    .controller('skeleton.crud.list.WidgetController', [
        '$scope', 'entity', 'entityReflector',
        function ($scope, entity, entityReflector) {
            $scope.entity = entity;
            $scope.properties = entityReflector.mapProperties(function (property) {
                return {
                    key: property.key,
                    type: property.type,
                    label: property.hasOwnProperty('description') ? property.description : property.key
                };
            });
        }
    ]);