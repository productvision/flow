angular
    .module('editor.ui')
    .controller('editor.ui.IndexController', [
        '$scope',
        function ($scope) {
            $scope.editor = {
                model: {},
                fields: [
                    {
                        key: 'model',
                        type: 'select',
                        templateOptions: {
                            label: 'Datenquelle',
                            options: [
                                {
                                    name: 'Interne Datenbank',
                                    value: 'memory'
                                },
                                {
                                    name: 'Rest API',
                                    value: 'rest'
                                }
                            ]
                        }
                    }
                ],
                options: {}
            };
        }
    ]);