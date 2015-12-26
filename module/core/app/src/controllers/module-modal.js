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
                        label: 'Modul',
                        placeholder: 'Modul',
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
                },
                {
                    key: 'config',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Konfiguration',
                        placeholder: 'Konfiguration'
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