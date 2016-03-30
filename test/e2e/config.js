exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['app/app.spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};