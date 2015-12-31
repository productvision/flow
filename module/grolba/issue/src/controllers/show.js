angular
    .module('grolba.issue')
    .controller('grolba.issue.ShowController', [
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