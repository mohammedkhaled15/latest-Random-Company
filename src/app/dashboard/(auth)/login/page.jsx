"use client"
import GoogleBtn from "@/components/googleButton/GoogleBtn"
import { signIn, useSession } from "next-auth/react"
import styles from "./login.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"
import GithubButton from "@/components/githubButton/GithubButton"

const Login = () => {
  const router = useRouter()
  const session = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    const res = await signIn("credentials", { redirect: false, email, password })
    if (res.ok) router.push("/dashboard")

  }

  if (session.status === "loading") {
    return <p>Loading ....</p>
  }
  if (session.status === "authenticated") {
    router.push("/dashboard")
  }

  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center", margin: "25px 0 " }}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>

        <label htmlFor="email" className={styles.formLabel}>Email</label>
        <input type="email" id="email" placeholder='email' name="email" className={styles.formInput} required />

        <label htmlFor="password" className={styles.formLabel}>Password</label>
        <input type="password" id="password" placeholder='password' name="password" className={styles.formInput} required />

        {/* {error && <h4 className={styles.formError}>{error}</h4>} */}

        <input type="submit" value="Login" className={styles.formSubmit} />

        <div className={styles.formLink}>
          <Link href="/dashboard/register">I have no account!</Link>
        </div>

      </form>
      <div className={styles.externalLogin}>
        <GoogleBtn clickHandler={() => signIn("google")} />
        <GithubButton clickHandler={() => signIn("github")} />
      </div>
    </div>
  )
}

export default Login