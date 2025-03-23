import { NextRequest, NextResponse } from 'next/server'
import { decrypt, verifySession } from '@/app/lib/session'
 
// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard', '/dashboard/upload']
const publicRoutes = ['/login', '/signup', '/']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  console.log("Path is : ",path)
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const session = await verifySession()
 
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.isAuth) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.isAuth &&
    req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    console.log("redirecting to /dashboard")
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}