import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
// import { typeDefs } from "./graphql/schema";
// import { resolvers } from "./graphql/resolvers";
import morgan from "morgan";


const app: Application = express();

// app.use(morgan("dev"));

const apolloServer = new ApolloServer({
  modules: [
    require('./graphql/version_1/modules/business/index'),
    require('./graphql/version_1/modules/businessCategory/index')
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
  console.log(`Server running on localhost:${port}/graphql`);
});
