'use strict';

angular
    .module('core.menu')
    .provider('Menu', [
        function () {
            var menu = {};

            this.add = function (type, menuItem, position) {
                if (!menu.hasOwnProperty(type)) {
                    menu[type] = [];
                }
                if (!menuItem.hasOwnProperty('position')) {
                    if (!position) {
                        position = 100;
                    }
                    menuItem.position = position;
                }

                menu[type].push(menuItem);
                menu[type].sort(function (a, b) {
                    return a.position > b.position;
                });
            };

            this.$get = function () {
                return {
                    getItems: function (type) {
                        if (!type) {
                            type = 'navigation';
                        }

                        if (!menu.hasOwnProperty(type)) {
                            return [];
                        }
                        return menu[type];
                    }
                };
            };
        }
    ]);
