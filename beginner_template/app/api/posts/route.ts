import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) =>{
    const url = new URL(req.url);
    const username = url.searchParams.get("username");

    try{
        await connectDB();
        const post = await Post.find(username ? { username } : {});
        return NextResponse.json(post);
    }
    catch(err){
        console.error(err);
        return new NextResponse("Database Error ", {status: 500});
    }
}

export const POST = async (req: Request) =>{
    const body = await req.json();
    const newPost = new Post(body);
    
    try{
        await connectDB();
        await newPost.save();

        return NextResponse.json("Post has been created", {status: 201});
    }
    catch(err){
        console.error(err);
        return new NextResponse("Database Error ", {status: 500});
    }
}
