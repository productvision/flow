angular
    .module('skeleton.crud')
    .controller('skeleton.crud.EditController', [
        '$scope', '$state', 'entity', 'entityReflector',
        function ($scope, $state, entity, entityReflector) {
            var fields = [];

            fields.push(entityReflector.mapProperties(function (property) {
                return {
                    key: property.key,
                    type: this.guessFormType(property.type),
                    templateOptions: {
                        label: property.hasOwnProperty('description') ? property.description : property.key
                    }
                };
            }));
            fields.push(entityReflector.mapRelations(function (relation) {
                return this.createComponent(relation);
            }));

            $scope.form = {
                model: entity,
                fields: [].concat.apply([], fields),
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