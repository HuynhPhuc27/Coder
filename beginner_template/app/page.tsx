import Image from "next/image";
import styles from './page.module.css' 
import Duck from '../public/thiet-ke-web.webp'
export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Welcome to my website - Better design for my product</h1>
        <p className={styles.desc}>This is a simple website built with Next.js and React.</p>
        <button className={styles.button}>See our Work</button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={Duck} alt="Duck Image" className={styles.img}/>
      </div>
   </div> 
  )
}
