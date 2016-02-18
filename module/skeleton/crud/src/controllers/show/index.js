angular
    .module('skeleton.crud')
    .controller('skeleton.crud.show.IndexController', [
        '$scope', '$state', 'entity', 'entityReflector', 'hotkeys',
        function ($scope, $state, entity, entityReflector, hotkeys) {
            hotkeys.add({
                combo: 'e',
                callback: function () {
                    $state.go('^.edit', {
                        id: entity.id
                    });
                }
            });

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