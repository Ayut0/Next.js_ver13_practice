"use client";
import React, { useEffect, useState } from "react";
import type { Comment } from "../../api/getComments/route";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (res.status !== 200) throw new Error("Failed to fetch posts");
  const posts: Post[] = await res.json();
  return posts;
};

const IndexPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        if (typeof res === "undefined") {
          throw new Error("Posts is undefined");
        }
        setPosts(res);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/getComments");
        if (res.status !== 200) throw new Error("Failed to fetch comments");
        const comments: Comment[] = await res.json();
        console.log(comments);
        return comments;
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
    fetchComments();
  }, []);
  return (
    <>
      <h2>This is nested route</h2>
      <h3>Post list</h3>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;
