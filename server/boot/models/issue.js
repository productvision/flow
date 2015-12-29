module.exports = function (app) {
    var Issue = app.models.Issue;

    Issue.create({}, function (err, issue) {
    });
};