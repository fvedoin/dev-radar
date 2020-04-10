const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

// Query Params (GET): req.query (filters, sorting, pagination)
// Rout Params (PUT, DELETE): req.params (identify a feature in the change or removal)
// Body: req.body (data for creating or changing a record)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;