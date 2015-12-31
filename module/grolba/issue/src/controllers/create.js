angular
    .module('grolba.issue')
    .controller('grolba.issue.CreateController', [
        '$scope', '$state', 'Issue', 'entityReflector',
        function ($scope, $state, Issue, entityReflector) {
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
                    Issue.create($scope.form.model, function (entity) {
                        $state.go('app.issue.show', {
                            id: entity.id
                        });
                    });
                }
            };
        }
    ]);