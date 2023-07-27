import React from 'react'
import styles from "./page.module.css"

const layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.title}>Our Works</h1>
      <br />
      {children}
    </div>
  )
}

export default layout