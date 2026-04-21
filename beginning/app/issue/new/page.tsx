'use client';
import { Box, TextField, TextArea, Button } from '@radix-ui/themes'
import React, { useReducer } from 'react'
import dynamic from 'next/dynamic'
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});


interface IssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
 
  return (
    <form className="space-y-3 max-w-sm" 
          onSubmit={handleSubmit(async(data) => { 
            try {
              const res = await axios.post('/api/issue', data)
              router.push('/issue');
              console.log("Issue created:", res.data);

            } catch (error) {
              console.error("Error submitting issue:", error);
            }
            
          })}>
        <Box  maxWidth="300px">
            <TextField.Root size="3" placeholder="Search the docs…" {...register('title')} />
        </Box>
        <Controller 
            name="description"
            control={control}
            render={({ field }) => (
                <SimpleMDE placeholder="Reply to comment…" {...field} />
            )}
        />
        <Button>Submit new issue</Button>
    </form>
  )
}

export default NewIssuePage