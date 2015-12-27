window.config = {
    currentSpace: 'team',
    spaces: {
        dictionary: {
            name: 'Wörterbuch',
            menu: [
                {
                    label: 'Startseite',
                    sref: 'app.dictionary'
                }
            ]
        },
        products: {
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
                            sref: 'app.dashboard'
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
        },
        team: {
            name: "Team",
            menu: [
                {
                    label: 'Startseite',
                    sref: 'app.dashboard'
                },
                {
                    label: 'Nachrichten',
                    sref: 'app.mail.list'
                },
                {
                    label: 'Kalender',
                    sref: 'app.calendar'
                },
                {
                    label: 'Notizen',
                    sref: 'app.note'
                },
                {
                    label: 'Kunden',
                    sref: 'app.contact'
                },
                {
                    label: 'Dateien',
                    sref: 'app.form.fileupload'
                },
                {
                    label: 'Kampagnen',
                    sref: 'app.todo'
                },
                {
                    label: 'Netwerke',
                    sref: 'app.dashboard'
                },
            ]
        },
        gymify: {
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
        }
    }
};