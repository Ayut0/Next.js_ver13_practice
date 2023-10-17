import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  return NextResponse.json(id);
};
