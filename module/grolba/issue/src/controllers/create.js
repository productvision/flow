angular
    .module('app')
    .controller('grolba.issue.CreateController', [
        '$scope', '$uibModalInstance',
        function ($scope, $uibModalInstance) {
            $scope.model = {};
            $scope.fields = [
                {
                    key: 'issueTypeId',
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
                $uibModalInstance.close($scope.model);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);