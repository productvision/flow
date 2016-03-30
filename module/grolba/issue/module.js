angular
    .module('grolba.issue', [
        'ui.bootstrap',
        'skeleton.crud'
    ])
    .config([
        '$stateProvider', 'skeleton.crud.CrudModuleFactoryProvider',
        function ($stateProvider, CrudModuleFactoryProvider) {
            $stateProvider
                .state('app.issue', {
                    abstract: true,
                    url: '/issue',
                    template: '<div class="col-md-12" data-ui-view></div>'
                })
                .state('app.issue.show', {
                    url: '/show/:id',
                    templateUrl: 'module/grolba/issue/view/issue/show.html',
                    controller: 'grolba.issue.ShowController'
                })
                .state('app.issue.list', {
                    url: '/list/:id',
                    templateUrl: 'module/grolba/issue/view/issue/list.html',
                    controller: 'grolba.issue.ListController'
                })
                .state('app.issue.create', {
                    url: '/create/:id',
                    templateUrl: 'module/grolba/issue/view/issue/create.html',
                    controller: 'grolba.issue.CreateController',
                    resolve: {
                        issueType: [
                            'IssueType', '$stateParams',
                            function (Entity, $stateParams) {
                                var filter = {
                                    where: {
                                        id: $stateParams.id
                                    }
                                };

                                return Entity.findOne({
                                    filter: filter
                                }).$promise;
                            }
                        ],
                        entitySchema: [
                            'IssueType',
                            function (Entity) {

                                return Entity.schema().$promise;
                            }
                        ],
                        entityReflector: [
                            'EntityReflectorFactory', 'entitySchema',
                            function (EntityReflectorFactory, entitySchema) {

                                return EntityReflectorFactory.create(entitySchema.schema);
                            }
                        ]
                    }
                });

            CrudModuleFactoryProvider.create({
                name: 'app.issueType',
                url: '/issue-type',
                model: {
                    name: 'IssueType',
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
                    debugger;
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