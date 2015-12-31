module.exports = function (Module) {
    Module.schema = function (cb) {
        cb(null, {
            name: Module.definition.name,
            properties: Module.definition.rawProperties,
            settings: Module.definition.settings,
            relations: Module.definition.relations
        });
    };
    Module.remoteMethod(
        'schema',
        {
            http: {
                path: '/schema',
                verb: 'get'
            },
            returns: {
                arg: 'schema',
                type: 'string'
            }
        }
    );
};