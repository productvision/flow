var dashboard = {
    label: 'Dashboard',
    iconClass: 'glyphicon glyphicon-stats icon text-primary-dker',
    sref: 'app.dashboard',
    children: [{
        label: 'Dashboard',
        sref: 'app.dashboard'
    }]
};

var navigation = [
    dashboard,
    {
        label: 'Calendar',
        translation: 'aside.nav.CALENDAR',
        iconClass: 'glyphicon glyphicon-calendar icon text-primary-dker',
        sref: 'app.calendar',
        children: [{
            label: 'Calendar',
            sref: 'app.calendar'
        }]
    },
    {
        label: 'Email',
        translation: 'aside.nav.EMAIL',
        iconClass: 'glyphicon glyphicon-envelope icon text-info-lter',
        sref: 'app.mail.list',
        badge: 9,
        children: [{
            label: 'Email',
            sref: 'app.mail.list'
        }]
    }
];

var customers = {
    tecis: {
        name: "Tecis",
        version: "2.1.0",
        color: {
            primary: "#7266ba",
            info: "#23b7e5",
            success: "#27c24c",
            warning: "#fad733",
            danger: "#f05050",
            light: "#e8eff0",
            dark: "#3a3f51",
            black: "#1c2b36"
        },
        settings: {
            themeID: 1,
            navbarHeaderColor: "bg-black",
            navbarCollapseColor: "bg-white-only",
            asideColor: "bg-black",
            headerFixed: true,
            asideFixed: false,
            asideFolded: false,
            asideDock: false,
            container: false
        },
        navigation: navigation
    },
    neptun: {
        name: "Neptun Markt",
        navigation: [dashboard]
    },
    gymify: {
        name: "Gymfiy",
        navigation: [dashboard]
    },
    gew: {
        name: "Gew",
        navigation: navigation
    }
};