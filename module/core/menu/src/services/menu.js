'use strict';

angular
    .module('core.menu')
    .provider('Menu', [
        function () {
            var config = {
                menu: {}
            };

            this.setMenu = function setMenu(type, menu) {
                if (!config.menu.hasOwnProperty(type)) {
                    config.menu[type] = [];
                }
                config.menu[type] = menu;
            };
            this.addItem = function addItem(type, menuItem, position) {
                if (!config.menu.hasOwnProperty(type)) {
                    config.menu[type] = [];
                }
                if (!menuItem.hasOwnProperty('position')) {
                    if (!position) {
                        position = 100;
                    }
                    menuItem.position = position;
                }

                config.menu[type].push(menuItem);
                config.menu[type].sort(function (a, b) {
                    return a.position > b.position;
                });
            };

            this.$get = function () {
                return {
                    getItems: function (type) {
                        if (!type) {
                            type = 'navigation';
                        }

                        if (!config.menu.hasOwnProperty(type)) {
                            return [];
                        }
                        return config.menu[type];
                    }
                };
            };
        }
    ]);
