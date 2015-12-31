angular
    .module('app')
    .provider('ModuleFactory', [
        '$stateProvider',
        function ($stateProvider) {
            this.module = function (config) {
                
            };

            this.$get = [
                function () {
                    return {};
                }
            ];
        }
    ]);