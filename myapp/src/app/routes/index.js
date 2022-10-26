const routes = require('express').Router();
const get = require('../../views/get')
const home = require('../../views/handler')

routes.get('/', get);
routes.get('/home', home);

module.exports = routes;