import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

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

export const GET = async (
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | Error>
) => {
  if (req.method === "GET") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    if (response.status !== 200) {
      return NextResponse.json({ message: "Error Occurred" });
    }
    const comments: Comment[] = await response.json();
    return NextResponse.json(comments);
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
};
