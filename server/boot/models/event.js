module.exports = function (app) {
    var Event = app.models.Event;


    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    Event.create([
        {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            className: 'b-l b-2x b-info',
            location: 'New York',
            info: 'This a all day event that will start from 9:00 am to 9:00 pm, have fun!'
        },
        {
            title: 'Dance class',
            start: new Date(y, m, 3),
            end: new Date(y, m, 4, 9, 30),
            allDay: false,
            className: 'b-l b-2x b-danger',
            location: 'London',
            info: 'Two days dance training class.'
        },
        {
            title: 'Game racing',
            start: new Date(y, m, 6, 16, 0),
            className: 'b-l b-2x b-info',
            location: 'Hongkong',
            info: 'The most big racing of this year.'
        },
        {
            title: 'Soccer',
            start: new Date(y, m, 8, 15, 0),
            className: 'b-l b-2x b-info',
            location: 'Rio',
            info: 'Do not forget to watch.'
        },
        {
            title: 'Family',
            start: new Date(y, m, 9, 19, 30),
            end: new Date(y, m, 9, 20, 30),
            className: 'b-l b-2x b-success',
            info: 'Family party'
        },
        {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            className: 'bg-success bg',
            location: 'HD City',
            info: 'It is a long long event'
        },
        {
            title: 'Play game',
            start: new Date(y, m, d - 1, 16, 0),
            className: 'b-l b-2x b-info',
            location: 'Tokyo',
            info: 'Tokyo Game Racing'
        },
        {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: 'b-l b-2x b-primary',
            location: 'New York',
            info: 'Party all day'
        },
        {
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            alDay: false,
            className: 'b-l b-2x b-warning',
            location: 'Home Town',
            info: 'Repeat every day'
        },
        {
            title: 'Click for Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http://google.com/',
            className: 'b-l b-2x b-primary'
        }
    ], function (err) {
        if (err) {
            console.log(err);
        }
    });
};