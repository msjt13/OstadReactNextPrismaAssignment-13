import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export function handler(req) {

    const header_data = headers();
    const authHeader = header_data.get('Authorization');

    if (authHeader) {
        req.headers['Authorization'] = 'Bearer ' + authHeader;
    }
    return NextResponse.next();
}