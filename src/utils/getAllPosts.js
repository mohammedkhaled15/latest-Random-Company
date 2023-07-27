import { notFound } from "next/navigation";

export const getAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) return notFound();

  return res.json();
};
