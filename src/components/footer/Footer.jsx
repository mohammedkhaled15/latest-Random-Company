import styles from "./footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Mohammed Khaled All Rights Reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="social" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="social" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="social" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="social" />
      </div>
    </div>
  )
}

export default Footer