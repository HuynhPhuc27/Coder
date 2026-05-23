import { authOptions, getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connec";
import { NextRequest, NextResponse } from "next/server";

//GET SINGLE PRODUCT
export const GET = async (req:NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    try {
        const product = await prisma.product.findUnique({
            where: { id }
        });

        return new NextResponse(
            JSON.stringify(product), 
            { status: 200 }
        );

    } catch (err: any) {
        console.error(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};

export const DELETE = async (req:NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const session = await getAuthSession();
    if (session?.user.isAdmin) {
        try {
            await prisma.product.delete({
                where: { id }
            });

            return new NextResponse(
                JSON.stringify("Product has been deleted"), 
                { status: 200 }
            );

        } catch (err: any) {
            console.error(err);
            return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
        }
    }

    return new NextResponse(JSON.stringify({ message: "You are not allowed" }), { status: 401 });
};