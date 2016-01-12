angular
    .module('skeleton.crud')
    .controller('skeleton.crud.EditController', [
        '$scope', '$state', 'entity', 'entityReflector',
        function ($scope, $state, entity, entityReflector) {
            var formPropertyFields = entityReflector.mapProperties(function (property) {
                return {
                    key: property.key,
                    type: this.guessFormType(property.type),
                    templateOptions: {
                        label: property.hasOwnProperty('description') ? property.description : property.key
                    }
                };
            });

            var formRelationFields = entityReflector.mapRelations(function (relation) {
                return {
                    key: relation.key,
                    type: this.guessDirective(relation.type),
                    templateOptions: {
                        label: relation.model,
                        options: [{
                            name: 'foo',
                            value: 'bar'
                        }]
                    }
                };
            });

            $scope.form = {
                model: entity,
                fields: formPropertyFields.concat(formRelationFields),
                submit: function () {
                    $scope.form.model.$save(function (entity) {
                        $state.go('^.show', {
                            id: entity.id
                        });
                    });
                }
            };

            $scope.editor = {
                model: 'asd',
                config: {
                    onChange: function (e) {
                        // put logic here for keypress and cut/paste changes
                    },
                    inline: false,
                    plugins: 'advlist autolink link image lists charmap print preview',
                    skin: 'lightgray',
                    theme: 'modern',
                    setup: function (editor) {
                        //Focus the editor on load
                        $timeout(function () {
                            editor.focus();
                        });
                        editor.on("init", function () {
                            console.log('init', arguments);
                        });
                        editor.on("click", function () {
                            console.log('click', arguments);
                        });
                    }
                }
            };
        }
    ]);