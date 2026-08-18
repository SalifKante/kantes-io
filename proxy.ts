import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Next 16 renamed `middleware.ts` to `proxy.ts`; the contract is unchanged.
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals, and anything with a file extension.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
