'use client'
import React from 'react'
import styles from './page.module.css'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider