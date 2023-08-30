import {NextResponse} from "next/server";
import { headers } from 'next/headers';

export function middleware(req) {
    console.log('middleware', req.nextUrl.pathname);

    if(req.nextUrl.pathname.startsWith("/api/authorize")){

        const reqHeaders = new Headers(req.headers);
        const token = reqHeaders.get('Authorization');
        console.log('middleware token', token);

        // const response = NextResponse.next();
        // response.headers.set('Authorization', "Bearer "+token);
        // return response;

        reqHeaders.set('Authorization', "Bearer "+token);
        return  NextResponse.next({
            request: {headers: reqHeaders},
        })
    }

    return NextResponse.next();
}

export const config= {

    matcher:['/api/:path*']
}