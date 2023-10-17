import prisma from "../../lib/prisma";
import { Post } from "@prisma/client";

const PrismaPosts = async () => {
  // Using route handler
  const response = await fetch("http://localhost:3000/api/prisma-posts", {
    cache: "no-cache",
  });
  const posts: Post[] = await response.json();

  //   const posts = await prisma.post.findMany();

  return (
    <>
      <h2>This posts are returned from Prisma</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PrismaPosts;
