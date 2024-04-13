import { db } from "@/drizzle/db";

export class UserModel {
  constructor() {}
  async getUsers() {
    return await db.query.users.findMany();
  }
}
