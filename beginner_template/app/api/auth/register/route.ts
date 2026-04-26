import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    
    try{
        const {name, email, password } = await req.json();
        
        await connectDB();

        const hashpassword = await bcrypt.hash(password, 5);
        
        await User.create({
            name,
            email,
            password: hashpassword,
        });

        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch(err: any){
        console.log(err);
        return new NextResponse(err.message, {
            status: 500,
        });
    } 
};