"use client";

import Link from "next/link";
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
        <Link href='/second-page'>Go to the second page</Link>
      </div>
    </main>
  );
}
