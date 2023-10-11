// If you using api dir in app dir (Next.js 13.4)

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

// Apollo Server instance takes typeDefs and resolvers
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Make sure you don't use the same handler and the Apollo Server instance
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
