import React, { FC } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

type Props = {
  name?: string;
};

export const AdminHeader: FC<Props> = ({ name }) => {
  return (
    <>
      <p>Admin Header</p>
      <div className="float-right">
        <ModeToggle />
      </div>
    </>
  );
};
