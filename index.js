import express from "express"
import { ApolloServer } from 'apollo-server-express'

import typeDefs from "./api/schema"
import resolvers from "./api/resolvers"

const server = new ApolloServer({ typeDefs, resolvers });

let path = require('path');
const app = express();
server.applyMiddleware({ app });

app.get('/', (req, res) => {
  console.log('we need to serve the index.html now!!!');
  res.sendFile(path.join(__dirname + '/frontend/index.html'));
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
