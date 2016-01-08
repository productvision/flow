angular
    .module('skeleton.thesaurus', [])
    .provider('skeleton.thesaurus.Factory', [
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