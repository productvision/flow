angular
    .module('grolba.issue')
    .controller('grolba.issue.CreateController', [
        '$scope', 'entityReflector', 'issueType',
        function ($scope, entityReflector, issueType) {
            var properties = issueType.fields;
            var formFields = Object.keys(properties)
                .filter(function (propertyKey) {
                    return ['id'].indexOf(propertyKey) === -1;
                })
                .map(function (propertyKey) {
                    var property = properties[propertyKey];

                    return {
                        key: propertyKey,
                        type: entityReflector.guessFormType(property.type),
                        templateOptions: {
                            label: property.hasOwnProperty('description') ? property.description : propertyKey
                        }
                    };
                });

            $scope.model = {};
            $scope.fields = formFields;
            $scope.options = {};
        }
    ]);