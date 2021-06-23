// Title: Updtime Monitoring Application
// Description: A RESTFul API to monitor up or down time of user defined links
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

// //Dependencies
// const http = require("http");
// const url = require("url");
// const { StringDecoder } = require("string_decoder");
// const {handleReqRes} = require("./helpers/handleReqRes");

// //app object = module scaffolding
// const app = {};

// //configuration
// app.config = {
//   port: 5000,
// };

// //handle request response
// app.handleReqRes = handleReqRes;

// //create server
// app.createServer = () => {
//   const server = http.createServer(app.handleReqRes);
//   server.listen(app.config.port, () => {
//     console.log(`listening to port ${app.config.port}`);
//   });
// };


// //start the server
// app.createServer();

//dependencies.
const http = require('http');

//app object- module scaffolding
const app = {};

// configuration object
app.config = {
  port: 5000,
}

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening on port ${app.config.port}`);
  });
};

//handle Requests response
app.handleReqRes = (req, res) => {
  res.end('Hi i am running.')
}

app.createServer();