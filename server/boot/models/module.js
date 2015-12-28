module.exports = function (app) {
    var Module = app.models.Module;
    var SpaceModule = app.models.SpaceModule;

    Module.create({
        label: 'Kalender',
        view: 'module/grolba/calendar/view/index.html',
        controller: 'grolba.calendar.IndexController',
        model: 'Event',
        config: [
            {
                key: 'label',
                type: 'input',
                templateOptions: {
                    label: 'Bezeichnung'
                }
            },
            {
                key: 'slug',
                type: 'input',
                templateOptions: {
                    label: 'Url'
                }
            },
            {
                key: 'height',
                type: 'input',
                defaultValue: '450',
                templateOptions: {
                    label: 'Höhe vom Kalender in pixel'
                }
            },
            {
                key: 'editable',
                type: 'checkbox',
                defaultValue: true,
                templateOptions: {
                    label: 'Kalender editierbar'
                }
            },
            {
                key: 'header',
                type: 'textarea',
                defaultValue: JSON.stringify({
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                }),
                templateOptions: {
                    label: 'Kopfbereich'
                }
            }
        ]
    }, function (err, module) {
        SpaceModule.create({
            moduleId: module.id,
            name: 'module.meinetermine',
            label: 'Meine Termine',
            slug: 'meinetermine'
        });
    });

    //Module.create([
    //    {
    //        label: 'Kontakte',
    //        templateUrl: 'module/grolba/contact/view/index.html',
    //        controller: 'grolba.contact.IndexController'
    //    },
    //    {
    //        label: 'Dashboard',
    //        templateUrl: 'module/grolba/dashboard/view/index.html',
    //        controller: 'grolba.dashboard.IndexController'
    //    },
    //    {
    //        label: 'Dateien',
    //        templateUrl: 'module/grolba/file/view/index.html',
    //        controller: 'grolba.file.IndexController'
    //    },
    //    {
    //        label: 'Nachrichten',
    //        templateUrl: 'module/grolba/mail/view/index.html',
    //        controller: 'grolba.messenger.IndexController'
    //    },
    //    {
    //        label: 'Musik',
    //        templateUrl: 'module/grolba/music/view/index.html',
    //        controller: 'grolba.music.IndexController'
    //    },
    //    {
    //        label: 'Notizen',
    //        templateUrl: 'module/grolba/note/view/index.html',
    //        controller: 'grolba.note.IndexController'
    //    },
    //    {
    //        label: 'Aufgaben',
    //        templateUrl: 'module/grolba/todo/view/index.html',
    //        controller: 'grolba.todo.IndexController'
    //    },
    //    {
    //        label: 'Website',
    //        templateUrl: 'module/grolba/todo/view/index.html',
    //        controller: 'grolba.todo.IndexController'
    //    },
    //    {
    //        label: 'Produkte',
    //        templateUrl: 'module/grolba/todo/view/index.html',
    //        controller: 'grolba.todo.IndexController'
    //    }
    //], function () {
    //
    //});
};