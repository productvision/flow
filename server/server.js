const loopback = require('loopback');
const boot = require('loopback-boot');
const app = loopback();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
boot(app, __dirname);

app.listen(function () {
    console.log('Web server listening at: %s', app.get('url'));
});


module.exports = app;