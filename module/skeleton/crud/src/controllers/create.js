angular
    .module('skeleton.crud')
    .controller('skeleton.crud.CreateController', [
        '$scope', '$state', 'createEntity', 'entityReflector',
        function ($scope, $state, createEntity, entityReflector) {
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
                model: {},
                fields: formFields,

                submit: function () {
                    createEntity($scope.form.model, function (entity) {
                        $state.go('^.show', {
                            id: entity.id
                        });
                    });
                }
            };
        }
    ]);