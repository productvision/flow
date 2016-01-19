const loopback = require("loopback");
const boot = require("loopback-boot");
const explorer = require("loopback-component-explorer");
const app = loopback();
const bodyParser = require("body-parser");
const glob = require("glob");

app.use(bodyParser.urlencoded({
    extended: true
}));

var modelSources = [];
glob("./module/{core,grolba}/**/config/models", function (err, files) {
    modelSources = modelSources.concat(files);
});

var models = {
    "_meta": {
        "sources": modelSources
    }
};

var modelNames = [
    "User", "ACL", "Config", "Space", "SpaceConfig", "Module", "SpaceModule", "Message", "Event", "Goal",
    "KeyResult", "Issue", "Word", "Page", "Portal"
];
modelNames.forEach(function (modelName) {
    models[modelName] = {
        "dataSource": "memory",
        "public": true
    };
});

boot(app, {
    appRootDir: __dirname,
    models: models,
    dataSources: {
        "memory": {
            "name": "memory",
            "connector": "memory"
        }
    },
    env: "development",
    config: {
        "legacyExplorer": false,
        "cors": false
    }
});
explorer(app, {
    basePath: "/api",
    mountPath: "/explorer"
});
app.use(loopback.token());
app.use("/api", loopback.rest());
app.use("/explorer", explorer.routes(app, {
    basePath: "/api"
}));
app.listen(function () {
    console.log("Awesome Web server listening at: %s", app.get("url"));
});


module.exports = app;