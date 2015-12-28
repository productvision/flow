angular
    .module('app')
    .controller('core.app.ModuleModalController', [
        '$scope', '$uibModalInstance', 'modules',
        function ($scope, $uibModalInstance, modules) {
            $scope.model = {};
            $scope.onSubmit = function () {
                console.log(JSON.stringify($scope.model), null, 2);
            };

            $scope.fields = [
                {
                    key: 'moduleId',
                    type: 'select',
                    templateOptions: {
                        label: 'Modul',
                        placeholder: 'Modul wählen...',
                        options: jQuery.map(modules, function (module) {
                            return {
                                name: module.label,
                                value: module.id
                            };
                        })
                    }
                },
                {
                    key: 'slug',
                    type: 'input',
                    templateOptions: {
                        label: window.location.host + '/',
                        placeholder: 'Url eingeben'
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