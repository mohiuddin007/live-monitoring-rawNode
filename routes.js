// Title: Route
// Description: Application Routes
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//dependencies
const {sampleHandler} = require('./handler/routeHandlers/sampleHander');
const {userHandler} = require('./handler/routeHandlers/userHandler');
const {tokenHandler} = require('./handler/routeHandlers/tokenHandler');
const {checkHandler} = require('./handler/routeHandlers/checkHandler');


//scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
};


module.exports = routes;