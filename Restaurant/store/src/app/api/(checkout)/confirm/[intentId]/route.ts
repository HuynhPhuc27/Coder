import { prisma } from "@/utils/connec";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ intentId: string }> }
) {
  const { intentId } = await params;
  try{

    await prisma.order.update({
      where: {
        id: intentId,
      },
      data: { status: "Being prepared" },
    });
    return new NextResponse(
        JSON.stringify({ message:"Order updated successfully!" }),
        { status: 200 }
    );

  } catch(err){
    return new NextResponse(
      JSON.stringify({ message: "Error updating order!" }),
      { status: 500 }
    );
  }
  
}