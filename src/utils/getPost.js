import { notFound } from "next/navigation";

export const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) return notFound();

  return res.json();
};
