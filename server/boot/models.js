module.exports = function (app) {
    var User = app.models.User;
    var Config = app.models.Config;
    var Module = app.models.Module;

    Module.create({
        label: 'Dashboard',
        templateUrl: 'module/grolba/dashboard/view/index.html',
        controller: 'module/grolba/dashboard/src/controllers/index.js'
    }, function () {

    });

    User.create({
        "email": "to@gew.io",
        "password": "123"
    }, function (err, user) {
        Config.create({
            "customerId": user.id
        }, function (err, config) {
            require('./models/space')(app, config);
        });
    });
};
