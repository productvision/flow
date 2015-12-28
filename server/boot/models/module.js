module.exports = function (app) {
    var Module = app.models.Module;

    Module.create([
        {
            label: 'Kalender',
            templateUrl: 'module/grolba/calendar/view/index.html',
            controller: 'grolba.calendar.IndexController'
        },
        {
            label: 'Kontakte',
            templateUrl: 'module/grolba/contact/view/index.html',
            controller: 'grolba.contact.IndexController'
        },
        {
            label: 'Dashboard',
            templateUrl: 'module/grolba/dashboard/view/index.html',
            controller: 'grolba.dashboard.IndexController'
        },
        {
            label: 'Dateien',
            templateUrl: 'module/grolba/file/view/index.html',
            controller: 'grolba.file.IndexController'
        },
        {
            label: 'Nachrichten',
            templateUrl: 'module/grolba/mail/view/index.html',
            controller: 'grolba.messenger.IndexController'
        },
        {
            label: 'Musik',
            templateUrl: 'module/grolba/music/view/index.html',
            controller: 'grolba.music.IndexController'
        },
        {
            label: 'Notizen',
            templateUrl: 'module/grolba/note/view/index.html',
            controller: 'grolba.note.IndexController'
        },
        {
            label: 'Aufgaben',
            templateUrl: 'module/grolba/todo/view/index.html',
            controller: 'grolba.todo.IndexController'
        },
        {
            label: 'Website',
            templateUrl: 'module/grolba/todo/view/index.html',
            controller: 'grolba.todo.IndexController'
        },
        {
            label: 'Produkte',
            templateUrl: 'module/grolba/todo/view/index.html',
            controller: 'grolba.todo.IndexController'
        }
    ], function () {

    });
};