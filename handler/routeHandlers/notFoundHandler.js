// Title: not found handler
// Description: 
// Author: Mohiuddin Mazumder
// Date: 19/06/2021

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {

    callback(404, { 
        message: 'Your requested url was not found.'
    });
}

module.exports = handler;