angular
    .module('core.config')
    .factory('SpaceConfig', [
        function () {
            return {
                dictionary: {
                    name: 'Wörterbuch',
                    menu: [
                        {
                            label: 'Startseite',
                            iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                            sref: 'app.dictionary'
                        }
                    ]
                },
                corporateManual: {
                    name: 'Corporate Manual',
                    menu: [
                        {
                            label: 'Startseite',
                            iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                            sref: 'app.dashboard'
                        },
                        {
                            label: 'Wording',
                            iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                            sref: 'app.dictionary'
                        },
                        {
                            label: 'Formeln',
                            iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                            sref: 'app.dictionary'
                        }
                    ]
                }
            };
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
                        this.load('dictionary');
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