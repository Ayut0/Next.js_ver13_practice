import React from "react";
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0, // Use 0 to opt out of using cache
    },
  });
  if (res.status !== 200) throw new Error("Failed to fetch posts");
  const posts: Post[] = await res.json();
  return posts;
};
const PostList = async () => {
  const posts = await getPosts();
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
