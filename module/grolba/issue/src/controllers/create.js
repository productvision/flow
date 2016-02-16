angular
    .module('app')
    .controller('grolba.issue.CreateController', [
        '$scope', '$uibModalInstance',
        function ($scope, $uibModalInstance) {
            $scope.model = {};
            $scope.onSubmit = function () {
                console.log(JSON.stringify($scope.model), null, 2);
            };

            $scope.fields = [
                {
                    key: 'entityName',
                    type: 'select',
                    templateOptions: {
                        label: 'Vorgangsart',
                        options: [
                            {
                                name: 'Existenzgründer',
                                value: 1
                            }

                        ]
                    }
                }
            ];
            $scope.options = {};

            $scope.ok = function () {
                $scope.fields.push({
                    key: 'asd',
                    type: 'input'
                });
                debugger;
                //$uibModalInstance.close($scope.model);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);