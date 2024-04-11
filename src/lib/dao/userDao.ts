import { db } from "@/drizzle/db";

export class UserDao {
  constructor() {}
  async getUsers() {
    return await db.query.users.findMany();
  }
}
