angular
    .module('app')
    .controller('core.app.ModuleModalController', [
        '$scope', '$uibModalInstance', 'modules',
        function ($scope, $uibModalInstance, modules) {
            var id = Math.random().toString(36).substring(7);

            $scope.model = {
                moduleId: 7,
                name: id,
                slug: id,
                addToMenu: true
            };
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
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Modulname',
                        placeholder: 'Modulname'
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
                    key: 'addToMenu',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Zum Menü hinzufügen'
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