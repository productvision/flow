angular
    .module('grolba.issue', [
        'skeleton.crud'
    ])
    .config([
        'CrudModuleFactoryProvider',
        function (CrudModuleFactoryProvider) {
            CrudModuleFactoryProvider.create({
                id: 'issue',
                url: '/issue',
                model: {
                    type: 'loopback',
                    name: 'Issue'
                }
            });
        }
    ])
    .run([
        '$rootScope', '$uibModal',
        function ($rootScope, $uibModal) {
            $rootScope.openCreateDialog = function () {
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl: 'module/grolba/issue/view/modals/create.html',
                    controller: 'grolba.issue.CreateController'
                });
                modal.result.then(function (item) {

                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };
        }
    ]);