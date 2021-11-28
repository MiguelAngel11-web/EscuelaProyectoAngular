const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const middlewares = require('../middlewares/index').middleware;

const consultas = require('../db_apis');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a nuestro servidor para usar las rutas coloca /consutlas en la URL  🦄🌈✨👋🌎🌍🌏✨🌈🦄'
    });
});

app.use('/consultas', consultas);

app.use(middlewares);

module.exports = app;