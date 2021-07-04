// title: env variable
// description:
// author: mohiuddin Mazumder
// date: 25/6/21

//dependencies

//module scaffolding
const environments = {};

environments.staging = {
  port: 4000,
  envName: "staging",
  secretKey: "lsskjdfhemnkjhsd"
};

environments.production = {
  port: 5000,
  envName: "production",
  secretKey: "skwhebdnbfskfddsf"
};

//determine which environment was passed
const currentEnvironment =
  typeof(process.env.NODE_ENV) === "string" ? process.env.NODE_ENV : "staging";

//exports corresponding environment object
const environmentToExport =
  typeof(environments[currentEnvironment]) === "object"
    ? environments[currentEnvironment]
    : environments.staging;


    //export module
module.exports = environmentToExport;
