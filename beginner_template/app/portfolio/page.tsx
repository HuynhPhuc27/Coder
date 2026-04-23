import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a suitable gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustration" className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href="/portfolio/website" className={styles.item}>
          <span className={styles.title}>Website</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio