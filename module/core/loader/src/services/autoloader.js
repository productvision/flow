'use strict';


angular
    .module('core.loader')
    .provider('Autoloader', [
        function () {
            this.$get = function () {
                return {};
            };
        }
    ]);
