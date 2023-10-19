import React from "react";
import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACE_HOLDER}/posts`, {
    next: {
      revalidate: 0, // Use 0 to opt out of using cache
    },
  });

  if (res.status !== 200) throw new Error("Failed to fetch posts");
  const posts: Post[] = await res.json();
  return posts;
};

// Post
const postAPost = async () => {
  const postRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "LeBron",
        email: "kingJames@lakers.com",
      }),
    }
  );

  const data = await postRes.json();
  console.log(data);
  return data;
};

// Check how to get url query params
// const fetchComments = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`);
//     if (res.status !== 200) throw new Error("Failed to fetch comments");
//     const comments: Comment[] = await res.json();
//     return comments;
//   } catch (error) {
//     console.error(error);
//   }
// };
// fetchComments();
const PostList = async () => {
  const posts = await getPosts();
  // const post = await postAPost();
  // console.log('post',post);
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
