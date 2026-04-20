import { NextRequest } from 'next/server';
import {z} from 'zod';

const schema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
});
export async function POST(request: NextRequest) {
 
    const body = await request.json();
    const result  = schema.safeParse(body);

    if (!result.success) {
        return new Response(JSON.stringify({error: result.error}), {status: 400});
    }
}