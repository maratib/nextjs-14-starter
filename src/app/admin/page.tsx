// import { UserDao } from "@/lib/dao/userDao";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  let users = null;

  // try {
  //   users = await new UserDao().getUsers();
  // } catch (error) {}

  return (
    <main>
      <h1 className="text-red-600">Admin Dashboard Page</h1>
      <Button>Click me</Button>
    </main>
  );
}
