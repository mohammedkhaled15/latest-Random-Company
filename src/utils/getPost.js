import { notFound } from "next/navigation";
import connectDb from "./connectDb";
import Post from "@/models/Post";

export const getPost = async (id) => {
  try {
    await connectDb();
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};
