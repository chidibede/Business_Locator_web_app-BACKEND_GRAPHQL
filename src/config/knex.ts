// all imports
import knex from "knex";
const config = require('../knexfile')

// set the environment dynamically which defaults to development env when no env is set
const environment: string = process.env.NODE_ENV || "development";

// gets the config from the particular env set (dev or prod)
const environmentConfig: {} = config[environment];

// creates the knex connection to be used in the app
export const connection = knex(environmentConfig);
