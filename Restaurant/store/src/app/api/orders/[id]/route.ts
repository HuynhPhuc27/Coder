import { prisma } from "@/utils/connec";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req:NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    try {
        const body = await req.json();
        await prisma.order.update({
            where: { 
                id:id 
            },
            data: { status: body.status },
        });
        return new Response("Order updated successfully", { status: 200 });
        
    } catch (err: any) {
        console.error(err); 
        return new NextResponse
        (
            JSON.stringify({ message: "Something went wrong" }),
            { status: 500 }
        );
    }
};