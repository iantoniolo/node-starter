const routes = require('express').Router();
const get = require('../../views/get')

routes.get('/', get);

module.exports = routes;