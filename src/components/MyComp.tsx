import { UserModel } from "@/lib/models/userModel";
import React, { FC } from "react";

type Props = {
  name?: string;
};

const MyComp: FC<Props> = async ({ name }) => {
  let users = null;

  try {
    users = await new UserModel().getUsers();
  } catch (error) {}

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default MyComp;
