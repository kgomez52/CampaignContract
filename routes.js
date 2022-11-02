const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
// Adding a new route. ':' means wildcard and var is the var the wildard will be (address).
// Second arg is the name the of file we want to go to (show.js)
routes.add('/campaigns/:address', '/campaigns/show');

module.exports = routes;