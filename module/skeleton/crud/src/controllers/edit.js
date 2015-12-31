angular
    .module('skeleton.crud')
    .controller('skeleton.crud.EditController', [
        '$scope', '$state', 'entity', 'entityReflector',
        function ($scope, $state, entity, entityReflector) {
            var formFields = entityReflector.mapProperties(function (property) {
                return {
                    key: property.key,
                    type: this.guessFormType(property.type),
                    templateOptions: {
                        label: property.hasOwnProperty('description') ? property.description : property.key
                    }
                };
            });

            $scope.form = {
                model: entity,
                fields: formFields,
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