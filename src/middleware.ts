import { stackMiddlewares } from "@/middlewares/stackHandler";
import { withUser } from "@/middlewares/withUser";
import { someOther } from "@/middlewares/someOther";

const middlewares = [withUser, someOther];
export default stackMiddlewares(middlewares);

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   console.log("from Middleware");
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/api/:path*",
// };

// Multiple Middlewares
// https://stackoverflow.com/questions/76603369/how-to-use-multiple-middlewares-in-next-js-using-the-middleware-ts-file

// https://medium.com/@zachshallbetter/middleware-in-next-js-a-comprehensive-guide-7dd0a928541a
