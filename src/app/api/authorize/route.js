import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export function GET(req) {

    const token = headers().get('Authorization');
    console.log('token', token);

    return NextResponse.json({
        token: token
    })
}