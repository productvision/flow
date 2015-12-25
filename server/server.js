const loopback = require('loopback');
const boot = require('loopback-boot');
const explorer = require('loopback-component-explorer');
const app = loopback();

boot(app, {
    appRootDir: __dirname,
    env: 'development'
});
explorer(app, {
    basePath: '/api',
    mountPath: '/explorer'
});

app.use('/api', loopback.rest());
app.use('/explorer', explorer.routes(app, {
    basePath: '/api'
}));

app.listen(function () {
    console.log('Web server listening at: %s', app.get('url'));
});