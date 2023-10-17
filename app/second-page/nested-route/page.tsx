// "use client";
import React, { Suspense, useEffect, useState } from "react";
// import type { Comment } from "../../api/getComments/route";
import PostList from "../../components/Posts";
import Loading from "../../loading";
import PrismaPosts from "../../components/PrismaPosts";
import AddPostForm from "../../components/AddPostForm";

// export type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// const getPosts = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: {
//       revalidate: 0, // Use 0 to opt out of using cache
//     },
//   });
//   if (res.status !== 200) throw new Error("Failed to fetch posts");
//   const posts: Post[] = await res.json();
//   return posts;
// };

const IndexPage = async () => {
  //   const [posts, setPosts] = useState<Post[]>([]);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const res = await getPosts();
  //         if (typeof res === "undefined") {
  //           throw new Error("Posts is undefined");
  //         }
  //         setPosts(res);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     const fetchComments = async () => {
  //       try {
  //         const res = await fetch("http://localhost:3000/api/getComments");
  //         if (res.status !== 200) throw new Error("Failed to fetch comments");
  //         const comments: Comment[] = await res.json();
  //         return comments;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchPosts();
  //     fetchComments();
  //   }, []);
  //   const posts = await getPosts();

  return (
    <>
      <h2>This is nested route</h2>
      <h3>Post list</h3>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
      <PrismaPosts />
      <AddPostForm />
    </>
  );
};

export default IndexPage;
