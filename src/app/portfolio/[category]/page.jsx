import React from 'react'
import styles from "./category.module.css"
import { categories } from './data'
import Button from '@/components/button/Button'
import Image from 'next/image'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'


const Category = ({ params }) => {
  const { category } = params
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{capitalizeFirstLetter(category)}</h1>
      <div className={styles.contents}>
        {categories[category].map(item => {
          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemText}>
                <h2>{item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis facere fuga ea! Doloribus quas beatae reiciendis et commodi odit officiis, quisquam nihil maxime ratione dolorum, nobis pariatur molestiae laudantium aliquid!</p>
                <Button url="#" text="See more" />
              </div>
              <div className={styles.imgContainer}>
                <Image className={styles.img} src={item.imgUrl} alt="pic" fill={true} priority={true} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Category