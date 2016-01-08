angular
    .module('skeleton.files', [])
    .provider('skeleton.files.Factory', [
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