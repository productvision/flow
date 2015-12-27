angular
    .module('core.config')
    .factory('SpaceConfig', [
        function () {
            return window.config.spaces;
        }
    ])
    .factory('SpaceManager', [
        '$localStorage', 'SpaceConfig',
        function ($localStorage, config) {
            function Space(id, config) {
                this.id = id;
                this.config = config;

                this.getConfig = function () {
                    return this.config;
                };

                this.getId = function () {
                    return this.id;
                };
            }

            function SpaceConfig(config) {
                this.config = config;
                this.current = null;

                this.load = function (spaceId) {
                    if (!this.config.hasOwnProperty(spaceId)) {
                        throw new Error('There is no config with id ' + spaceId);
                    }

                    this.current = new Space(spaceId, this.config[spaceId]);

                    return this.getCurrent();
                };
                this.getCurrent = function () {
                    if (null === this.current) {
                        this.load(window.config.currentSpace);
                    }
                    return this.current;
                };

                this.getConfig = function () {
                    return this.config;
                };
                this.getMenu = function () {
                    debugger;
                };
                this.getModules = function () {
                    debugger;
                };
            }


            return new SpaceConfig(config);
        }
    ]);