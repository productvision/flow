angular
    .module('app')
    .controller('core.app.ModuleModalController', [
        '$scope', '$uibModalInstance',
        function ($scope, $uibModalInstance) {
            $scope.model = {
            };
            $scope.onSubmit = function () {
                console.log(JSON.stringify($scope.model), null, 2);
            };
            $scope.fields = [
                {
                    key: 'type',
                    type: 'select',
                    templateOptions: {
                        label: 'Template',
                        placeholder: 'Template wählen...',
                        options: [
                            {
                                name: 'Statische Seite',
                                value: 'static-page'
                            }
                        ]
                    }
                },
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Modulname',
                        placeholder: 'Modulname'
                    }
                }
            ];
            $scope.options = {
                formState: {
                    awesomeIsForced: false
                }
            };

            $scope.ok = function () {
                $uibModalInstance.close($scope.model);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);