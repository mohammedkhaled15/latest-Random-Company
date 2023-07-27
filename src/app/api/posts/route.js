import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connectDb();

    const posts = await Post.find(username && { username });
    // const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  console.log(body);

  const newPost = new Post(body);

  try {
    await connectDb();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
