/// <reference path="../typings/index.d.ts"/>

import * as http from "http";
import * as url from "url";
import * as express from "express";


var app = express();

// Configuration

app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
}

// Routes

app.get('/findImages', (req:any, res:any) => {
    console.log('images from' + req.query['url']);
    res.send(); 
});

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, env);
});

export var App = app;