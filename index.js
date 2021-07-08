// Title: Project Initial file 
// Description: A RESTFul API to monitor up or down time of user defined links
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//Dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

//app object = module scaffolding
const app = {};

app.init = () => {
  // start the server
  server.init();
  // start the worker
  workers.init();
}

app.init();

module.exports = app;