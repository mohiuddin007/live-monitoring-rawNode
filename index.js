// Title: Updtime Monitoring Application
// Description: A RESTFul API to monitor up or down time of user defined links
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

//Dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");
const {handleReqRes} = require("./helpers/handleReqRes");

//app object = module scaffolding
const app = {};

//configuration
app.config = {
  port: 5000,
};

//handle request response
app.handleReqRes = handleReqRes;

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};


//start the server
app.createServer();

// //dependencies.
// const http = require('http');
// const url = require('url');
// const { StringDecoder} = require("string_decoder");


// //app object- module scaffolding
// const app = {};

// // configuration object
// app.config = {
//   port: 5000,
// }

// //handle Requests response
// app.handleReqRes = (req, res) => {
//    //request handling
//    //get the url and parse it
//    const parsedUrl = url.parse(req.url, true); //true means consider the query string 
//    const path = parsedUrl.path;
//    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
//    const method = req.method.toLowerCase(); //req.method is used for what kind of request coming form client site
//    const queryStringObject = parsedUrl.query;
//    const headersObject = req.headers;
  
//    const decoder = new StringDecoder('utf-8');
//    let realData = "";

//    req.on('data', (buffer) =>{
//          realData += decoder.write(buffer);
//    })

//    req.on('end', () =>{
//      realData += decoder.end();
//      console.log(realData);
//      //response handling
//     res.end('Hi i am running.')
//    })
  
// }

// //create server
// app.createServer = () => {
//   const server = http.createServer(app.handleReqRes);
//   server.listen(app.config.port, () => {
//     console.log(`listening on port ${app.config.port}`);
//   });
// };



// app.createServer();