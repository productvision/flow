angular
    .module('skeleton.calendar', [])
    .provider('skeleton.calendar.Factory', [
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