import connectDb from "./connectDb";
import Post from "@/models/Post";

export const getAllPosts = async () => {
  try {
    await connectDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};
