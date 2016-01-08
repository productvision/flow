angular
    .module('skeleton.contacts', [])
    .provider('skeleton.contacts.Factory', [
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