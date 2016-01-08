angular
    .module('skeleton.dashboard', [])
    .provider('skeleton.dashboard.Factory', [
        '$stateProvider',
        function ($stateProvider) {
            this.create = function (config) {};

            this.$get = [
                function () {
                    return this;
                }
            ];
        }
    ]);