var exposeSchema = require('../../../../../server/helpers/SchemaExposer');

module.exports = function (Module) {
    exposeSchema(Module);

    Module.start = function (id, cb) {
        cb(null, 'ready');
    };
    Module.stop = function (id, cb) {
        cb(null, 'ready');
    };
    Module.status = function (id, cb) {
        cb(null, 'ready');
    };

    Module.remoteMethod('start', {
        accepts: [{
            arg: 'id',
            type: 'number',
            required: true
        }],
        http: {
            path: '/:id/start',
            verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
    });
    Module.remoteMethod('stop', {
        accepts: [{
            arg: 'id',
            type: 'number',
            required: true
        }],
        http: {
            path: '/:id/stop',
            verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
    });
    Module.remoteMethod('status', {
        accepts: [{
            arg: 'id',
            type: 'number',
            required: true
        }],
        http: {
            path: '/:id/status',
            verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
    });
};