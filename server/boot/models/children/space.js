module.exports = function (app, config) {
    var Module = app.models.Module;
    var Space = app.models.Space;
    var SpaceModule = app.models.SpaceModule;

    Space.create({
        slug: 'tfrt',
        name: 'TF RT',
        menu: [
            {
                label: 'Ziele und Lösungen',
                children: [
                    {
                        label: 'Meine Ziele & Lösungen',
                        sref: 'app.goal.list'
                    },
                    {
                        label: 'Ziele ermitteln',
                        sref: 'app.goal.create'
                    },
                    {
                        label: 'Lösungen finden',
                        sref: 'app.solutions.list'
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'headline',
                        label: 'Nächste Ziele'
                    },
                    {
                        label: 'Ziel #1',
                        sref: 'app.goal.show({"id": 1})'
                    },
                    {
                        label: 'Ziel #2',
                        sref: 'app.goal.show({"id": 2})'
                    },
                    {
                        label: 'Ziel #3',
                        sref: 'app.goal.show({"id": 3})'
                    },
                    {
                        label: 'Alle Ziele',
                        sref: 'app.goal.list'
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
                        type: 'divider'
                    },
                    {
                        label: 'Vorgang erstellen',
                        sref: 'app.issue.create'
                    },
                    {
                        type: 'divider'
                    },
                    {
                        type: 'headline',
                        label: 'Kürzlich bearbeitet'
                    },
                    {
                        label: 'Vorgang #1',
                        sref: 'app.issue.show({"id": 1})'
                    },
                    {
                        label: 'Vorgang #2',
                        sref: 'app.issue.show({"id": 2})'
                    },
                    {
                        label: 'Vorgang #3',
                        sref: 'app.issue.show({"id": 3})'
                    },
                    {
                        label: 'Alle Vorgänge',
                        sref: 'app.issue.list'
                    }
                ]
            },
            {
                label: 'Bereiche',
                children: [
                    {
                        label: 'Meine Bereiche',
                        sref: 'community.customer'
                    },
                    {
                        type: 'divider'
                    },
                    {
                        label: 'Existenzgründer',
                        sref: 'community.customer'
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
                        label: 'Existenzgründer',
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
            }
        ]
    }, function (err, space) {
        require('./space-config')(app, config, space, 'Team Tecis');

        Module.create([
                {
                    "name": 'app.solution',
                    "url": '/solutions',
                    "model": {
                        "name": 'Solution',
                        "type": 'loopback'
                    },
                    "type": "skeleton.crud.CrudModuleFactoryProvider"
                }
            ],
            function (err, module) {
                SpaceModule.create({
                    "name": "string",
                    "label": "string",
                    "slug": "string",
                    "moduleId": module.id,
                    "spaceId": space.id
                });
            }
        );
    });
};