const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// GET all temples
routes.get('/', temples.findAll);

// GET a single temple by ID
routes.get('/:temple_id', temples.findOne);

// POST - Create a new temple
routes.post('/', temples.create);

// PUT - Update an existing temple by ID
routes.put('/:id', temples.update);

// DELETE - Remove a temple by ID
routes.delete('/:id', temples.delete);

module.exports = routes;