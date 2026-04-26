'use client';

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import { error } from 'console';
import { useRouter } from 'next/navigation';

const Register = () => {

  const [err, setErr] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try{
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password
        }),
      });

      res.status === 201 && router.push("/dasboard/login?success=Account has been created");
    } catch(err){
      setErr(true)

    }

  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type='text'
          name = "name"
          placeholder='Username'
          className={styles.input}
          required
        />

        <input 
          type='email'
          name = "email"
          placeholder='Email'
          className={styles.input}
          required
        />

        <input 
          type='password'
          name = "password"
          placeholder='Password'
          className={styles.input}
          required
        />

        <button className={styles.register}>Register</button>
      </form>
      {err && <p style = {{color: "red"}}>{err}</p>}
      <Link href ="/dasboard/login">Login with existing account</Link>
    </div>
  )
}

export default Register