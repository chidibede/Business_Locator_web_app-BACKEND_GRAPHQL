"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
// all imports
const knex_1 = __importDefault(require("knex"));
const config = require('../knexfile');
// set the environment dynamically which defaults to development env when no env is set
const environment = process.env.NODE_ENV || "development";
// gets the config from the particular env set (dev or prod)
const environmentConfig = config[environment];
// creates the knex connection to be used in the app
exports.connection = knex_1.default(environmentConfig);
