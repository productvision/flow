angular
    .module('skeleton.dashboard', [])
    .provider('skeleton.dashboard.DashboardModuleFactory', [
        '$stateProvider',
        function ($stateProvider) {
            this.create = function (config) {
                $stateProvider
                    .state(config.name, {
                        url: config.url,
                        templateUrl: 'module/skeleton/dashboard/view/index.html',
                        controller: 'skeleton.dashboard.IndexController'
                    });
            };

            this.$get = [
                function () {
                    return this;
                }
            ];
        }
    ]);