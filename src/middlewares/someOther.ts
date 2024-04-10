import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./stackHandler";
import { logger } from "@/logger";

function getSearchParam(param: string, url: any) {
  return url.searchParams.get(param);
}

export const someOther: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    console.log("someOther Middleware called! ");
    logger.info("Here we are!");

    // if (["/api"]?.some((path) => pathname.startsWith(path))) {
    //   const userId = request.cookies.get("userId");
    //   if (!userId) {
    //     const url = new URL(`/auth/login`, request.url);
    //     return NextResponse.redirect(url);
    //   }
    // }
    return next(request, _next);
  };
};
