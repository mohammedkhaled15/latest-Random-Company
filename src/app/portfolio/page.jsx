import styles from "./page.module.css"
import { portfolio } from "./data"
import Image from "next/image"
import Link from "next/link"
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter"

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>Choose a gallery</h2>
      <div className={styles.cardsContainer}>
        {
          portfolio.map(card => {
            return (
              <Link key={card.id} href={`/portfolio/${card.title}`}>
                <div className={styles.card} >
                  <Image
                    className={styles.img}
                    src={card.imgUrl}
                    alt={card.title}
                    fill={true}
                  />
                  <p className={styles.cardText}>{capitalizeFirstLetter(card.title)}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio