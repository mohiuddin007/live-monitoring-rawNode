// Title: Route
// Description: Application Routes
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//dependencies
const {sampleHandler} = require('./handler/routeHandlers/sampleHander');
const {userHandler} = require('./handler/routeHandlers/userHandler');
const {tokenHandler} = require('./handler/routeHandlers/tokenHandler');


//scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};


module.exports = routes;