import Post from "@/models/Post";
import connectDb from "@/utils/connectDb";

export async function POST(request) {
  const body = request.json();

  try {
    await connectDb();
    await Post.create(body);
  } catch (error) {
    console.log(error);
  }
}
