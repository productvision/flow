angular
    .module('grolba.issue', [
        'skeleton.crud'
    ])
    .config([
        'skeleton.crud.CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                name: 'app.issue',
                url: '/issue',
                model: {
                    name: 'Issue',
                    type: 'loopback'
                }
            });
        }
    ])
    .run([
        '$rootScope', '$state', '$uibModal', 'formlyConfig', 'Issue',
        function ($rootScope, $state, $uibModal, formlyConfig, Issue) {
            $rootScope.openCreateDialog = function (type) {
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl: 'module/grolba/issue/view/modals/create.html',
                    controller: 'grolba.issue.CreateController'
                });
                modal.result.then(function (item) {
                    var issue = new Issue();
                    issue.issueTypeId = item.issueTypeId;

                    issue.$save(function (entity) {
                        $state.go('^.show', {
                            id: entity.id
                        });

                    }, function () {
                    });

                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };

            formlyConfig.setType({
                name: 'issueTypeCollection',
                templateUrl: 'module/grolba/issue/view/form/type/issue-type.html',
                controller: [
                    '$scope',
                    function ($scope) {
                        $scope.formOptions = {
                            formState: $scope.formState
                        };
                        $scope.create = function create() {
                            var key = $scope.options.key;

                            $scope.model[key] = $scope.model[key] || [];
                            var issueTypeCollections = $scope.model[key];
                            var lastIssueTypeCollection = issueTypeCollections[issueTypeCollections.length - 1];
                            var issueTypeCollection = {};

                            if (lastIssueTypeCollection) {
                                issueTypeCollection = angular.copy(lastIssueTypeCollection);
                            }
                            issueTypeCollections.push(issueTypeCollection);
                        };
                    }
                ]
            });
        }
    ]);