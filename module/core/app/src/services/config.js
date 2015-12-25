'use strict';

angular
    .module('app')
    .provider('Config', [
        function () {
            var currentConfig = {};

            var configs = {
                tecis: {
                    name: 'Tecis',
                    version: '2.1.0',
                    color: {
                        primary: '#7266ba',
                        info: '#23b7e5',
                        success: '#27c24c',
                        warning: '#fad733',
                        danger: '#f05050',
                        light: '#e8eff0',
                        dark: '#3a3f51',
                        black: '#1c2b36'
                    },
                    settings: {
                        themeID: 1,
                        navbarHeaderColor: 'bg-black',
                        navbarCollapseColor: 'bg-white-only',
                        asideColor: 'bg-black',
                        headerFixed: true,
                        asideFixed: false,
                        asideFolded: false,
                        asideDock: false,
                        container: false
                    },
                    navigation: [
                        {
                            label: 'Dashboard',
                            iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
                            children: [{
                                sref: 'app.dashboard-v1',
                                label: 'Dashboard v1'
                            }, {
                                sref: 'app.dashboard-v2',
                                label: 'Dashboard v2'
                            }]
                        },
                        {
                            label: 'Calendar',
                            translation: 'aside.nav.CALENDAR',
                            iconClass: 'glyphicon glyphicon-calendar icon text-primary-dker',
                            sref: 'app.calendar'
                        },
                        {
                            label: 'Email',
                            translation: 'aside.nav.EMAIL',
                            iconClass: 'glyphicon glyphicon-envelope icon text-info-lter',
                            sref: 'app.mail.list',
                            badge: 9
                        }
                    ]
                },
                gew: {
                    name: 'Gew'
                }
            };

            this.setId = function (id) {
                if (!configs.hasOwnProperty(id)) {
                    throw new Error('There is no config with id ' + id);
                }
                currentConfig = configs[id];

                return currentConfig;
            };

            this.$get = function () {
                return {
                    all: function () {
                        return currentConfig;
                    },
                    get: function (key) {
                        if (currentConfig.hasOwnProperty(key)) {
                            return currentConfig[key];
                        }
                    }
                };
            };
        }
    ]);
