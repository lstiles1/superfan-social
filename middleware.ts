import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: [ '/', '/api/webhook/clerk', '/anyone-can-visit-this-route' ],
    ignoredRoutes: ['/no-auth-in-this-route', '/api/webhook/clerk']
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};