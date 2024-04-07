// pages/api/user/[[...params]].ts

import { CreateUserDTO } from "@/lib/dto/usersDto";
import {
  Body,
  createHandler,
  Get,
  HttpCode,
  Param,
  Post,
  ValidationPipe,
} from "next-api-decorators";

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
