"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/client";


const WithApolloProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApolloProvider;