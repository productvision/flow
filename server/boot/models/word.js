module.exports = function (app) {
    var Word = app.models.Word;

    Word.create([
        {
            name: 'Meetups organisieren'
        },
        {
            name: 'Checkout 2.0'
        },
        {
            name: 'Vision Board'
        },
        {
            name: 'Entscheidungen'
        },
        {
            name: 'Tracking & Improve'
        }
    ]);

};