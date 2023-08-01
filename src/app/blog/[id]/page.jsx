import styles from "./blog.module.css"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllPosts } from "@/utils/getAllPosts"
import { getPost } from "@/utils/getPost"

const BlogPost = async ({ params }) => {
  const { id } = params

  const blog = await getPost(id)

  if (!blog) return notFound()

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

export const generateStaticParams = async () => {
  const blogs = await getAllPosts()
  return blogs.map(blog => ({ id: blog._id.toString() }))
}

export default BlogPost