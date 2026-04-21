import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

const schema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required'),
});
export async function POST(request: NextRequest) {
 try {
    const body = await request.json();
    const result  = schema.safeParse(body);

    if (!result.success) {
        return new Response(JSON.stringify({error: result.error}), {status: 400});
    }

    const issue = await prisma.issue.create({
        data: {
            title: result.data.title,
            description: result.data.description,
        }
    });

    return NextResponse.json(issue, { status: 201 });
    } catch (error: any) {
        console.log("SERVER ERROR:", error);
        return NextResponse.json(
            { error: error.message ?? "Internal Server Error" },
            { status: 500 }
        );
    }
}