import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import FacebookIcon from '../../public/facebook.png'

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}> 
          <p>@2026 Duck. All rights reserved</p>
          <span className="font-mono text-xs">&copy; Fluffy McDuck</span>
        </div>
        <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={20} height={20} className={styles.icon}></Image>
        <Image src="/instagram.png" alt="Instagram" width={20} height={20} className={styles.icon}></Image>
        <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} className={styles.icon}></Image>
        <Image src="/search.png" alt="Google" width={20} height={20} className={styles.icon}></Image>
        <Image src="/youtube.png" alt="YouTube" width={20} height={20} className={styles.icon}></Image>
      </div>
      </div>
    </>
  )
}

export default Footer
