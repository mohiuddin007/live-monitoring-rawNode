// Title: sample handler
// Description: 
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
   console.log(requestProperties);
   
    callback(200, {
        message: "This is a sample url",
    });
}

module.exports = handler;