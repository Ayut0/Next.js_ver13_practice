"use client"

import User from "./components/User";
import WithApolloProvider from "./provider/ApolloProvider";

export default function Home() {
  return (
    <main>
      <WithApolloProvider>
        <User />
      </WithApolloProvider>
    </main>
  );
}
