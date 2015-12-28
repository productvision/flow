module.exports = function (app) {
    var User = app.models.User;
    var Config = app.models.Config;

    require('./models/module')(app);
    require('./models/message')(app);
    require('./models/event')(app);

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
