export { default } from "next-auth/middleware";

// pages to be protected
export const config = { matcher: ["/dashboard"] };
