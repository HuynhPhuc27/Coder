import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

 
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = await params
 
  const res = await fetch(`http://localhost:3000/api/posts/${id}`).then((res) => res.json()) 
  return {
    title: res.title
  }
}

const BlogPost = async ({params}: Props) => {
  const { id } = await params;
  const data = await getData(id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc} 
          </p>

          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.sheknows.com/wp-content/uploads/2024/04/drew-barrymore-kitchen-appliances-FI.jpg?w=1440"
            alt=""
            width={500}
            height={300}
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.longDesc}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost