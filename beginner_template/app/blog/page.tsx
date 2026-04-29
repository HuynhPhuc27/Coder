import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <div className={styles.container}>
      {data.map((item: any) => (
      <Link href={`/blog/${item._id.toString()}`} className={styles.link} key = {item._id}>
        <div className={styles.imgContainer}>
          <Image 
            src={item.img}
            alt="Test"
            width={300} 
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>
            {item.desc}
          </p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog