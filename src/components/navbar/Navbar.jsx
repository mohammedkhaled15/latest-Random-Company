"use client"
import Link from 'next/link'
import { links } from './data'
import styles from "./navbar.module.css"
import ThemeToggler from '../themeToggle/ThemeToggler'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>Mo.Next</Link>
      <div className={styles.links}>
        <ThemeToggler />
        {links.map(link => {
          return (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          )
        })}
        {session.status === "authenticated" && <button className={styles.logout} onClick={() => signOut()}>Logout</button>}
        {session.status === "unauthenticated" && <button className={styles.logout}><Link href={"/dashboard/login"}>Login</Link></button>}
      </div>
    </div>
  )
}

export default Navbar