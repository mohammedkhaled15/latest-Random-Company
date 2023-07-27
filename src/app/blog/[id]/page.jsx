import styles from "./blog.module.css"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllPosts } from "@/utils/getAllPosts"
import connectDb from "@/utils/connectDb"
// import { getPost } from "@/utils/getPost"
import Post from "../../../models/Post"

// export async function generateMetadata({ params }) {
//   const id = params.id
//   // const post = await getPost(id)
//   const blog = await Post.findById(id)
//   return {
//     title: blog.title,
//   }
// }

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) return notFound();

  return res.json();
};

const BlogPost = async ({ params }) => {
  const { id } = params

  ///***connecting directly without api***///
  // await connectDb()
  // const blog = await Post.findById(id)

  ///***connecting  with api***///
  const blog = await getPost(id)

  // if (!blog) return notFound()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.blogText}>
          <h2>{blog.title}</h2>
          <p>{blog.summary}</p>
          <h5>Author: {blog.username}</h5>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={blog.img}
            alt="img"
            fill
            priority={true}
          />
        </div>
      </div>
      <div className={styles.desc}>{blog.desc}</div>
    </div>
  )
}

// export const generateStaticParams = async () => {
//   await connectDb()
//   const blogs = await Post.find()
//   return blogs.map(blog => ({ id: blog._id.toString() }))
// }

export default BlogPost