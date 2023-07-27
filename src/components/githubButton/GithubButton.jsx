import Image from 'next/image'
import styles from './GithubButton.module.css'

const GithubBtn = ({ clickHandler }) => {
  return (
    <div className={styles.githubBtn} onClick={clickHandler}>
      <div className={styles.githubIconWrapper}>
        <Image
          className={styles.githubIcon}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          alt={"github icon"}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
      </div>
      <p className={styles.btnText}><b>Sign in with github</b></p>
    </div>
  )
}

export default GithubBtn