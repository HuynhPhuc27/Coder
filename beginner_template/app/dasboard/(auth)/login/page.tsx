'use client';
import { signIn } from 'next-auth/react'
import React, {useState} from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

const Login = () => {
  const [err, setErr] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); 
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {email, password, redirect: false});

    if (res?.error){
      setErr(res.error);
      return;
    }
    router.push("/dasboard/")
  }  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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

        <button className={styles.login}>Login</button>
      </form>
      <button className={styles.buttonGG} onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login