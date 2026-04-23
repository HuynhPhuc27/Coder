import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
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
        <Link href="/blog/test" className={styles.link} key = {item.id}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://www.sheknows.com/wp-content/uploads/2024/04/drew-barrymore-kitchen-appliances-FI.jpg?w=1440"
            alt="Test"
            width={300} 
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>
            {item.body}
          </p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog