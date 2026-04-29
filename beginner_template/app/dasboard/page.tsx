'use client'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import Image from 'next/image'


const Dashboard = () => {

  const fetcher = async (url: string) => 
    {
      const res = await fetch(url);
      return res.json();
    };
  
  type Props = {
    params: Promise<{ id: string }>
  }
  const session = useSession();
  console.log(session)
  const router = useRouter();

  const username = session?.data?.user?.name;
  const { data, mutate, error, isLoading } = useSWR(username ? `/api/posts?username=${username}`: null, fetcher);
  console.log(data);

  
  useEffect(() => {
    if (session.status === "unauthenticated"){
      router.push("/dasboard/login");
    }
  }, [session.status, router]); 

  if (session.status === "loading"){
    return <p>Loading ....</p>;
  }

  if (session.status === "unauthenticated"){
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget); 
    const title = formData.get("title");
    const desc = formData.get("desc");
    const img = formData.get("image");
    const content = formData.get("content");
  
    try{
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user?.name,
        }),
      });
      if (res.ok)
      {
        form.reset();
        mutate();
      }
    } catch(err){
      console.log(err);
    }
  }  


  const handleDelete = async(id: string) => {
    try{
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate(`/api/posts?username=${session?.data?.user?.name}`); 
    }
    catch(e){
      console.log(e);
    }
  }

  if (session.status ==="authenticated"){
    return <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading 
          ? "loading" 
          : Array.isArray(data) && data.map((post: any) => (
          <div className={styles.post} key = {post._id}>
            <div className={styles.imgContainer}>
              <Image src ={post.img} alt = "" width={200} height={100} />
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>  
          </div>
        ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type = "text" placeholder='Title' name="title" className={styles.input}/>
        <input type = "text" placeholder='Desc' name="desc" className={styles.input}/>
        <input type = "text" placeholder='Image' name="image" className={styles.input}/>
        <textarea placeholder='Content' name="content"  className={styles.textArea} cols={30} rows={10}></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>; 
  }
}
export default Dashboard 