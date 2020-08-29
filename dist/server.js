"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
const apolloServer = new apollo_server_express_1.ApolloServer({
    modules: [
        require('./graphql/version_1/modules/business/index'),
        require('./graphql/version_1/modules/businessCategory/index'),
        require('./graphql/version_1/modules/auth/index')
    ],
    playground: true,
});
apolloServer.applyMiddleware({ app, path: "/graphql" });
app.set("view engine", "html");
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/views//index.html");
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/graphql`);
});
