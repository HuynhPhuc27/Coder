import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, {params}: {params: Promise<{id: string}>}) =>{
    try{
        await connectDB();
        const { id } = await params
        const post = await Post.findById(id);

        if (!post){
            return new NextResponse("Post not found ", {status: 404});
        }
        return NextResponse.json(post);
    }
    catch(err){
        console.error(err);
        return new NextResponse("Database Error ", {status: 500});
    }
}
