// Title: Route
// Description: Application Routes
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//dependencies
const {sampleHandler} = require('./handler/routeHandlers/sampleHander')
const routes = {
    sample: sampleHandler,
};

module.exports = routes;