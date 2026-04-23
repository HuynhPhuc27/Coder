import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
  href: string;
  text: string;
}

function button(props: ButtonProps) {
  return (
    <Link href={props.href} className={styles.button}>
      {props.text}
    </Link>
  )
}

export default button