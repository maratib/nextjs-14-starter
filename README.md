# Next.js 14 Starter

### Next API Decorator

```bash
yarn add next-api-decorators path-to-regexp class-validator class-transformer
```

```javascript
// /src/lib/dto/usersDto.ts
import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDTO {
  @IsEmail()
  email: string;
}

// src/pages/api/user/[[...params]].ts
import { CreateUserDTO } from "@/lib/dto/usersDto";
import { Body, createHandler, Get, HttpCode, Param, Post, ValidationPipe } from "next-api-decorators";

class UserHandler {
  @Get()
  public list() {
    return "from List";
  }

  @Get("/:id")
  public details(@Param("id") id: string) {
    return "from details : " + id;
  }

  @Post("/:id")
  @HttpCode(201)
  public post(@Body(ValidationPipe) body: CreateUserDTO) {
    return "from post : " + body.email;
  }
}

export default createHandler(UserHandler);

// /src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("from Middleware");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};


```

### git commands

```bash
# git checkout with new branch
git checkout -b newBranchName

# git merge
git checkout main
git merge newBranchName

# get to see local branches
git branch

# get to see remote branches
git branch -r

# get to see all branches
git branch -a



```

#### git branches

- next-fresh
- next-api-decorator
