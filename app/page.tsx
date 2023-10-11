"use client"

import User from "./components/User";
import WithApolloProvider from "./provider/ApolloProvider";

export default function Home() {
  return (
    <main>
      {/* <WithApolloProvider>
        <User />
      </WithApolloProvider> */}
      <div>
        <h1>Home</h1>
        <p>GraphQL with Next.js</p>
      </div>
    </main>
  );
}
