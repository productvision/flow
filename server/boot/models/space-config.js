module.exports = function (app, config, space) {
    var SpaceConfig = app.models.SpaceConfig;

    SpaceConfig.create({
        "configId": config.id,
        "spaceId": space.id
    }, function (err, spaceConfig) {

    });
};