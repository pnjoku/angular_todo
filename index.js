'use strict';

const app = require('express')();
const bodyParser = require('body-parser');

const port = 8585;
const todos = [];

// start the api
app.listen(port, x => {

  console.log("todoApp Started");
});


app.use(bodyParser.json());

app.all('/', (req, res) => res.send("<h1>Welcome to my todoApp</h1>"));
