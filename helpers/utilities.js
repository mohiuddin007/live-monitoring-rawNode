// title: Utilities
// description: important utility function
// author: mohiuddin Mazumder
// date: 1/7/21

//dependencies
const crypto = require("crypto");
const environments = require("./environment");

//module scaffolding
const utilities = {};

//parse json string to object
utilities.parseJSON = (jsonString) => {
  let output = {};

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
  return output;
};

//hashing string
utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    let hash = crypto
      .createHmac("sha256", environments.secretKey)
      .update(str)
      .digest("hex");
    return hash;
  }
  return false;
};

//create random string
utilities.createRandomString = (strLength) => {
  let length = strLength;
  length = typeof strLength === "number" && strLength > 0 ? strLength : false;

  if (length) {
    let possibleCharacters = "abcdefghijklmnopqrstuvwxyz1234567890";
    let output = "";
    for (let i = 1; i <= length; i += 1) {
      let randomCharacter = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );
      output += randomCharacter;
    }
    return output;
  } else {
    return false;
  }
};

//export module
module.exports = utilities;
