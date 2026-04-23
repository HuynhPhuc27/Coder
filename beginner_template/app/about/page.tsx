import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AboutPic from '../../public/pexels-hoinommm-19337582.jpg'
import Button from '@/components/Button/button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={AboutPic}
               alt="About Image" 
               fill={true}
               className={styles.img}/>
        <div className={styles.imgText}> 
          <h1 className={styles.imgTitle}>Team Collaboration</h1>
          <h2 className={styles.imgDesc}>A modern team working together to create innovative digital solutions.</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are</h1>
          <p className={styles.desc}>
            We are a passionate team of developers and designers dedicated to building modern, user-friendly, and high-quality digital products. 
            <br />
            <br />
            With creativity, technical expertise, and attention to detail, we aim to help individuals and businesses grow through technology.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We do</h1>
          <p className={styles.desc}>
            We specialize in web development, UI/UX design, and creating responsive websites that work smoothly across all devices. Our mission is to deliver reliable, efficient, and visually appealing solutions that meet real-world needs and provide the best experience for users.
            <br />
            <br /> - Build modern and responsive websites 
            <br />
            <br /> - Design clean and user-friendly interfaces (UI/UX) 
            <br />
            <br />- Develop fast and secure web applications
          </p>
          <Button href="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  )
}

export default About