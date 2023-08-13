"use client";

import { useQuery } from "@apollo/client";
import { gql } from "../../apollo/__generated__/client";

const ALL_USERS = gql(`query ALL_USERS {
  users {
    name
  }
}`);

const User = () => {
  const { data, loading, error } = useQuery(ALL_USERS);
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <ul>
        {data?.users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;