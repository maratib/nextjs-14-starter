import { UserDao } from "@/lib/dao/userDao";
import Image from "next/image";

export default async function Home() {
  let users = null;

  try {
    users = await new UserDao().getUsers();
  } catch (error) {}

  return (
    <main>
      <h1 className="text-red-600">Hello</h1>
      {JSON.stringify(users)}
    </main>
  );
}
