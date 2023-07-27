import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connectDb();
  const hashedPass = await bcryptjs.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPass });
  try {
    await newUser.save();
    return new NextResponse("User Created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
