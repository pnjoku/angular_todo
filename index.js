'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = 8586;
const todos = [];

// start the api
app.listen(port, x => {

  console.log("todoApp Started");
});

app.use(express.static(path.join(__dirname, 'templates')));

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('./templates/index.html'));
