'use strict';

angular
    .module('core.config')
    .provider('Config', [
        function () {
            function Config(config) {
                this.config = config;
            }

            Config.prototype.getNavigation = function () {
                return this.config.navigation;
            };
            Config.prototype.all = function () {
                return this.config;
            };
            Config.prototype.has = function (propertyName) {
                return this.config.hasOwnProperty(propertyName);
            };
            Config.prototype.get = function (propertyName) {
                if (this.has(propertyName)) {
                    return this.config[propertyName];
                }
            };

            var currentConfig = {};

            var dashboard = {
                label: 'Dashboard',
                iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                sref: 'app.dashboard',
                children: [{
                    label: 'Dashboard',
                    sref: 'app.dashboard'
                }]
            };

            var spaces = {
                dictionary: {
                    name: 'Wörterbuch',
                    navigation: [
                        {
                            label: 'Startseite',
                            iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                            sref: 'app.dictionary'
                        }
                    ]
                }
            };
            var spaceId = null;

            this.loadConfig = function (id) {
                if (!spaces.hasOwnProperty(id)) {
                    throw new Error('There is no config with id ' + id);
                }
                currentConfig = new Config(spaces[id]);
                spaceId = id;

                return currentConfig;
            };

            this.$get = function () {
                currentConfig.getSpaces = function () {
                    return spaces;
                };
                currentConfig.getSpaceId = function () {
                    return spaceId;
                };

                return currentConfig;
            };
        }
    ]);
