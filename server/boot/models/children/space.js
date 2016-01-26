module.exports = function (app, config) {
    var Space = app.models.Space;

    Space.create({
        slug: 'tfrt',
        name: 'TF RT',
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
                    },
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Netzwerke',
                        sref: 'app.network'
                    }
                ]
            },
            {
                label: 'Bereiche',
                children: [
                    {
                        label: 'Übersicht',
                        sref: 'app.portal.list'
                    },
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Privater Bereich',
                        sref: 'app.portal.edit({"id": "1"})'
                    },
                    {
                        label: 'Team Bereich',
                        sref: 'app.portal.edit({"id": "1"})'
                    },
                    {
                        label: 'Öffentlicher Bereich',
                        sref: 'app.portal.edit({"id": "1"})'
                    }
                ]
            },
            {
                label: 'Lösungen',
                sref: 'app.dashboard',
                children: [
                    {
                        label: 'Produkte',
                        sref: 'app.dashboard'
                    },
                    {
                        label: 'Dienstleistungen',
                        sref: 'app.dashboard'
                    }
                ]
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space, 'Team Tecis');
    });

    //Space.create({
    //    slug: 'riedexco',
    //    name: 'Riedexco',
    //    menu: [
    //        {
    //            label: 'Startseite',
    //            sref: 'app.dashboard'
    //        },
    //        {
    //            label: 'Kunden',
    //            children: [
    //                {
    //                    label: 'Übersicht',
    //                    sref: 'app.contact'
    //                },
    //                {
    //                    label: 'Kundenkontakte',
    //                    sref: 'app.contact'
    //                },
    //                {
    //                    label: 'Kunden',
    //                    sref: 'app.contact'
    //                },
    //                {
    //                    label: 'Partner',
    //                    sref: 'app.contact'
    //                }
    //            ]
    //        },
    //        {
    //            label: 'Mein Kundenportal',
    //            children: [
    //                {
    //                    label: 'Übersicht',
    //                    sref: 'app.portal.list'
    //                },
    //                {
    //                    label: 'Bearbeiten',
    //                    sref: 'app.portal.edit({"id": "1"})'
    //                }
    //            ]
    //        }
    //    ]
    //}, function (err, space) {
    //    require('./space-config')(app, config, space, 'Riedexco');
    //});

};