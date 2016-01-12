module.exports = function (app, config) {
    var Space = app.models.Space;

    Space.create({
        slug: 'riedexco',
        name: 'Riedexco',
        menu: [
            {
                label: 'Startseite',
                sref: 'app.dashboard'
            },
            {
                label: 'Kunden',
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
                label: 'Mein Kundenportal',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.portal.list'
                    },
                    {
                        label: 'Bearbeiten',
                        sref: 'app.portal.edit({"id": "1"})'
                    }
                ]
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space, 'Riedexco');
    });
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
            },
            {
                label: 'Webseite',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.website.list'
                    },
                    //{
                    //    label: 'Suche',
                    //    sref: 'app.website.search'
                    //},
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Neue Seite erstellen',
                        sref: 'app.website.create'
                    }
                ]
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space, 'Team Tecis');
    });

};