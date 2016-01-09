module.exports = function (app, config) {
    var Space = app.models.Space;

    Space.create({
        slug: 'team',
        name: 'Team',
        menu: [
            {
                label: 'Ziele',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.goal.list'
                    },
                    {
                        label: 'Tabelle',
                        sref: "app.goal.list.grid"
                    },
                    {
                        label: 'Widgets',
                        sref: "app.goal.list.widget"
                    },
                    {
                        label: 'Diagramme',
                        sref: "app.goal.list.chart"
                    },
                    {
                        label: 'Kalender',
                        sref: "app.goal.list"
                    },
                    {
                        label: 'Debug',
                        sref: "app.goal.list.debug"
                    },
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Vorgang erstellen',
                        sref: 'app.goal.create'
                    }
                ]
            },
            {
                label: 'Vorgänge',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.issue.list'
                    },
                    {
                        label: 'Chart',
                        sref: 'app.issue.list.chart'
                    },
                    {
                        label: 'Grid',
                        sref: 'app.issue.list.grid'
                    },
                    {
                        label: 'Widgets',
                        sref: 'app.issue.list.widget'
                    },
                    {
                        label: 'Chart',
                        sref: 'app.issue.list.chart'
                    },
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Vorgang erstellen',
                        sref: 'app.issue.create'
                    }
                ]
            },
            {
                label: 'Personen',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.contact'
                    },
                    {
                        label: 'Kundenkontakte',
                        sref: 'app.contact'
                    },
                    {
                        label: 'Kunden',
                        sref: 'app.contact'
                    },
                    {
                        label: 'Partner',
                        sref: 'app.contact'
                    }
                ]
            },
            {
                label: 'Netzwerk',
                sref: 'app.network'
            },
            {
                label: 'Wörterbuch',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.dictionary.list'
                    },
                    {
                        label: 'Suche',
                        sref: 'app.dictionary.search'
                    },
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Neuen Eintrag erstellen',
                        sref: 'app.dictionary.create'
                    }
                ]
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space, 'Team Tecis');
    });

    return;

    Space.create({
        slug: 'food',
        name: 'Essen',
        menu: [
            {
                label: 'Startseite',
                sref: 'app.dashboard'
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space);
    });

    Space.create({
        slug: 'autoberater',
        name: 'Autoberater',
        menu: [
            {
                label: 'Startseite',
                sref: 'app.dashboard'
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space);
    });


    Space.create({
        slug: 'gamingcoach',
        name: 'Gaming Coach',
        menu: [
            {
                label: 'Startseite',
                sref: 'app.dashboard'
            }
        ],
        models: [
            {
                "name": "Coach",
                "plural": "coaches",
                "base": "PersistedModel",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string",
                        "required": true
                    },
                    "age": {
                        "type": "string"
                    },
                    "experience": {
                        "type": "string"
                    },
                    "imageUrl": {
                        "type": "string"
                    }
                },
                "validations": [],
                "relations": {},
                "acls": [
                    {
                        "permission": "ALLOW",
                        "principalType": "ROLE",
                        "principalId": "$everyone",
                        "property": "myMethod"
                    }
                ],
                "methods": []
            },
            {
                "name": "Coaching",
                "plural": "coachings",
                "base": "PersistedModel",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string",
                        "required": true
                    },
                    "price": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "preferredTime": {
                        "type": "string"
                    }
                },
                "validations": [],
                "relations": {
                    "coach": {
                        "type": "hasOne",
                        "model": "Coach",
                        "foreignKey": "coachingId"
                    },
                    "location": {
                        "type": "hasOne",
                        "model": "Location",
                        "foreignKey": "coachingId"
                    },
                    "games": {
                        "type": "hasMany",
                        "model": "Game",
                        "foreignKey": "coachId"
                    }
                },
                "acls": [
                    {
                        "permission": "ALLOW",
                        "principalType": "ROLE",
                        "principalId": "$everyone",
                        "property": "myMethod"
                    }
                ],
                "methods": []
            },
            {
                "name": "Location",
                "plural": "locations",
                "base": "PersistedModel",
                "properties": {
                    "id": {
                        "type": "string"
                    }
                },
                "validations": [],
                "relations": {},
                "acls": [],
                "methods": []
            },
            {
                "name": "Rating",
                "plural": "ratings",
                "base": "PersistedModel",
                "properties": {
                    "id": {
                        "type": "string"
                    }
                },
                "validations": [],
                "relations": {},
                "acls": [],
                "methods": []
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space);
    });

    Space.create({
        slug: 'gymify',
        name: 'Gymify',
        menu: [
            {
                label: 'Startseite',
                sref: 'app.dashboard'
            },
            {
                label: 'Browse',
                sref: 'app.dashboard'
            },
            {
                label: 'Training',
                sref: 'app.dashboard'
            },
            {
                label: 'Ernährung',
                sref: 'app.dashboard'
            },
            {
                label: 'Videos',
                sref: 'app.dashboard'
            },
            {
                label: 'Gurus',
                sref: 'app.dashboard'
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space);
    });

    Space.create({
        slug: 'products',
        name: 'Produkte',
        menu: [
            {
                label: 'Startseite',
                sref: 'app.dashboard'
            },
            {
                label: 'Shop',
                sref: 'app.dashboard',
                children: [
                    {
                        label: 'Bestellungen',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Rechnungen',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Kunden',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Produkte',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Kollektionen',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Geschenkkarten',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Rabatte',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Berichte',
                        sref: 'app.chart'
                    }
                ]
            },
            {
                label: 'Website',
                sref: 'app.dashboard',
                children: [
                    {
                        label: 'Blog',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Seiten',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Navigation',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Themes',
                        sref: 'app.dashboard'
                    }
                ]
            },
            {
                label: 'Config',
                sref: 'app.dashboard',
                children: [
                    {
                        label: 'Apps',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Settings',
                        sref: 'app.dashboard'
                    }
                ]
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space);
    });

};