module.exports = function (app) {
    var Message = app.models.Message;

    Message.create([
        {
            "subject": "Angular is Awesome",
            "from": "james@gmail.com",
            "to": [
                {
                    "name": "Mogen",
                    "email": "mogen.abc@hotmail.com"
                }
            ],
            "avatar": "module/grolba/music/public/img/a10.jpg",
            "content": "Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
            "attach": [
                {
                    "name": "c1.jpg",
                    "url": "module/grolba/music/public/img/c1.jpg"
                },
                {
                    "name": "c3.jpg",
                    "url": "module/grolba/music/public/img/c3.jpg"
                }
            ],
            "date": "12:20 7/23/2014",
            "label": ["angular"],
            "folder": ["important"]
        },
        {
            "subject": "Nesting view in Angular",
            "from": "jessica@gmail.com",
            "avatar": "module/grolba/music/public/img/a1.jpg",
            "to": [
                {
                    "name": "Mogen",
                    "email": "mogen.abc@hotmail.com"
                }
            ],
            "content": "Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
            "attach": [
                {
                    "name": "c0.jpg",
                    "url": "module/grolba/music/public/img/c0.jpg"
                }
            ],
            "date": "16:20 7/22/2014",
            "label": ["angular"],
            "folder": ["important"]
        }
    ], function () {
    });

};