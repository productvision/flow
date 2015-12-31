const faker = require('faker');

module.exports = function (app) {
    var Issue = app.models.Issue;

    var properties = Issue.definition.rawProperties;
    var propertyKeys = Object.keys(properties).filter(function (propertyKey) {
        return ['id'].indexOf(propertyKey) === -1;
    });

    function guessValue(propertyType) {
        switch (propertyType) {
            case 'string':
                return faker.lorem.sentence();
            case 'number':
                return faker.random.number();
            case 'boolean':
                return faker.random.boolean();
            case 'object':
                return faker.random.objectElement();
            case 'array':
                return faker.random.arrayElement();
            case 'date':
                return faker.date.future();
            case 'buffer':
                return '';
            case 'geopoint':
                return '';
        }
    }
    function createIssue() {
        var issue = {};
        for (var index in propertyKeys) {
            if (propertyKeys.hasOwnProperty(index)) {
                var propertyKey = propertyKeys[index];
                var property = properties[propertyKey];
                issue[propertyKey] = guessValue(property.type);
            }
        }
        return issue;
    }

    var issues = [];
    for (var i = 0; i < 50; i++) {
        issues.push(createIssue());
    }

    Issue.create(issues);
};