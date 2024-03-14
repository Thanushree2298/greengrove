import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/auth/login' || path === '/auth/signup' || path === '/auth/verifyemail' 
  || path === "/" || path === "/main/products"

  const token = request.cookies.get('token')?.value || ''

  // if(isPublicPath && token) {
  //   return NextResponse.redirect(new URL('/main', request.nextUrl))
  // }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/auth/profile',
    '/auth/login',
    '/auth/signup',
    '/auth/verifyemail'
  ]
}