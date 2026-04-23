import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (category: string) => {
  const data = items[category as keyof typeof items];
  if (!data) {
    return notFound();
  } 

  
  return data;
  
}

interface Props {
  params: Promise<{ category: string }>
}

const Category = async ({params}: Props) => {

  const category = (await params).category;
  const data = getData(category);

  return (
    <div className={styles.container}>
      <div className={styles.catTitle}>{category}</div>
      {data.map((item) => (
        <div className={styles.item} key ={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>
              {item.desc}
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image 
                src={item.image} 
                alt="" 
                fill={true}
                className={styles.img}
            />
          </div>
        </div>    
        ))}  
    </div>
  )
}

export default Category