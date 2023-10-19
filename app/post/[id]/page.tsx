import type { Metadata } from "next";
import { type Post } from "../../components/Posts";

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return res.json();
};

// Set a dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPost(params.id);
  return { title: `${post.title} | App name`, description: post.body };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post: Post = await res.json();

  return (
    <>
      <h2>Post detail</h2>
      <p>ID:{post.id}</p>
      <h3>Title:{post.title}</h3>
      <p>Content:{post.body}</p>
    </>
  );
};

export default Page;
