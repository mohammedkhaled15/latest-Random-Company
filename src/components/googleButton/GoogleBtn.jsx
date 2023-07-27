import Image from 'next/image'
import styles from './googleBtn.module.css'

const GoogleBtn = ({clickHandler}) => {
  return (
    <div className={styles.googleBtn} onClick={clickHandler}>
      <div className={styles.googleIconWrapper}>
        <Image
          className={styles.googleIcon}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          alt={"google icon"}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      </div>
      <p className={styles.btnText}><b>Sign in with google</b></p>
    </div>
  )
}

export default GoogleBtn