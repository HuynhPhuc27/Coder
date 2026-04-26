'use client'
import React from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Dashboard = () => {

  const session = useSession();
  console.log(session)
  const router = useRouter
  if (session.status === "loading"){
    return <p>Loading ....</p>;
  }

  

  return (
    <div className={styles.container}>Dashboard</div>
  )
}
export default Dashboard 