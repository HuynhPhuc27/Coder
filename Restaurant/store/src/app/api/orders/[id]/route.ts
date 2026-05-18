import { prisma } from "@/utils/connec";
import { NextRequest } from "next/server";

export const PUT = async (req:NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
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
        return new Response(err.message || "Something went wrong", { status: 500 });
    }
};