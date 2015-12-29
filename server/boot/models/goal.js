module.exports = function (app) {
    var Goal = app.models.Goal;
    var KeyResult = app.models.KeyResult;

    Goal.create({
        objective: 'Gewinn der Champions League 2015'
    }, function (err, goal) {
        if (!err) {
            KeyResult.create({
                title: '10 Verkäufe bis Ende Januar',
                goalId: goal.id,
                dueDate: new Date('2016-01-31'),
                measurements: [{
                    datetime: new Date('2015-12-12'),
                    value: 0
                }, {
                    datetime: new Date('2015-12-16'),
                    value: 1
                }, {
                    datetime: new Date(),
                    value: 2
                }],
                expectedValue: 10
            });
            KeyResult.create({
                title: '50 Teamverkäufe bis Ende Januar',
                goalId: goal.id,
                dueDate: new Date('2016-01-31'),
                measurements: [{
                    datetime: new Date('2015-12-12'),
                    value: 0
                }, {
                    datetime: new Date('2015-12-14'),
                    value: 5
                }, {
                    datetime: new Date('2015-12-16'),
                    value: 11
                }, {
                    datetime: new Date(),
                    value: 19
                }],
                expectedValue: 50
            });
        }
    });
};