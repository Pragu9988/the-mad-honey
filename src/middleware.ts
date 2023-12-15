import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = cookies().get("authToken");
  console.log("aaa", authToken);
  if (request.nextUrl.pathname.startsWith("/login") && authToken?.value) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
