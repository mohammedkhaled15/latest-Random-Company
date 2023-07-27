import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/button/Button"
export const metadata = {
  title: "About",
  description: "This is a Description"
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} priority={true} src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt="" />
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <p className={styles.imgdesc}>Handcrafting award winning digital experience</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint voluptates voluptatibus, nostrum ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptate dolorum recusandae id enim debitis quisquam consequuntur esse reiciendis.
            <br />repellendus eum iste veniam exercitationem facilis quia, dicta nostrum. Rerum, dolore?accusantium molestiae ea iste! Quibusdam vitae ipsum, dolor nisi esse possimus ex magnam est? Fugit, dolore?</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint voluptates voluptatibus, nostrum ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptate dolorum recusandae id enim debitis quisquam consequuntur esse reiciendis.
            <br />repellendus eum iste veniam exercitationem facilis quia, dicta nostrum. Rerum, dolore?accusantium molestiae ea iste! Quibusdam vitae ipsum, dolor nisi esse possimus ex magnam est? Fugit, dolore?</p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About