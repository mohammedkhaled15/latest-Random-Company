"use client"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"
import { useSession } from 'next-auth/react'
import Link from "next/link"
import Image from "next/image"
import usewSWR from "swr"
import { revalidatePath } from "next/cache"

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const session = useSession()
  const router = useRouter()
  const { data, mutate, isLoading, error } = usewSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submited")
    const title = e.target[0].value
    const desc = e.target[1].value
    const summary = e.target[2].value
    const img = e.target[3].value
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, desc, summary, img, username: session?.data?.user.name })
      })
      await fetch("http://localhost:3000/api/revalidate?path=/blog")
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE"
      })
      console.log("Post Deleted")
      await fetch("http://localhost:3000/api/revalidate?path=/blog")
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "loading") {
    return <p>Loading ....</p>
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login")
  }
  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Welcome {session.data.user.name}</h3>
        <div className={styles.blogsContainer}>
          {
            isLoading ? "Loading ...." : data?.map(blog => {
              return (
                <div key={blog._id} className={styles.blog}>
                  <div onClick={() => handleDelete(blog._id)} className={styles.delete}>X</div>
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
        <div className={styles.addPost}>
          <h4 className={styles.subTitle}>Add New Post</h4>
          <form id="form" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="title">Title:</label>
              <input className={styles.input} type="text" id="title" name="title" placeholder="Enter title" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="desc">Description:</label>
              <textarea className={styles.input} id="desc" name="desc" placeholder="Enter description" required></textarea>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="summary">Summary:</label>
              <textarea className={styles.input} id="summary" name="summary" placeholder="Enter summary" required></textarea>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="img-url">Image URL:</label>
              <input className={styles.input} type="url" id="img-url" name="img-url" placeholder="Enter image URL" required />
            </div>
            <button className={styles.button}>Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Dashboard