"use client"
import Link from 'next/link'
import styles from './register.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Register = () => {

  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, password, email
        })
      })
      res.status === 201 ? router.push("/dashboard/login") : null

    } catch (error) {
      // console.log(res)
      setError("Something Went Wrong")
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <label htmlFor="username" className={styles.formLabel}>Username</label>
      <input type="text" id="username" placeholder='username' name="username" className={styles.formInput} required />

      <label htmlFor="email" className={styles.formLabel}>Email</label>
      <input type="email" id="email" placeholder='email' name="email" className={styles.formInput} required />

      <label htmlFor="password" className={styles.formLabel}>Password</label>
      <input type="password" id="password" placeholder='password' name="password" className={styles.formInput} required />

      {error && <h4 className={styles.formError}>{error}</h4>}

      <input type="submit" value="Submit" className={styles.formSubmit} />

      <div className={styles.formLink}>
        <Link href="/dashboard/login">I already have an account</Link>
      </div>

    </form>
  )
}

export default Register