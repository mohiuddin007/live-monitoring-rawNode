// Title: Updtime Monitoring Application
// Description: A RESTFul API to monitor up or down time of user defined links
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//Dependencies
const http = require("http");
const {handleReqRes} = require("./helpers/handleReqRes");
const environment = require('./helpers/environment');

//app object = module scaffolding
const app = {};

//handle request response
app.handleReqRes = handleReqRes;

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port}`);
  });
};


//start the server
app.createServer();