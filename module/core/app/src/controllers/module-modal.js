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
                        }),

                        //optionsAttr: 'bs-options',
                        //ngOptions: 'option[to.valueProp] as option in to.options',
                        //valueProp: 'id',
                        //labelProp: 'label'
                    }
                },
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Modulname',
                        placeholder: 'Modulname',
                        onKeypress: function($viewValue, $modelValue, scope) {
                            debugger;
                            console.log('The key was pressed!', $viewValue);
                        }
                    }
                },
                {
                    key: 'slug',
                    type: 'input',
                    templateOptions: {
                        label: window.location.host + '/',
                        placeholder: 'Url eingeben',
                        onFocus: function() {
                            debugger;
                        }
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