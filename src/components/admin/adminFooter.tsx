import React, { FC } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

type Props = {
  name?: string;
};

export const AdminFooter: FC<Props> = ({ name }) => {
  return (
    <div className="container mx-auto">
      <p>Admin Footer</p>
    </div>
  );
};
