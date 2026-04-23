import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import contact from "../../public/istockphoto-1139913278-1024x1024.jpg"
import Button from '@/components/Button/button'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={contact} 
                alt="Contact Image"
                className={styles.img}
                fill={true} />
        </div>
      
        <form className={styles.form}>
            <input className={styles.input} type="text" id="name" name="name" required  placeholder="Name"/>
            <input className={styles.input} type="email" id="email" name="email" required  placeholder="Email" />
            <textarea className={styles.textArea} 
                      cols={30}
                      rows={10} 
                      placeholder="Message"  ></textarea>
          <Button text="Send Message" href="#" />
        </form>
      </div>
    </div>
  )
}

export default Contact