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
  secretKey: "lsskjdfhemnkjhsd",
  maxChecks: 5,
  twilio: {
    fromPhone: '+1732335-6813',
    accountSid: 'ACe2250c56483266b738bfd99ebfe99348',
    authToken: '5fc4c6a0dbb92c886407a1e78d07a237'
  },
};

environments.production = {
  port: 5000,
  envName: "production",
  secretKey: "skwhebdnbfskfddsf",
  maxChecks: 5,
  twilio: {
    fromPhone: '+1732335-6813',
    accountSid: 'ACe2250c56483266b738bfd99ebfe99348',
    authToken: '5fc4c6a0dbb92c886407a1e78d07a237'
  },
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
