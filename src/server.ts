import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";

const app: Application = express();

if (process.env.NODE_ENV === "development") {
  const apolloServer = new ApolloServer({
    modules: [
      require("./graphql/version_1/modules/business/index"),
      require("./graphql/version_1/modules/businessCategory/index"),
      require("./graphql/version_1/modules/auth/index"),
    ],
    context: ({ req }) => {
      // get the authorization from the request headers and return the auth if there is
      const auth = req.headers.authorization || "";
      return { auth };
    },
  });
  apolloServer.applyMiddleware({ app, path: "/graphql" });
} else {
  const apolloServer = new ApolloServer({
    modules: [
      require("./graphql/version_1/modules/business/index"),
      require("./graphql/version_1/modules/businessCategory/index"),
      require("./graphql/version_1/modules/auth/index"),
    ],
    playground: true,
    context: ({ req }) => {
      // get the authorization from the request headers and return the auth if there is
      const auth = req.headers.authorization || "";
      return { auth };
    },
  });
  apolloServer.applyMiddleware({ app, path: "/graphql" });
}

app.set("view engine", "html");
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views//index.html");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
