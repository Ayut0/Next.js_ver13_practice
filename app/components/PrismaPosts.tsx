import prisma from "../../lib/prisma";
import { Post } from "@prisma/client";

const PrismaPosts = async () => {
  // Using route handler
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/prisma-posts`
  );

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
