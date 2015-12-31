module.exports = function (app) {
    require('./models/module')(app);
    require('./models/message')(app);
    require('./models/event')(app);
    require('./models/goal')(app);
    require('./models/user')(app);
    require('./models/issue')(app);
};
