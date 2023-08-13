import { ApolloClient, InMemoryCache } from "@apollo/client";


// Stores the Apollo Client cache in memory
const cache = new InMemoryCache();

export const client = new ApolloClient({
    uri: '/api/graphql',
    cache: cache
})