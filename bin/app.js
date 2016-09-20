"use strict";
var express = require("express");
var app = express();
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
}
app.get('/findImages', function (req, res) {
    console.log('getting images from' + req.query['url']);
    res.send('coucou');
});
app.listen(3000, function () {
    console.log("Demo Express server listening on port %d in %s mode", 3000, env);
});
exports.App = app;
//# sourceMappingURL=app.js.map