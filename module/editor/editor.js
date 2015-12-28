function Editor() {
    this.sources = {};
    this.controllers = {};
    this.models = {};
    this.views = {};
}

Editor.prototype.registerSource = function (name, config) {
    this.sources[name] = config;
};

Editor.prototype.registerController = function (name, config) {
    this.controllers[name] = config;
};

Editor.prototype.registerModel = function (name, config) {
    this.models[name] = config;
};

Editor.prototype.registerView = function (name, config) {
    this.views[name] = config;
};

Editor.prototype.getSources = function () {
    return this.sources;
};

Editor.prototype.getControllers = function () {
    return this.controllers;
};

Editor.prototype.getModels = function () {
    return this.models;
};

Editor.prototype.getViews = function () {
    return this.views;
};


window.editor = new Editor();