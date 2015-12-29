angular
    .module('sandbox.songhub')
    .config([
        'ModuleProvider', 'SoftwareProvider',
        function (ModuleProvider, SoftwareProvider) {
            SoftwareProvider.addModuleSchema({
                name: {
                    type: "string"
                },
                entities: {
                    type: "object",
                    properties: {
                        team: {
                            type: "object",
                            properties: {
                                name: {
                                    "type": "string"
                                },
                                plural: {
                                    "type": "string"
                                },
                                properties: {
                                    "type": "object"
                                },
                                validations: {
                                    "type": "array"
                                },
                                relations: {
                                    "type": "object"
                                },
                                acls: {
                                    "type": "object"
                                },
                                methods: {
                                    "type": "object"
                                }
                            }
                        },
                        entity: {
                            type: "object",
                            properties: {
                                name: {
                                    "type": "string"
                                },
                                plural: {
                                    "type": "string"
                                },
                                properties: {
                                    "type": "object"
                                },
                                validations: {
                                    "type": "array"
                                },
                                relations: {
                                    "type": "object"
                                },
                                acls: {
                                    "type": "object"
                                },
                                methods: {
                                    "type": "object"
                                }
                            }
                        }
                    }
                }
            });
            ModuleProvider.registerModule({
                name: "Github",
                entities: {
                    team: {
                        name: "organisation",
                        plural: "organisations",
                        properties: {},
                        validations: [],
                        relations: {},
                        acls: [],
                        methods: []
                    },
                    entity: {
                        name: "repository",
                        plural: "repositories",
                        properties: {},
                        validations: [],
                        relations: {},
                        acls: [],
                        methods: []
                    }
                },
                states: {
                    index: {
                        view: "index",
                        controller: "IndexController"
                    },
                    show: {
                        view: "show",
                        controller: "ShowController"
                    }
                }
            });

            var songhub = SoftwareProvider.registerSoftware({
                "name": "songhub"
            });
            songhub.registerModule({
                name: "Songhub",
                url: "songhub",
                base: "Github",
                entities: {
                    team: {
                        name: "band",
                        plural: "bands"
                    },
                    entity: {
                        name: "song",
                        plural: "songs"
                    }
                }
            });

        }
    ]);