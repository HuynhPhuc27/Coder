'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Option = {
    optTitle: string;
    additionalPrice: number;
}

type Input = {
    title: string;
    desc: string;
    price: number;
    catSlug: string;
}
const page = () => {
    const {data:session, status} = useSession()
    const router = useRouter()
    const [input, setInput] = useState<Input>({
        title: "",
        desc: "",
        price: 0,
        catSlug: "",
    });

    const [option, setOption] = useState<Option>({
        optTitle: "",
        additionalPrice: 0,
    });

    const [options, setOptions] = useState<Option[]>([]);
    const [file, setFile] = useState<File | null>(null);

    console.log("Status: " + status);
    useEffect(() => {
        if (status === 'unauthenticated'){
        router.push("/");
      }
    }, [status, router])
    
    
    if (status === 'loading') {
        return <p>Loading...</p>
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        const item = (target.files as FileList)[0];
        setFile(item);
    }

    const upload = async() =>{
        const data = new FormData();
        data.append("file", file!);
        data.append("upload_preset", "restaurant");

        const res = await fetch("https://api.cloudinary.com/v1_1/drqexuory/image/upload", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: data
        })

        const resData = await res.json();
        console.log(resData);
        return resData.url;
    }
    const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = await upload();
        try {   
            const res = await fetch("/api/products", {
                method: "POST",
                body: JSON.stringify({
                    img: url,
                    ...input,
                    options,
                }),
            });

            const data = await res.json();
            //router.push(`/products/${data.id}`);
        
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
        <form className='flex flex-col gap-5 shadow-lg p-5 bg-red-100' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-center text-red-500'>Add new product</h1>
            <div className='flex flex-col gap-1 w-full'>
                <label>Image</label>
                <input type="file" className='border border-gray-300 bg-white rounded-md p-2' 
                onChange={handleChangeImage}/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label>Title</label>
                <input onChange={handleChange} type="text" id='title' name='title' className='border border-gray-300 bg-white rounded-md p-2' />
            </div>

            <div className='flex flex-col gap-1 w-full'>
                <label>Description</label>
                <textarea onChange={handleChange} id='desc' name='desc' className='border border-gray-300 bg-white rounded-md p-2' />
            </div>

            <div className='flex flex-col gap-1 w-full'>
                <label>Price</label>
                <input onChange={handleChange} type="number" id='price' name='price' className='border border-gray-300 bg-white rounded-md p-2' />
            </div>

            <div className='flex flex-col gap-1 w-full'>
                <label>Category</label>
                <input onChange={handleChange} type="text" id='catSlug' name='catSlug' className='border border-gray-300 bg-white rounded-md p-2' />
            </div>

            <div className='flex flex-col gap-1 w-full'>
                <label>Options</label>
                <div className='flex gap-2 w-24'>
                    <input onChange={changeOption} type="text" name='optTitle' placeholder='Option Title' className='border border-gray-300 bg-white rounded-md p-2' />
                    <input onChange={changeOption} type="number" name='additionalPrice' placeholder='Additional Price' className='border border-gray-300 bg-white rounded-md p-2' />
                </div>
                <div className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 w-32' onClick={() => {
                    setOptions((prev) => [...prev, option]);
                }}>
                    Add option
                </div>
            </div>

            <div className='flex gap-2 w-full flex-wrap'>
                {options.map((item) => (
                    <div className='flex gap-2 ring-1 ring-white rounded-md p-2 w-32 bg-red-200 cursor-pointer' key={item.optTitle} onClick={() => {
                        setOptions((prev) => prev.filter((opt) => opt.optTitle !== item.optTitle));
                    }}>
                        <span>{item.optTitle}</span>
                        <span>${item.additionalPrice}</span>
                    </div>
                ))}
            </div>

            <button type='submit' className='bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default page