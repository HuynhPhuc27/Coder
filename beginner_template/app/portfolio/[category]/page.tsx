import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
type Props = {
  params: Promise<{ category: string }>
}

const Category = async ({params}: Props) => {
  const { category } = await params;
  return (
    <div className={styles.container}>
      <div className={styles.catTitle}>{category}</div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Bringing Ideas to Life Through Visual Creativity</h1>
          <p className={styles.desc}>
            We create meaningful and engaging illustrations that help tell your story in a unique way. From concept sketches to final polished artwork, our designs are crafted to match your brand identity and communicate your message clearly. Whether you need illustrations for websites, apps, posters, or marketing content, we focus on delivering visuals that feel modern, professional, and eye-catching. Our goal is to turn simple ideas into powerful designs that leave a lasting impression.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image 
              src="https://www.shutterstock.com/image-photo/astonishing-summer-view-collegiate-santa-600nw-2602956031.jpg" 
              alt="" 
              fill={true}
              className={styles.img}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Designing Experiences That Inspire</h1>
          <p className={styles.desc}>
           We create modern and visually appealing designs that connect with people and build strong brand identity. From layout planning to final design details, we focus on making every element clean, balanced, and professional. Our designs are made to improve user experience, attract attention, and communicate your message clearly. Whether it's for websites, social media, or digital products, we aim to deliver creative solutions that make your brand stand out.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image 
              src="https://png.pngtree.com/thumb_back/fh260/background/20231226/pngtree-nature-inspired-vibrant-vector-flower-illustration-a-colorful-graphic-resource-with-image_13922866.png" 
              alt="" 
              fill={true}
              className={styles.img}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Building a Strong and Memorable Brand</h1>
          <p className={styles.desc}>
           We help you create a unique brand identity that represents your values and attracts the right audience. From logo design to color palettes and typography, every detail is carefully crafted to ensure consistency and professionalism. Our goal is to design a brand image that is recognizable, trustworthy, and impactful across all platforms, helping your business stand out in a competitive market.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image 
              src="https://www.sheknows.com/wp-content/uploads/2024/04/drew-barrymore-kitchen-appliances-FI.jpg?w=1440" 
              alt="" 
              fill={true}
              className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category