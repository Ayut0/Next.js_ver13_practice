import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import { join } from "path";
import { Resolvers } from "../../apollo/__generated__/server/resolvers-type";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const typeDefs = readFileSync(
  join(process.cwd(), "apollo/documents/schema.gql"),
  "utf-8"
);

const resolvers: Resolvers = {
  Query: {
    users() {
      return [{ name: "John" }, { name: "Gordon" }, { name: "Sarah" }];
    },
  },
};

const apolloServer = new ApolloServer<Resolvers>({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
