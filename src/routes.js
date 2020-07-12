const express = require('express');
const routes = express.Router();
const { index, store, show, update, destroy } = require('./controllers/ProductController');

routes.get('/products', index);
routes.get('/products/:id', show);
routes.post('/products', store);
routes.put('/products/:id', update);
routes.delete('/products/:id', destroy);

module.exports = routes;