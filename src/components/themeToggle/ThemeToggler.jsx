"use client"
import { useContext } from 'react'
import styles from './themeToggler.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggler = () => {
  const { mode, toggle } = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball} style={mode === "dark" ? { right: "3px" } : { left: "3px" }} />
    </div>
  )
}

export default ThemeToggler