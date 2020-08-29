"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
// import { typeDefs } from "./graphql/schema";
// import { resolvers } from "./graphql/resolvers";
const app = express_1.default();
// app.use(morgan("dev"));
const apolloServer = new apollo_server_express_1.ApolloServer({
    modules: [
        require('./graphql/version_1/modules/business/index'),
        require('./graphql/version_1/modules/businessCategory/index'),
        require('./graphql/version_1/modules/auth/index')
    ],
    context: ({ req }) => {
        // get the authorization from the request headers and return the auth if there is
        const auth = req.headers.authorization || "";
        return { auth };
    },
});
apolloServer.applyMiddleware({ app, path: "/graphql" });
app.set("view engine", "html");
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/views//index.html");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/graphql`);
});
