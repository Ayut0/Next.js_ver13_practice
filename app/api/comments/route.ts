import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Error = {
  message: string;
};

// GET
export const GET = async (
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | Error>
) => {
  // Tp grab a header or cookie
  const headerList = headers();
  const cookieList = cookies();

  console.log("header list", headerList);
  console.log("cookie list", cookieList);

  if (req.method === "GET") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    // Check how to get url query params

    // console.log("req", req);
    // const { searchParams } = new URL(req.url);
    // console.log("search params", searchParams);
    // const postId = searchParams.get("postId");
    // console.log("post id", postId);

    if (response.status !== 200) {
      return NextResponse.json({ message: "Error Occurred" });
    }
    const comments: Comment[] = await response.json();
    return NextResponse.json(comments);
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
};

// POST
export const POST = async (req: Request) => {
  const res = await req.json();
  return NextResponse.json(res);
};
