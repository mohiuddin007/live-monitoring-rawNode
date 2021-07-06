// Title: Updtime Monitoring Application
// Description: A RESTFul API to monitor up or down time of user defined links
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//Dependencies
const http = require("http");
const {handleReqRes} = require("./helpers/handleReqRes");
const environment = require('./helpers/environment');
const data = require('./lib/data');
const {sendTwilioSms} = require('./helpers/notifications');

//app object = module scaffolding
const app = {};

//Todo remove later
sendTwilioSms('01934373828', 'Hello world', (err)=>{
  console.log(`this is the error`, err)
})



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