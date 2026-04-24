import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () =>{
    try{
        await connectDB();
        const post = await Post.find();
        return NextResponse.json(post);
    }
    catch(err){
        console.error(err);
        return new NextResponse("Database Error ", {status: 500});
    }
}
