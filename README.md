# Next.js 14 Starter

### Next Layouts

### Next Shadcn/ui

```bash
npx shadcn-ui@latest init

npx shadcn-ui@latest add button
```

### Next Drizzle

```bash
yarn add drizzle-orm pg
yarn add -D drizzle-kit @types/pg @faker-js/faker tsx

# add to scripts of package.json
 "db:schema": "drizzle-kit generate:pg",
 "db:migrate": "tsx src/drizzle/migrate.ts",
 "db:introspect": "drizzle-kit introspect:pg",
 "db:seed": "tsx src/drizzle/seed.ts",
 "db": "yarn db:schema && yarn db:migrate && yarn db:seed",
 "studio": "drizzle-kit studio"



```

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
```

```javascript
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
```

```javascript
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

# delete branch locally
git branch -d localBranchName

# delete branch remotely
git push origin --delete remoteBranchName

```

#### git branches

- next-fresh
- next-api-decorator
- next-drizzle
- next-shadcn
- next-layouts
