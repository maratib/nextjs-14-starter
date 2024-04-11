import { UserDao } from "@/lib/dao/userDao";
import React, { FC } from "react";

type Props = {
  name?: string;
};

const MyComp: FC<Props> = async ({ name }) => {
  let users = null;

  try {
    users = await new UserDao().getUsers();
  } catch (error) {}

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default MyComp;
