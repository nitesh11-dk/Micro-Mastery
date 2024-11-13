import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';

let token =   request.cookies.get("token")?.value || "" ;

if(token && isPublicPath){
    return NextResponse.redirect(new URL('/profile', request.url))

}
if(!token && !isPublicPath){
    return NextResponse.redirect(new URL('/login', request.url))
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/verifyemail',
    '/profile'
  ],
}

// MONGO_URI='mongodb+srv://nitesh_dk:rakesh114@nitesh.zownidz.mongodb.net/?retryWrites=true&w=majority&appName=NItesh'

// TOKEN_JWT='EFGJKFGJKLN3894574398875,DFMSGNGKM5289'

// DOMAIN='http://localhost:3000'

