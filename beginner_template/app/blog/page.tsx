import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/test" className={styles.link}>
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
          <h1 className={styles.title}>The Power of Strong Brand Identity</h1>
          <p className={styles.desc}>
            A strong brand identity is more than just a logo—it’s the personality of your business. In this blog, we explore how colors, typography, and consistent design can help build trust, attract customers, and make your brand stand out in today’s competitive digital world.
          </p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.link}>
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
          <h1 className={styles.title}>The Power of Strong Brand Identity</h1>
          <p className={styles.desc}>
            A strong brand identity is more than just a logo—it’s the personality of your business. In this blog, we explore how colors, typography, and consistent design can help build trust, attract customers, and make your brand stand out in today’s competitive digital world.
          </p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.link}>
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
          <h1 className={styles.title}>The Power of Strong Brand Identity</h1>
          <p className={styles.desc}>
            A strong brand identity is more than just a logo—it’s the personality of your business. In this blog, we explore how colors, typography, and consistent design can help build trust, attract customers, and make your brand stand out in today’s competitive digital world.
          </p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.link}>
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
          <h1 className={styles.title}>The Power of Strong Brand Identity</h1>
          <p className={styles.desc}>
            A strong brand identity is more than just a logo—it’s the personality of your business. In this blog, we explore how colors, typography, and consistent design can help build trust, attract customers, and make your brand stand out in today’s competitive digital world.
          </p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.link}>
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
          <h1 className={styles.title}>The Power of Strong Brand Identity</h1>
          <p className={styles.desc}>
            A strong brand identity is more than just a logo—it’s the personality of your business. In this blog, we explore how colors, typography, and consistent design can help build trust, attract customers, and make your brand stand out in today’s competitive digital world.
          </p>
        </div>
      </Link> 
    </div>
  )
}

export default Blog