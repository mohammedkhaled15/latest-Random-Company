import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import connectDb from '@/utils/connectDb'
import Post from "../../models/Post"
// import { getAllPosts } from '../../utils/getAllPosts'

export const metadata = {
  title: "Blog Page",
  description: "This is a Description"
}

async function getAllPosts() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });

  if (!res.ok) return notFound();

  return res.json();
};



const Blog = async () => {
  ///***connecting directly without api***///
  // await connectDb()
  // const posts = await Post.find()

  ///***connecting  with api***///
  const posts = await getAllPosts()

  // if (!posts) return notFound()
  return (
    <div className={styles.container}>
      {
        posts.map(blog => {
          return (
            <div key={blog._id} className={styles.blog}>
              <div className={styles.blogText}>
                <Link href={`/blog/${blog._id}`}>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogSumm}>{blog.summary}</p>
                </Link>
              </div>
              <Link href={`/blog/${blog._id}`} className={styles.imgSection}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.blogimg}
                    src={blog.img}
                    alt='Blog Img'
                    fill={true}
                    style={{
                      objectFit: 'cover',
                    }}
                    priority={true} />
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog